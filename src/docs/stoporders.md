

 <!-- range HasServices -->






## StopOrdersService
Сервис предназначен для работы со стоп-заявками:</br> **1**.
выставление;</br> **2**. отмена;</br> **3**. получение списка стоп-заявок.

###Методы сервиса


#### PostStopOrder
Метод выставления стоп-заявки.

- Тело запроса — [PostStopOrderRequest](#poststoporderrequest)

- Тело ответа — [PostStopOrderResponse](#poststoporderresponse)


#### GetStopOrders
Метод получения списка активных стоп заявок по счёту.

- Тело запроса — [GetStopOrdersRequest](#getstopordersrequest)

- Тело ответа — [GetStopOrdersResponse](#getstopordersresponse)


#### CancelStopOrder
Метод отмены стоп-заявки.

- Тело запроса — [CancelStopOrderRequest](#cancelstoporderrequest)

- Тело ответа — [CancelStopOrderResponse](#cancelstoporderresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### PostStopOrderRequest
Запрос выставления стоп-заявки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| quantity |  [int64](#int64) | Количество лотов. |
| price |  [Quotation](#quotation) | Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| stop_price |  [Quotation](#quotation) | Стоп-цена заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| direction |  [StopOrderDirection](#stoporderdirection) | Направление операции. |
| account_id |  [string](#string) | Номер счёта. |
| expiration_type |  [StopOrderExpirationType](#stoporderexpirationtype) | Тип экспирации заявки. |
| stop_order_type |  [StopOrderType](#stopordertype) | Тип заявки. |
| expire_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время окончания действия стоп-заявки в часовом поясе UTC. **Для ExpirationType = GoodTillDate заполнение обязательно**. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PostStopOrderResponse
Результат выставления стоп-заявки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| stop_order_id |  [string](#string) | Уникальный идентификатор стоп-заявки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetStopOrdersRequest
Запрос получения списка активных стоп-заявок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта клиента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetStopOrdersResponse
Список активных стоп-заявок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| stop_orders | Массив объектов [StopOrder](#stoporder) | Массив стоп-заявок по счёту. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CancelStopOrderRequest
Запрос отмены выставленной стоп-заявки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта клиента. |
| stop_order_id |  [string](#string) | Уникальный идентификатор стоп-заявки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CancelStopOrderResponse
Результат отмены выставленной стоп-заявки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время отмены заявки в часовом поясе UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### StopOrder
Информация о стоп-заявке.


| Field | Type | Description |
| ----- | ---- | ----------- |
| stop_order_id |  [string](#string) | Идентификатор-идентификатор стоп-заявки. |
| lots_requested |  [int64](#int64) | Запрошено лотов. |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| direction |  [StopOrderDirection](#stoporderdirection) | Направление операции. |
| currency |  [string](#string) | Валюта стоп-заявки. |
| order_type |  [StopOrderType](#stopordertype) | Тип стоп-заявки. |
| create_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время выставления заявки в часовом поясе UTC. |
| activation_date_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время конвертации стоп-заявки в биржевую в часовом поясе UTC. |
| expiration_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время снятия заявки в часовом поясе UTC. |
| price |  [MoneyValue](#moneyvalue) | Цена заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| stop_price |  [MoneyValue](#moneyvalue) | Цена активации стоп-заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

### Enums


#### StopOrderDirection
Направление сделки стоп-заявки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STOP_ORDER_DIRECTION_UNSPECIFIED | 0 | Значение не указано. |
| STOP_ORDER_DIRECTION_BUY | 1 | Покупка. |
| STOP_ORDER_DIRECTION_SELL | 2 | Продажа. |




#### StopOrderExpirationType
Тип экспирации стоп-заявке.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED | 0 | Значение не указано. |
| STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL | 1 | Действительно до отмены. |
| STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE | 2 | Действительно до даты снятия. |




#### StopOrderType
Тип стоп-заявки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STOP_ORDER_TYPE_UNSPECIFIED | 0 | Значение не указано. |
| STOP_ORDER_TYPE_TAKE_PROFIT | 1 | Take-profit заявка. |
| STOP_ORDER_TYPE_STOP_LOSS | 2 | Stop-loss заявка. |
| STOP_ORDER_TYPE_STOP_LIMIT | 3 | Stop-limit заявка. |


 <!-- range .Enums -->
 <!-- range HasServices -->
 <!-- range .Files -->

#### SecurityTradingStatus

| Name | Number | Description |
| ---- | ------ | ----------- |
| SECURITY_TRADING_STATUS_UNSPECIFIED | 0 | Торговый статус не определён |
| SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING | 1 | Недоступен для торгов |
| SECURITY_TRADING_STATUS_OPENING_PERIOD | 2 | Период открытия торгов |
| SECURITY_TRADING_STATUS_CLOSING_PERIOD | 3 | Период закрытия торгов |
| SECURITY_TRADING_STATUS_BREAK_IN_TRADING | 4 | Перерыв в торговле |
| SECURITY_TRADING_STATUS_NORMAL_TRADING | 5 | Нормальная торговля |
| SECURITY_TRADING_STATUS_CLOSING_AUCTION | 6 | Аукцион закрытия |
| SECURITY_TRADING_STATUS_DARK_POOL_AUCTION | 7 | Аукцион крупных пакетов |
| SECURITY_TRADING_STATUS_DISCRETE_AUCTION | 8 | Дискретный аукцион |
| SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD | 9 | Аукцион открытия |
| SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE | 10 | Период торгов по цене аукциона закрытия |
| SECURITY_TRADING_STATUS_SESSION_ASSIGNED | 11 | Сессия назначена |
| SECURITY_TRADING_STATUS_SESSION_CLOSE | 12 | Сессия закрыта |
| SECURITY_TRADING_STATUS_SESSION_OPEN | 13 | Сессия открыта |
| SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING | 14 |Доступна торговля в режиме внутренней ликвидности брокера |
| SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING | 15 |Перерыв торговли в режиме внутренней ликвидности брокера |
| SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING | 16 |Недоступна торговля в режиме внутренней ликвидности брокера |

### Нестандартные типы данных

#### MoneyValue
Денежная сумма в определенной валюте

| Field | Type | Description |
| ----- | ---- | ----------- |
| currency |  [string](#string) | Строковый ISO-код валюты |
| units |  [int64](#int64) | Целая часть суммы, может быть отрицательным числом |
| nano |  [int32](#int32) | Дробная часть суммы, может быть отрицательным числом |


#### Quotation
Котировка - денежная сумма без указания валюты

| Field | Type | Description |
| ----- | ---- | ----------- |
| units |  [int64](#int64) | Целая часть суммы, может быть отрицательным числом |
| nano |  [int32](#int32) | Дробная часть суммы, может быть отрицательным числом |

