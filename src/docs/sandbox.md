





## SandboxService
Сервис для работы с песочницей TINKOFF INVEST API

###Методы сервиса


#### OpenSandboxAccount
Метод регистрации счёта в песочнице.

- Тело запроса — [OpenSandboxAccountRequest](#opensandboxaccountrequest)

- Тело ответа — [OpenSandboxAccountResponse](#opensandboxaccountresponse)


#### GetSandboxAccounts
Метод получения счетов в песочнице.

- Тело запроса — [GetAccountsRequest](#getaccountsrequest)

- Тело ответа — [GetAccountsResponse](#getaccountsresponse)


#### CloseSandboxAccount
Метод закрытия счёта в песочнице.

- Тело запроса — [CloseSandboxAccountRequest](#closesandboxaccountrequest)

- Тело ответа — [CloseSandboxAccountResponse](#closesandboxaccountresponse)


#### PostSandboxOrder
Метод выставления торгового поручения в песочнице.

- Тело запроса — [PostOrderRequest](#postorderrequest)

- Тело ответа — [PostOrderResponse](#postorderresponse)


#### ReplaceSandboxOrder
Метод изменения выставленной заявки.

- Тело запроса — [ReplaceOrderRequest](#replaceorderrequest)

- Тело ответа — [PostOrderResponse](#postorderresponse)


#### GetSandboxOrders
Метод получения списка активных заявок по счёту в песочнице.

- Тело запроса — [GetOrdersRequest](#getordersrequest)

- Тело ответа — [GetOrdersResponse](#getordersresponse)


#### CancelSandboxOrder
Метод отмены торгового поручения в песочнице.

- Тело запроса — [CancelOrderRequest](#cancelorderrequest)

- Тело ответа — [CancelOrderResponse](#cancelorderresponse)


#### GetSandboxOrderState
Метод получения статуса заявки в песочнице.

- Тело запроса — [GetOrderStateRequest](#getorderstaterequest)

- Тело ответа — [OrderState](#orderstate)


#### GetSandboxPositions
Метод получения позиций по виртуальному счёту песочницы.

- Тело запроса — [PositionsRequest](#positionsrequest)

- Тело ответа — [PositionsResponse](#positionsresponse)


#### GetSandboxOperations
Метод получения операций в песочнице по номеру счёта.

- Тело запроса — [OperationsRequest](#operationsrequest)

- Тело ответа — [OperationsResponse](#operationsresponse)


#### GetSandboxOperationsByCursor
Метод получения операций в песочнице по номеру счета с пагинацией.

- Тело запроса — [GetOperationsByCursorRequest](#getoperationsbycursorrequest)

- Тело ответа — [GetOperationsByCursorResponse](#getoperationsbycursorresponse)


#### GetSandboxPortfolio
Метод получения портфолио в песочнице.

- Тело запроса — [PortfolioRequest](#portfoliorequest)

- Тело ответа — [PortfolioResponse](#portfolioresponse)


#### SandboxPayIn
Метод пополнения счёта в песочнице.

- Тело запроса — [SandboxPayInRequest](#sandboxpayinrequest)

- Тело ответа — [SandboxPayInResponse](#sandboxpayinresponse)


#### GetSandboxWithdrawLimits
Метод получения доступного остатка для вывода средств в песочнице.

- Тело запроса — [WithdrawLimitsRequest](#withdrawlimitsrequest)

- Тело ответа — [WithdrawLimitsResponse](#withdrawlimitsresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### CloseSandboxAccountRequest
Запрос закрытия счёта в песочнице.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CloseSandboxAccountResponse
Результат закрытия счёта в песочнице.

пустой ответ

 <!-- end HasFields -->


#### OpenSandboxAccountRequest
Запрос открытия счёта в песочнице.

пустой запрос

 <!-- end HasFields -->


#### OpenSandboxAccountResponse
Номер открытого счёта в песочнице.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SandboxPayInRequest
Запрос пополнения счёта в песочнице.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Номер счёта |
| amount |  [MoneyValue](#moneyvalue) | Сумма пополнения счёта в рублях |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SandboxPayInResponse
Результат пополнения счёта, текущий баланс.


| Field | Type | Description |
| ----- | ---- | ----------- |
| balance |  [MoneyValue](#moneyvalue) | Текущий баланс счёта |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

### Enums
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

