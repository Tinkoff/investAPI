

 <!-- range HasServices -->






## OrdersStreamService


###Методы сервиса


#### TradesStream
Stream сделок пользователя

- Тело запроса — [TradesStreamRequest](#tradesstreamrequest)

- Тело ответа — [TradesStreamResponse](#tradesstreamresponse)

 <!-- range .Methods -->


## OrdersService
Сервис предназначен для работы с торговыми поручениями:</br> **1**.
выставление;</br> **2**. отмена;</br> **3**. получение статуса;</br> **4**.
расчёт полной стоимости;</br> **5**. получение списка заявок.

###Методы сервиса


#### PostOrder
Метод выставления заявки.

- Тело запроса — [PostOrderRequest](#postorderrequest)

- Тело ответа — [PostOrderResponse](#postorderresponse)


#### CancelOrder
Метод отмены биржевой заявки.

- Тело запроса — [CancelOrderRequest](#cancelorderrequest)

- Тело ответа — [CancelOrderResponse](#cancelorderresponse)


#### GetOrderState
Метод получения статуса торгового поручения.

- Тело запроса — [GetOrderStateRequest](#getorderstaterequest)

- Тело ответа — [OrderState](#orderstate)


#### GetOrders
Метод получения списка активных заявок по счёту.

- Тело запроса — [GetOrdersRequest](#getordersrequest)

- Тело ответа — [GetOrdersResponse](#getordersresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### TradesStreamRequest
Запрос установки соединения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| accounts | Массив объектов [string](#string) | Идентификаторы счетов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradesStreamResponse
Информация о торговых поручениях.


| Field | Type | Description |
| ----- | ---- | ----------- |
| order_trades |  [OrderTrades](#ordertrades) | Информация об исполнении торгового поручения. |
| ping |  [Ping](#ping) | Проверка активности стрима. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OrderTrades
Информация об исполнении торгового поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| order_id |  [string](#string) | Идентификатор торгового поручения. |
| created_at |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время создания сообщения в часовом поясе UTC. |
| direction |  [OrderDirection](#orderdirection) | Направление сделки. |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| trades | Массив объектов [OrderTrade](#ordertrade) | Массив сделок. |
| account_id |  [string](#string) | Идентификатор счёта. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OrderTrade
Информация о сделке.


| Field | Type | Description |
| ----- | ---- | ----------- |
| date_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время совершения сделки в часовом поясе UTC. |
| price |  [Quotation](#quotation) | Цена одного инструмента, по которой совершена сделка. |
| quantity |  [int64](#int64) | Количество лотов в сделке. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PostOrderRequest
Запрос выставления торгового поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| quantity |  [int64](#int64) | Количество лотов. |
| price |  [Quotation](#quotation) | Цена одного инструмента. Для получения стоимости лота требуется умножить на лотность инструмента. Игнорируется для рыночных поручений. |
| direction |  [OrderDirection](#orderdirection) | Направление операции. |
| account_id |  [string](#string) | Номер счёта. |
| order_type |  [OrderType](#ordertype) | Тип заявки. |
| order_id |  [string](#string) | Идентификатор запроса выставления поручения для целей идемпотентности. Максимальная длина 36 символов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PostOrderResponse
Информация о выставлении поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| order_id |  [string](#string) | Идентификатор заявки. |
| execution_report_status |  [OrderExecutionReportStatus](#orderexecutionreportstatus) | Текущий статус заявки. |
| lots_requested |  [int64](#int64) | Запрошено лотов. |
| lots_executed |  [int64](#int64) | Исполнено лотов. |
| initial_order_price |  [MoneyValue](#moneyvalue) | Начальная цена заявки. Произведение количества запрошенных лотов на цену. |
| executed_order_price |  [MoneyValue](#moneyvalue) | Исполненная цена заявки. Произведение средней цены покупки на количество лотов. |
| total_order_amount |  [MoneyValue](#moneyvalue) | Итоговая стоимость заявки, включающая все комиссии. |
| initial_commission |  [MoneyValue](#moneyvalue) | Начальная комиссия. Комиссия рассчитанная при выставлении заявки. |
| executed_commission |  [MoneyValue](#moneyvalue) | Фактическая комиссия по итогам исполнения заявки. |
| aci_value |  [MoneyValue](#moneyvalue) | Значение НКД (накопленного купонного дохода) на дату. Подробнее: [НКД при выставлении торговых поручений](https://tinkoff.github.io/investAPI/head-orders#coupon) |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| direction |  [OrderDirection](#orderdirection) | Направление сделки. |
| initial_security_price |  [MoneyValue](#moneyvalue) | Начальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| order_type |  [OrderType](#ordertype) | Тип заявки. |
| message |  [string](#string) | Дополнительные данные об исполнении заявки. |
| initial_order_price_pt |  [Quotation](#quotation) | Начальная цена заявки в пунктах (для фьючерсов). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CancelOrderRequest
Запрос отмены торгового поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта. |
| order_id |  [string](#string) | Идентификатор заявки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CancelOrderResponse
Результат отмены торгового поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время отмены заявки в часовом поясе UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetOrderStateRequest
Запрос получения статуса торгового поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта. |
| order_id |  [string](#string) | Идентификатор заявки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetOrdersRequest
Запрос получения списка активных торговых поручений.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetOrdersResponse
Список активных торговых поручений.


| Field | Type | Description |
| ----- | ---- | ----------- |
| orders | Массив объектов [OrderState](#orderstate) | Массив активных заявок. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OrderState
Информация о торговом поручении.


| Field | Type | Description |
| ----- | ---- | ----------- |
| order_id |  [string](#string) | Идентификатор заявки. |
| execution_report_status |  [OrderExecutionReportStatus](#orderexecutionreportstatus) | Текущий статус заявки. |
| lots_requested |  [int64](#int64) | Запрошено лотов. |
| lots_executed |  [int64](#int64) | Исполнено лотов. |
| initial_order_price |  [MoneyValue](#moneyvalue) | Начальная цена заявки. Произведение количества запрошенных лотов на цену. |
| executed_order_price |  [MoneyValue](#moneyvalue) | Исполненная цена заявки. Произведение средней цены покупки на количество лотов. |
| total_order_amount |  [MoneyValue](#moneyvalue) | Итоговая стоимость заявки, включающая все комиссии. |
| average_position_price |  [MoneyValue](#moneyvalue) | Средняя цена позиции по сделке. |
| initial_commission |  [MoneyValue](#moneyvalue) | Начальная комиссия. Комиссия, рассчитанная на момент подачи заявки. |
| executed_commission |  [MoneyValue](#moneyvalue) | Фактическая комиссия по итогам исполнения заявки. |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| direction |  [OrderDirection](#orderdirection) | Направление заявки. |
| initial_security_price |  [MoneyValue](#moneyvalue) | Начальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| stages | Массив объектов [OrderStage](#orderstage) | Стадии выполнения заявки. |
| service_commission |  [MoneyValue](#moneyvalue) | Сервисная комиссия. |
| currency |  [string](#string) | Валюта заявки. |
| order_type |  [OrderType](#ordertype) | Тип заявки. |
| order_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время выставления заявки в часовом поясе UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OrderStage
Сделки в рамках торгового поручения.


| Field | Type | Description |
| ----- | ---- | ----------- |
| price |  [MoneyValue](#moneyvalue) | Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента.. |
| quantity |  [int64](#int64) | Количество лотов. |
| trade_id |  [string](#string) | Идентификатор торговой операции. |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

### Enums


#### OrderDirection
Направление операции

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_DIRECTION_UNSPECIFIED | 0 | Значение не указано |
| ORDER_DIRECTION_BUY | 1 | Покупка |
| ORDER_DIRECTION_SELL | 2 | Продажа |




#### OrderType
Тип заявки

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_TYPE_UNSPECIFIED | 0 | Значение не указано |
| ORDER_TYPE_LIMIT | 1 | Лимитная |
| ORDER_TYPE_MARKET | 2 | Рыночная |




#### OrderExecutionReportStatus
Текущий статус заявки (поручения)

| Name | Number | Description |
| ---- | ------ | ----------- |
| EXECUTION_REPORT_STATUS_UNSPECIFIED | 0 | none |
| EXECUTION_REPORT_STATUS_FILL | 1 | Исполнена |
| EXECUTION_REPORT_STATUS_REJECTED | 2 | Отклонена |
| EXECUTION_REPORT_STATUS_CANCELLED | 3 | Отменена пользователем |
| EXECUTION_REPORT_STATUS_NEW | 4 | Новая |
| EXECUTION_REPORT_STATUS_PARTIALLYFILL | 5 | Частично исполнена |


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

