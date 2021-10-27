





## SandboxService
Сервис для работы с песочницей Public API

###Методы сервиса


#### OpenSandboxAccount
Метод регистрации счёта в песочнице

- Тело запроса — [OpenSandboxAccountRequest](#opensandboxaccountrequest)

- Тело ответа — [OpenSandboxAccountResponse](#opensandboxaccountresponse)


#### GetSandboxAccounts
Метод получения счетов в песочнице

- Тело запроса — [GetAccountsRequest](#getaccountsrequest)

- Тело ответа — [GetAccountsResponse](#getaccountsresponse)


#### CloseSandboxAccount
Метод закрытия счёта в песочнице

- Тело запроса — [CloseSandboxAccountRequest](#closesandboxaccountrequest)

- Тело ответа — [CloseSandboxAccountResponse](#closesandboxaccountresponse)


#### PostSandboxOrder
Метод выставления торгового поручения в песочнице

- Тело запроса — [PostOrderRequest](#postorderrequest)

- Тело ответа — [PostOrderResponse](#postorderresponse)


#### GetSandboxOrders
Метод получения списка активных заявок по счёту в песочнице

- Тело запроса — [GetOrdersRequest](#getordersrequest)

- Тело ответа — [GetOrdersResponse](#getordersresponse)


#### CancelSandboxOrder
Метод отмены торгового поручения в песочнице

- Тело запроса — [CancelOrderRequest](#cancelorderrequest)

- Тело ответа — [CancelOrderResponse](#cancelorderresponse)


#### GetSandboxOrderState
Метод получения статуса заявки в песочнице

- Тело запроса — [GetOrderStateRequest](#getorderstaterequest)

- Тело ответа — [OrderState](#orderstate)


#### GetSandboxPositions
Метод получения позиций по виртуальному счёту песочницы

- Тело запроса — [PositionsRequest](#positionsrequest)

- Тело ответа — [PositionsResponse](#positionsresponse)


#### GetSandboxOperations
Метод получения операций в песочнице по номеру счёта

- Тело запроса — [OperationsRequest](#operationsrequest)

- Тело ответа — [OperationsResponse](#operationsresponse)


#### GetSandboxPortfolio
Метод получения портфолио в песочнице

- Тело запроса — [PortfolioRequest](#portfoliorequest)

- Тело ответа — [PortfolioResponse](#portfolioresponse)


#### SandboxPayIn
Метод пополнения счёта в песочнице

- Тело запроса — [SandboxPayInRequest](#sandboxpayinrequest)

- Тело ответа — [SandboxPayInResponse](#sandboxpayinresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### OpenSandboxAccountRequest
пустой запрос

 <!-- end HasFields -->


#### OpenSandboxAccountResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CloseSandboxAccountRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CloseSandboxAccountResponse
пустой ответ

 <!-- end HasFields -->


#### SandboxPayInRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта |
| amount |  [MoneyValue](#moneyvalue) | Сумма пополнения счёта в рублях |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SandboxPayInResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| balance |  [MoneyValue](#moneyvalue) | Текущий баланс счёта |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

 <!-- range .Enums -->
 <!-- range HasServices -->


 <!-- range HasServices -->






## OperationsService
Сервис предназначен для получения:</br> **1**.  списка операций по счёту;</br> **2**.
портфеля по счёту;</br> **3**. позиций ценных бумаг на счёте;</br> **4**.
доступного остатка для вывода средств.

###Методы сервиса


#### GetOperations
Метод получения списка операций по счёту

- Тело запроса — [OperationsRequest](#operationsrequest)

- Тело ответа — [OperationsResponse](#operationsresponse)


#### GetPortfolio
Метод получения портфеля по счёту

- Тело запроса — [PortfolioRequest](#portfoliorequest)

- Тело ответа — [PortfolioResponse](#portfolioresponse)


#### GetPositions
Метод получения списка позиций по счёту

- Тело запроса — [PositionsRequest](#positionsrequest)

- Тело ответа — [PositionsResponse](#positionsresponse)


#### GetWithdrawLimits
Метод получения доступного остатка для вывода средств

- Тело запроса — [WithdrawLimitsRequest](#withdrawlimitsrequest)

- Тело ответа — [WithdrawLimitsResponse](#withdrawlimitsresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### OperationsRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта клиента |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало периода (по UTC) |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание периода (по UTC) |
| state |  [OperationState](#operationstate) | Статус запрашиваемых операций |
| figi |  [string](#string) | Figi-идентификатор инструмента для фильтрации |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OperationsResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| operations | Массив объектов [Operation](#operation) | Массив операций |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Operation
Данные по операции


| Field | Type | Description |
| ----- | ---- | ----------- |
| id |  [string](#string) | Идентификатор операции |
| parent_operation_id |  [string](#string) | Идентификатор родительской операции |
| currency |  [string](#string) | Валюта операции |
| payment |  [MoneyValue](#moneyvalue) | Сумма операции |
| price |  [MoneyValue](#moneyvalue) | Цена операции |
| state |  [OperationState](#operationstate) | Статус операции |
| quantity |  [int64](#int64) | Количество лотов инструмента |
| quantity_rest |  [int64](#int64) | Неисполненный остаток по сделке |
| figi |  [string](#string) | Figi-идентификатор инструмента, связанного с операцией |
| instrument_type |  [string](#string) | Тип инструмента. Возможные значения: </br>**bond** — облигация; </br>**stock** — акция; </br>**currency** — валюта; </br>**etf** — фонд; </br>**futures** — фьючерс. |
| date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время операции в формате часовом поясе UTC |
| type |  [string](#string) | Тип операции |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта пользователя |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| total_amount_bonds |  [MoneyValue](#moneyvalue) | Текущая стоимость всех облигаций в рублях |
| total_amount_currencies |  [MoneyValue](#moneyvalue) | Текущая стоимость всех валютных позиций в рублях |
| total_amount_etf |  [MoneyValue](#moneyvalue) | Текущая стоимость всех ETF в рублях |
| total_amount_stocks |  [MoneyValue](#moneyvalue) | Текущая стоимость всех акций в рублях |
| total_amount_portfolio |  [MoneyValue](#moneyvalue) | Текущая стоимость портфеля в рублях |
| portfolio_yield |  [MoneyValue](#moneyvalue) | Абсолютная доходность портфеля за все время с учетом валютной переоценки |
| portfolio_yield_relative |  [float](#float) | Относительная доходность портфеля на все время с учетом валютной переоценки |
| portfolio_daily_yield |  [MoneyValue](#moneyvalue) | Абсолютная дневная доходность портфеля с учетом валютной переоценки |
| portfolio_daily_yield_relative |  [float](#float) | Относительная дневная доходность портфеля с учетом валютной переоценки |
| items | Массив объектов [PortfolioItem](#portfolioitem) | Список позиций портфеля |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта пользователя |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| money | Массив объектов [MoneyValue](#moneyvalue) | Массив валютных позиций портфеля |
| blocked | Массив объектов [MoneyValue](#moneyvalue) | Массив заблокированных валютных позиций портфеля |
| securities | Массив объектов [PositionsSecurities](#positionssecurities) | Список ценно-бумажных позиций портфеля |
| limits_loading_in_progress |  [bool](#bool) | Признак идущей в данный момент выгрузки лимитов |
 <!-- end Fields -->
 <!-- end HasFields -->


#### WithdrawLimitsRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта пользователя |
 <!-- end Fields -->
 <!-- end HasFields -->


#### WithdrawLimitsResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| money | Массив объектов [MoneyValue](#moneyvalue) | Массив валютных позиций портфеля |
| blocked | Массив объектов [MoneyValue](#moneyvalue) | Массив заблокированных валютных позиций портфеля |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioItem



| Field | Type | Description |
| ----- | ---- | ----------- |
| ticker |  [string](#string) | Тикер |
| figi |  [string](#string) | Figi-идентификатор инструмента |
| instrument_type |  [string](#string) | Тип инструмента. Возможные значения: </br>**bond** — облигация; </br>**stock** — акция; </br>**currency** — валюта; </br>**etf** — фонд; </br>**futures** — фьючерс. |
| quantity |  [int64](#int64) | Количество лотов |
| currency |  [string](#string) | Валюта расчётов по инструменту |
| price |  [MoneyValue](#moneyvalue) | Текущая цена инструмента |
| avg_cost_price |  [MoneyValue](#moneyvalue) | Средняя цена покупки позиции с учетом накопленного купонного дохода |
| avg_cost_price_no_acc |  [MoneyValue](#moneyvalue) | Средняя цена покупки позиции без учета накопленного купонного дохода |
| current_amount |  [MoneyValue](#moneyvalue) | Текущая стоимость позиции |
| accruedint |  [MoneyValue](#moneyvalue) | Накопленный купонный доход |
| yield |  [MoneyValue](#moneyvalue) | Абсолютная доходность за все время с учетом валютной переоценки |
| yield_relative |  [float](#float) | Относительная доходность на все время с учетом валютной переоценки |
| daily_yield |  [MoneyValue](#moneyvalue) | Абсолютная дневная доходность с учетом валютной переоценки |
| daily_yield_relative |  [float](#float) | Относительная дневная доходность с учетом валютной переоценки |
| coupons_acquired_amt |  [MoneyValue](#moneyvalue) | Сумма операций по выплате купонов |
| coupons_acquired_qty |  [int32](#int32) | Количество операций по выплате купонов |
| current_var_margin |  [float](#float) | Вариационная маржа (параметр возвращается только для фьючерсов) |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsSecurities



| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор бумаги |
| blocked |  [int64](#int64) | Заблокировано |
| balance |  [int64](#int64) | Текущий баланс |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->



### Enums


#### OperationState
Статус запрашиваемых операций

| Name | Number | Description |
| ---- | ------ | ----------- |
| OPERATION_STATE_UNSPECIFIED | 0 | Статус операции не определён |
| OPERATION_STATE_EXECUTED | 1 | Исполнена |
| OPERATION_STATE_CANCELED | 2 | Отменена |
 <!-- range .Values -->

 <!-- range .HasEnums -->

 <!-- range .Enums -->
 <!-- range HasServices -->






## OrdersStreamService


###Методы сервиса


#### OrdersStream
Bidirectional stream работы со сделками

- Тело запроса — [OrdersStreamRequest](#ordersstreamrequest)

- Тело ответа — [OrdersStreamResponse](#ordersstreamresponse)

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



#### OrdersStreamRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| order_execute |  [PostOrderRequest](#postorderrequest) | Объект выставления заявки. |
| order_cancel |  [CancelOrderRequest](#cancelorderrequest) | Объект отмены заявки. |
| order_state |  [GetOrderStateRequest](#getorderstaterequest) | Объект получения статуса заявки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OrdersStreamResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| order_execute |  [PostOrderResponse](#postorderresponse) | Объект ответа выставления заявки. |
| order_cancel |  [CancelOrderResponse](#cancelorderresponse) | Объект ответа отмены заявки. |
| order_state |  [OrderState](#orderstate) | Объект ответа получения статуса заявки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PostOrderRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| quantity |  [int64](#int64) | Количество лотов. |
| price |  [MoneyValue](#moneyvalue) | Цена лота. |
| direction |  [OrderDirection](#orderdirection) | Направление операции. |
| accountId |  [string](#string) | Номер счёта. |
| order_type |  [OrderType](#ordertype) | Тип заявки. |
| orderId |  [string](#string) | Идентификатор запроса выставления поручения для целей идемпотентности |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PostOrderResponse



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
| aci_value |  [MoneyValue](#moneyvalue) | Значение НКД (накопленного купонного дохода) на дату. Подробнее: [НКД при выставлении торговых поручений](/investAPI/head-orders#coupon) |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| direction |  [OrderDirection](#orderdirection) | Направление сделки. |
| initial_security_price |  [MoneyValue](#moneyvalue) | Начальная цена инструмента заявки. |
| order_type |  [OrderType](#ordertype) | Тип заявки. |
| message |  [string](#string) | Дополнительные данные об исполнении заявки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CancelOrderRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта. |
| order_id |  [string](#string) | Идентификатор заявки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CancelOrderResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время отмены заявки в часовом поясе UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetOrderStateRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта. |
| order_id |  [string](#string) | Идентификатор заявки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetOrdersRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetOrdersResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| orders | Массив объектов [OrderState](#orderstate) | Массив активных заявок. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OrderState



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
| initial_security_price |  [MoneyValue](#moneyvalue) | Начальная цена инструмента. Цена инструмента на момент выставления заявки. |
| stages | Массив объектов [OrderStage](#orderstage) | Стадии выполнения заявки. |
| service_commission |  [MoneyValue](#moneyvalue) | Сервисная комиссия. |
| currency |  [string](#string) | Валюта заявки. |
| order_type |  [OrderType](#ordertype) | Тип заявки. |
| order_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время выставления заявки в часовом поясе UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OrderStage



| Field | Type | Description |
| ----- | ---- | ----------- |
| price |  [MoneyValue](#moneyvalue) | Цена. |
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
 <!-- range .Values -->



#### OrderType
Тип заявки

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_TYPE_UNSPECIFIED | 0 | Значение не указано |
| ORDER_TYPE_LIMIT | 1 | Лимитная |
| ORDER_TYPE_MARKET | 2 | Рыночная |
 <!-- range .Values -->



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
 <!-- range .Values -->

 <!-- range .HasEnums -->

 <!-- range .Enums -->
 <!-- range HasServices -->






## UsersService
Сервис предназначен для получения: </br> **1**.
списка счетов пользователя; </br> **2**. маржинальных показателе по счёту.

###Методы сервиса


#### GetAccounts
Метод получения счетов пользователя

- Тело запроса — [GetAccountsRequest](#getaccountsrequest)

- Тело ответа — [GetAccountsResponse](#getaccountsresponse)


#### GetMarginAttributes
Расчёт маржинальных показателей по счёту

- Тело запроса — [GetMarginAttributesRequest](#getmarginattributesrequest)

- Тело ответа — [GetMarginAttributesResponse](#getmarginattributesresponse)


#### GetUserTariff
Запрос тарифа пользователя

- Тело запроса — [GetUserTariffRequest](#getusertariffrequest)

- Тело ответа — [GetUserTariffResponse](#getusertariffresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### GetAccountsRequest
Запрос получения счетов не имеет входных параметров

 <!-- end HasFields -->


#### GetAccountsResponse
Ответ на запрос получения счетов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса. |
| accounts | Массив объектов [Account](#account) | Массив счетов клиента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Account
Счёт клиента.


| Field | Type | Description |
| ----- | ---- | ----------- |
| id |  [string](#string) | Идентификатор счёта. |
| type |  [AccountType](#accounttype) | Тип счёта. |
| name |  [string](#string) | Название счёта. |
| status |  [AccountStatus](#accountstatus) | Статус счёта. |
| opened_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата открытия счёта в часовом поясе UTC. |
| closed_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата закрытия счёта в часовом поясе UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetMarginAttributesRequest
Запрос маржинальных показателей по счёту


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта пользователя. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetMarginAttributesResponse
Маржинальные показатели по счёту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| liquid_portfolio |  [MoneyValue](#moneyvalue) | Ликвидная стоимость портфеля. Подробнее: [что такое ликвидный портфель?](https://help.tinkoff.ru/margin-trade/short/liquid-portfolio/). |
| starting_margin |  [MoneyValue](#moneyvalue) | Начальная маржа — начальное обеспечение для совершения новой сделки. Подробнее: [начальная и минимальная маржа](https://help.tinkoff.ru/margin-trade/short/initial-and-maintenance-margin/). |
| minimal_margin |  [MoneyValue](#moneyvalue) | Минимальная маржа — это минимальное обеспечение для поддержания позиции, которую вы уже открыли. Подробнее: [начальная и минимальная маржа](https://help.tinkoff.ru/margin-trade/short/initial-and-maintenance-margin/). |
| funds_sufficiency_level |  [Quotation](#quotation) | Уровень достаточности средств. Соотношение стоимости ликвидного портфеля к начальной марже. |
| amount_of_missing_funds |  [MoneyValue](#moneyvalue) | Объем недостающих средств. Разница между стартовой маржой и ликвидной стоимости портфеля. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetUserTariffRequest


 <!-- end HasFields -->


#### GetUserTariffResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| unary_limits | Массив объектов [UnaryLimit](#unarylimit) | Массив лимитов пользователя по unary-запросам |
| stream_limits | Массив объектов [StreamLimit](#streamlimit) | Массив лимитов пользователей для stream-соединений |
 <!-- end Fields -->
 <!-- end HasFields -->


#### UnaryLimit



| Field | Type | Description |
| ----- | ---- | ----------- |
| limit_per_minute |  [int32](#int32) | Количество unary-запросов в минуту |
| methods | Массив объектов [string](#string) | Названия методов |
 <!-- end Fields -->
 <!-- end HasFields -->


#### StreamLimit



| Field | Type | Description |
| ----- | ---- | ----------- |
| limit |  [int32](#int32) | Максимальное количество stream-соединений |
| streams | Массив объектов [string](#string) | Названия stream-методов |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->



### Enums


#### AccountType
Тип счёта.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ACCOUNT_TYPE_UNSPECIFIED | 0 | Тип аккаунта не определён. |
| ACCOUNT_TYPE_TINKOFF | 1 | Брокерский счёт Тинькофф. |
| ACCOUNT_TYPE_TINKOFF_IIS | 2 | ИИС счёт. |
| ACCOUNT_TYPE_INVEST_BOX | 3 | Инвесткопилка. |
 <!-- range .Values -->



#### AccountStatus
Статус счёта.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ACCOUNT_STATUS_UNSPECIFIED | 0 | Статус счёта не определён. |
| ACCOUNT_STATUS_NEW | 1 | Новый, в процессе открытия. |
| ACCOUNT_STATUS_OPEN | 2 | Открытый и активный счёт. |
| ACCOUNT_STATUS_CLOSED | 3 | Закрытый счёт. |
 <!-- range .Values -->

 <!-- range .HasEnums -->

 <!-- range .Enums -->
 <!-- range HasServices -->
 <!-- range .Files -->


## Нестандартные типы данных

### MoneyValue
Денежная сумма в определенной валюте

| Field | Type | Description |
| ----- | ---- | ----------- |
| currency |  [string](#string) | Строковый ISO-код валюты |
| units |  [int64](#int64) | Целая часть суммы, может быть отрицательным числом |
| nano |  [int32](#int32) | Дробная часть суммы, может быть отрицательным числом |


### Quotation
Котировка - денежная сумма без указания валюты

| Field | Type | Description |
| ----- | ---- | ----------- |
| units |  [int64](#int64) | Целая часть суммы, может быть отрицательным числом |
| nano |  [int32](#int32) | Дробная часть суммы, может быть отрицательным числом |

