#Ошибки сервисов TINKOFF INVEST API

| Код ошибки | Текст ошибки | Причины возникновения и </br> рекомендации по устранению |
| :--------- | :----------- | :------------- |
|30001|missing parameter: from                     |Входной параметр *from* является обязательным. </br> Укажите корректный параметр *from*.|
|30002|the required period should not exceed 7 days|Запрошенный период не может превышать 7 дней. </br> Укажите корректный период.|
|30003|from can't be less than the current date    |Входной параметр *from* не может быть меньше текущей даты. </br> Укажите корректный параметр *from*.|
|30004|missing parameter: to                       |Входной параметр *to* является обязательным. </br> Укажите корректный параметр *to*.|
|30005|id_type is invalid                          |Входной параметр *id_type* имеет некорректное значение.</br>Список доступных значений: [*id_type*](/doctest/instruments#instrumentidtype).|
|30006|missing parameter: id_type                  |Входной параметр *id_type* является обязательным. </br> Укажите корректный параметр *id_type*.|
|30007|missing parameter: id                       |Входной параметр *id* является обязательным. </br> Укажите корректный параметр *id*.|
|30008|missing parameter: figi                     |Входной параметр *figi* является обязательным. </br> Укажите корректный параметр *figi*.|
|30009|unable to parse 'from' date                 |Входной параметр *from* имеет некорректный формат.</br>Подробнее про используемый формат дат: [google.protobuf.Timestamp](https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/Timestamp).|
|30010|unable to parse 'to' date                   |Входной параметр *to* имеет некорректный формат.</br>Подробнее про используемый формат дат: [google.protobuf.Timestamp](https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/Timestamp).|
|30011|interval is invalid                         |Входной параметр *interval* имеет некорректное значение.</br>Список доступных значений: [*interval*](/doctest/marketdata#subscriptioninterval).|
|30012|to can't be less then from                  |Входной параметр *to* не может быть меньше параметра *from*. </br>Укажите корректные параметры *from* и *to*.|
|30013|class_code require for id_type = ticker     |Входной параметр *class_code* не может быть пустым при поиске по тикеру. </br>Укажите корректный параметр *class_code*. </br>Подробнее: [Идентификация инструментов](/doctest/faq_identification/).|
|30014|the maximum request period for the given candle interval has been exceeded|Превышен максимальный период запроса для данного интервала свечи. </br>Укажите корректный интервал.|
|30015|missing parameter: quantity                 |Входной параметр *quantity* является обязательным. </br> Укажите корректный параметр *quantity*.|
|30016|quantity is invalid                         |Входной параметр *quantity* имеет некорректное значение.</br>Параметр *quantity* должен быть целым числом.|
|30017|missing parameter: price                    |Входной параметр *price* является обязательным. </br> Укажите корректный параметр *price*.|
|30018|price is invalid                            |Входной параметр *price* имеет некорректное значение.</br>Параметр *price* должен быть числом.|
|30019|missing parameter: direction                |Входной параметр *direction* является обязательным. </br> Укажите корректный параметр *direction*.|
|30020|direction is invalid                        |Входной параметр *direction* имеет некорректное значение.</br>Список доступных значений: [*direction*](/doctest/orders#orderdirection).|
|30021|missing parameter: account_id               |Входной параметр *account_id* является обязательным. </br> Укажите корректный параметр *account_id*.|
|30022|account_id is invalid                       |Входной параметр *account_id* имеет некорректное значение.</br>Параметр *account_id* должен быть корректной строкой.|
|30023|missing parameter: time_in_force            |Входной параметр *time_in_force* является обязательным. </br> Укажите корректный параметр *time_in_force*.|
|30024|time_in_force is invalid                    |Входной параметр *time_in_force* имеет некорректное значение.|
|30025|missing parameter: order_type               |Входной параметр *order_type* является обязательным. </br> Укажите корректный параметр *order_type*.|
|30026|order_type is invalid                       |Входной параметр *order_type* имеет некорректное значение.</br>Список доступных значений: [*order_type*](/doctest/orders#ordertype).|
|30027|missing parameter: order_id                 |Входной параметр *order_id* является обязательным. </br> Укажите корректный параметр *order_id*. </br>Подробнее: [Выставление торговых поручений](/doctest/head-orders/).|
|30028|order_id is invalid                         |Входной параметр *order_id* имеет некорректное значение.</br>Параметр *order_id* должен быть корректной строкой.|
|30031|missing parameter: depth                    |Входной параметр *depth* является обязательным. </br>Укажите корректный параметр *depth*.|
|30032|depth is invalid                            |Входной параметр *depth* имеет некорректное значение.</br>Укажите корректный параметр *depth*.|
|30034|not enough balance                          |Недостаточно средств для совершения сделки (ошибка песочницы). </br>Пополните баланс нужной валюты.|
|30035|stop_price is invalid                       |Входной параметр *stop_price* имеет некорректное значение.</br>Параметр *stop_price* должен быть числом.|
|30036|missing parameter: stop_price               |Входной параметр *price* является обязательным. </br> Укажите корректный параметр *price*.|
|30037|missing parameter: stop_order_type          |Входной параметр *stop_order_type* является обязательным. </br> Укажите корректный параметр *stop_order_type*.|
|30038|stop_order_type is invalid                  |Входной параметр *stop_order_type* имеет некорректное значение.</br>Список доступных значений: [*stop_order_type*](/doctest/stop_orders#stopordertype).|
|30039|missing parameter: expire_date              |Входной параметр *expire_date* является обязательным. </br> Укажите корректный параметр *expire_date*.|
|30040|expire_date is invalid                      |Входной параметр *expire_date* имеет некорректный формат.</br>Подробнее про используемый формат дат: [google.protobuf.Timestamp](https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/Timestamp).|
|30041|the method is available only for futures    |Метод предназначен только для работы с фьючерсами. </br>Передайте во входные параметры метода идентификатор фьючерса.|
|30042|not enough assets for a margin trade        |Недостаточно активов для маржинальной сделки. </br>Проверьте маржинальные показатели счёта.|
|30043|missing parameter: expiration_type          |Входной параметр *expiration_type* является обязательным. </br> Укажите корректный параметр *expiration_type*.|
|30044|expiration_type is invalid                  |Входной параметр *expiration_type* имеет некорректное значение.</br>Список доступных значений: [*expiration_type*](/doctest/stop_orders#expiration_type).|
|30045|missing parameter: ticker                   |Входной параметр *ticker* является обязательным. </br>Укажите корректный параметр *ticker*.|
|30046|isin not available for futures              |Поиск фьючерсов по isin недоступен.|
|30047|price currency does not match the settlement currency|Валюта цены не совпадает с валютой расчётов по инструменту. </br>Укажите корректную валюту цены.|
|30048|instrument type is not bond                 |Метод предназначен только для запроса информации по облигации. </br>Передайте во входные параметры метода идентификатор облигации.|
|30049|post order error                            |Ошибка метода выставления торгового поручения. </br>Подробнее в тексе ошибки.|
|30050|instrument_status is invalid                |Входной параметр *instrument_status* имеет некорректное значение.</br>Список доступных значений: [*instrument_status*](/doctest/instruments#instrumentstatus).|
||||
|40001|limit of open streams exceeded              |Превышен лимит открытых stream-соединений. </br>[Лимитная политика](/doctest/limits).|
|40002|insufficient privileges                     |Недостаточно прав для совершения операции. </br>Токен доступа имеет уровень прав read-only.</br>Подробнее: [Виды токенов](/doctest/index#_2)|
||||
|50001|exchange not found                          |Биржа не найдена по переданному *exchange_id*.</br>Укажите корректный *exchange_id*.|
|50002|instrument not found                        |Инструмент не найден.</br>Укажите корректный идентификатор инструментам.|
|50003|user not found                              |Пользователь не найден.</br>Обратитесь в службу технической поддержки.|
|50004|account not found                           |Счёт не найден по переданному *account_id*.</br>Укажите корректный *account_id*.|
|50005|order not found                             |Торговое поручение не найдено по переданному *order_id*.</br>Укажите корректный *order_id*.|
||||
|70001|internal error                              |Внутренняя ошибка сервиса, попробуйте выполнить запрос позднее.</br>Если ошибка повторяется, обратитесь в службу технической поддержки.|
|70002|internal network error                      |Неизвестная сетевая ошибка, попробуйте выполнить запрос позднее.</br>Если ошибка повторяется, обратитесь в службу технической поддержки.|