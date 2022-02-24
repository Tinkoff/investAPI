# API Тинькофф Инвестиций

Tinkoff Invest API — это интерфейс для взаимодействия с торговой платформой [Тинькофф Инвестиции](https://www.tinkoff.ru/invest/).

# Примеры решаемых задач

### Анализ котировок бумаг

Через API можно загрузить как исторические котировки, так и котировки в режиме реального времени по всем бумагам

### Сигналы на покупку или продажу

Торговлю по алгоритму можно автоматизировать, запрограммировав выставление сигналов


### Ведение собственной системы статистики

Если не хватает существующей функциональности по анализу портфеля, то легко сделать свою собственную

### Тестирование стратегий на истории

Tinkoff Invest API позволит протестировать торговую гипотезу на основе исторических данных

### Создание торговых роботов

При помощи Tinkoff Invest API можно создать своего торгового робота, осуществляющего полностью автоматическую торговлю по стратегии


# Функциональные возможности
API позволяет автоматизировать торговлю ценными бумагами, предоставляя возможность:
* выгрузки торговых инструментов и их параметров;
* выгрузки истории котировок и текущие рыночные котировки;
* выставление и отмены поручений;
* просмотр текущего портфеля и операций;
* времени работы бирж;
* ставки риска инструментов;
* подписку на поток сделок;

и многое другое

# Об API и протоколе
API реализован на быстром, удобном и функциональном протоколе [gRPC](https://grpc.io/docs/).

Для поддержки web-клиентов, например браузерных JS скриптов, внедрена поддержка [gRPC-web](https://grpc.io/docs/platforms/web/basics/).

А для клиентов, привыкших работать с REST API, реализован прокси [Swagger](https://tinkoff.github.io/investAPI/swagger-ui/)


[Документация для разработчиков](https://tinkoff.github.io/investAPI/)

# SDK
Вы можете как самостоятельно создать обертку по [proto-контрактам](https://github.com/Tinkoff/investAPI/tree/main/src/docs/contracts) так воспользоваться одним из SDK:

## Официальные
* [python](https://github.com/Tinkoff/invest-python)
* [java](https://github.com/Tinkoff/invest-api-java-sdk)
* [csharp](https://github.com/Tinkoff/invest-api-csharp-sdk)
* [golang](https://github.com/Tinkoff/invest-openapi-go-sdk)

## Неофициальные
* [nodejs](https://github.com/betslus1/unofficial-tinkoff-invest-api_v2-lazy-sdk-NODEJS)
* [php](https://github.com/metaseller/tinkoff-invest-api-v2-php)
* [php YII2](https://packagist.org/packages/metaseller/tinkoff-invest-api-v2-yii2)
* [swift](https://github.com/JohnReeze/TinkoffInvestSwiftSDK)
* [rust](https://github.com/ovr/tinkoff-invest-rust)

SDK на других языках в процессе разработки.


# Как работать с этим репозитарием

В [Issues](https://github.com/Tinkoff/investAPI/issues) вы можете задать вопрос или найти ответ, если вопрос уже был задан другими пользователями.

Если вы встретили неточность или хотели бы что-то дополнить, то мы будем рады принять от вас pull request.

# Сообщество

[Telegram-чат](https://t.me/joinchat/VaW05CDzcSdsPULM)
