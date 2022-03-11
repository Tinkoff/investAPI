##SDK для Java

####Официальные SDK:
* [invest-api-java-sdk](https://github.com/Tinkoff/invest-api-java-sdk)

####Неофициальные SDK:


##Примеры взаимодействия: 

Примеры подключения и получения данных доступны в репозитории официальной SDK:
[/tinkoff/piapi/example/Example.java](https://github.com/Tinkoff/invest-api-java-sdk/blob/main/example/src/main/java/ru/tinkoff/piapi/example/Example.java)

### Основные классы для работы
`ManagedChannel` - абстракция канала до сервера. Следует переиспользовать один и тот же канал во всем приложении.

При создании канала следует использовать метод `io.grpc.ManagedChannelBuilder#useTransportSecurity`, т.к. сервер API поддерживает только защищенное соединение.

Для автоматической проверки работоспособности канала следует использовать метод `io.grpc.ManagedChannelBuilder#keepAliveTime` при иницииализации. Допускается время `keepAlive` не менее 10 секунд.

`*Stub` - сгенерированные классы клиентов для сервисов API.
Существует три варианта клиентов:
1. Неблокирующий - `ServiceNameStub`, например `InstrumentsServiceStub`. Все методы такого клиента принимают два параметра: запрос и обработчик результата вызова `io.grpc.stub.StreamObserver`. Методы обработчика будут вызваны после получения результата. Не рекомендуется выполнять блокирующие операции (I/O, любые операции с ожиданием завершения) в методах обработчика.
2. Блокирующий - `ServiceNameBlockingStub`, например `InstrumentsServiceBlockingStub`. Все методы такого клиента принимают один параметр - запрос и возвращают результат либо выбрасывают исключение. Вызов метода блокирует поток исполнения до получения результата или исключения.
3. Асинхронный - `ServiceNameFutureStub`, например `InstrumentsServiceFutureStub`. Все методы такого клиента принимают один параметр - запрос и возвращают объект типа `com.google.common.util.concurrent.ListenableFuture`.

### Таймаут запроса
В gRPC используется deadline вместо таймаута - время в будущем, до наступления которого будет проводится ожидание выполнения вызова. Если результат не получен, и время deadline наступило - на клиенте возникнет ошибка с кодом `DEADLINE_EXCEEDED`. При этом возможна ситуация, что на сервере API операция была обработана успешно. Для критичных действий предлагается использовать ключ идемпотентности.

Рекомендуемый способ установки deadline: вызов метода `io.grpc.stub.AbstractStub#withDeadlineAfter`. Обратите внимание, что период времени начинает отсчитываться сразу после выполениня этого метода.

### Метаданные
Метаданные - аналог заголовков в HTTP.
#### Передача метаданных запроса
Для использования API необходимо передавать метаданные с ключом `"Authorization"` и значением `"bearer {token}"`. [Подробнее здесь](https://tinkoff.github.io/investAPI/token/).
Можно добавить перехватчик в канал с помощью метода `io.grpc.ManagedChannelBuilder#intercept(io.grpc.ClientInterceptor...)`. Пример авторизационого перехватичка:
```java
public class AuthInterceptor implements ClientInterceptor {

    private static final String AUTH_HEADER_NAME = "Authorization";
    private static final Metadata.Key<String> AUTH_HEADER = Metadata.Key.of(AUTH_HEADER_NAME, Metadata.ASCII_STRING_MARSHALLER);

    private final String authHeaderValue;

    public AuthInterceptor(String token) {
        this.authHeaderValue = "Bearer " + token;
    }

    @Override
    public <ReqT, RespT> ClientCall<ReqT, RespT> interceptCall(MethodDescriptor<ReqT, RespT> methodDescriptor, CallOptions callOptions, Channel channel) {
        var call = channel.newCall(methodDescriptor, callOptions);
        return new ForwardingClientCall.SimpleForwardingClientCall<>(call) {
            @Override
            public void start(Listener<RespT> responseListener, Metadata headers) {
                headers.put(AUTH_HEADER, authHeaderValue);
                super.start(responseListener, headers);
            }
        };
    }
}
```

#### Получение метаданных ответа
В метаданных ответа для unary-методов передаются [идентификатор отслеживания](https://tinkoff.github.io/investAPI/grpc/#tracking-id) и описание ошибки.
Для получения метаданных ответа можно использовать перехватчик `io.grpc.stub.MetadataUtils#newCaptureMetadataInterceptor`, например:
```java
var headersCapture = new AtomicReference<Metadata>();
var trailersCapture = new AtomicReference<Metadata>();
instruments.withInterceptors(MetadataUtils.newCaptureMetadataInterceptor(headersCapture, trailersCapture)).getInstrumentBy(...);
```
После выполнения метода переменная `headersCapture` будет содержать метаданные ответа.

При работе с методами клиентов исключения следует конвертировать в статус с помощью `io.grpc.Status#fromThrowable`. В поле `description` статуса будет содержаться [код ошибки](https://tinkoff.github.io/investAPI/errors/).