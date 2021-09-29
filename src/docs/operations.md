

 <!-- range HasServices -->






# OperationsService
Сервис предназначен для получения:</br> **1**.  списка операций по счёту;</br> **2**.
портфеля по счёту;</br> **3**. позиций ценных бумаг на счёте;</br> **4**.
доступного остатка для вывода средств.

##Методы сервиса


### GetOperations
Метод получения списка операций по счёту

- Тело запроса — [OperationsRequest](#operationsrequest)

- Тело ответа — [OperationsResponse](#operationsresponse)


### GetPortfolio
Метод получения портфеля по счёту

- Тело запроса — [PortfolioRequest](#portfoliorequest)

- Тело ответа — [PortfolioResponse](#portfolioresponse)


### GetPositions
Метод получения списка позиций по счёту

- Тело запроса — [PositionsRequest](#positionsrequest)

- Тело ответа — [PositionsResponse](#positionsresponse)


### GetWithdrawLimits
Метод получения доступного остатка для вывода средств

- Тело запроса — [WithdrawLimitsRequest](#withdrawlimitsrequest)

- Тело ответа — [WithdrawLimitsResponse](#withdrawlimitsresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

##Сообщения методов



### OperationsRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта клиента |
| start_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало периода (по UTC) |
| end_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание периода (по UTC) |
| state |  [OperationState](#operationstate) | Статус запрашиваемых операций |
| figi |  [string](#string) | Figi-идентификатор инструмента для фильтрации |
| limit |  [int32](#int32) | Количество запрашиваемых операций (по умолчанию 100) |
| marker |  [int32](#int32) | Положение курсора (по умолчанию 0) |
 <!-- end Fields -->
 <!-- end HasFields -->


### OperationsResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| total |  [int32](#int32) | Общее количество операций по счёту |
| marker |  [int32](#int32) | Текущее положение курсора |
| operations | Массив объектов [Operation](#operation) | Массив операций |
 <!-- end Fields -->
 <!-- end HasFields -->


### Operation
Данные по операции


| Field | Type | Description |
| ----- | ---- | ----------- |
| id |  [string](#string) | Идентификатор операции |
| parent_operation_id |  [string](#string) | Идентификатор родительской операции |
| currency |  [string](#string) | Валюта операции |
| payment |  [float](#float) | Сумма операции |
| price |  [float](#float) | Цена операции |
| state |  [OperationState](#operationstate) | Статус операции |
| quantity |  [int32](#int32) | Количество лотов инструмента |
| quantity_executed |  [int32](#int32) | Исполнено лотов |
| figi |  [string](#string) | Figi-идентификатор инструмента, связанного с операцией |
| instrument_type |  [string](#string) | Тип инструмента. Возможные значения: </br>**bond** — облигация; </br>**stock** — акция; </br>**currency** — валюта; </br>**etf** — фонд; </br>**futures** — фьючерс. |
| is_margin_call |  [bool](#bool) | Флаг маржинальной торговли |
| date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время операции в формате часовом поясе UTC |
| operation_type |  [OperationType](#operationtype) | Тип операции |
 <!-- end Fields -->
 <!-- end HasFields -->


### PortfolioRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта пользователя |
 <!-- end Fields -->
 <!-- end HasFields -->


### PortfolioResponse



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


### PositionsRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта пользователя |
 <!-- end Fields -->
 <!-- end HasFields -->


### PositionsResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| money | Массив объектов [MoneyValue](#moneyvalue) | Массив валютных позиций портфеля |
| blocked | Массив объектов [MoneyValue](#moneyvalue) | Массив заблокированных валютных позиций портфеля |
| securities | Массив объектов [PositionsSecurities](#positionssecurities) | Список ценно-бумажных позиций портфеля |
| limits_loading_in_progress |  [bool](#bool) | Признак идущей в данный момент выгрузки лимитов |
 <!-- end Fields -->
 <!-- end HasFields -->


### WithdrawLimitsRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта пользователя |
 <!-- end Fields -->
 <!-- end HasFields -->


### WithdrawLimitsResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| money | Массив объектов [MoneyValue](#moneyvalue) | Массив валютных позиций портфеля |
| blocked | Массив объектов [MoneyValue](#moneyvalue) | Массив заблокированных валютных позиций портфеля |
 <!-- end Fields -->
 <!-- end HasFields -->


### PortfolioItem



| Field | Type | Description |
| ----- | ---- | ----------- |
| ticker |  [string](#string) | Тикер |
| figi |  [string](#string) | Figi-идентификатор инструмента |
| instrument_type |  [string](#string) | Тип инструмента. Возможные значения: </br>**bond** — облигация; </br>**stock** — акция; </br>**currency** — валюта; </br>**etf** — фонд; </br>**futures** — фьючерс. |
| quantity |  [float](#float) | Количество лотов |
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


### PositionsSecurities



| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор бумаги |
| blocked |  [float](#float) | Заблокировано |
| balance |  [float](#float) | Текущий баланс |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

## Enums


### OperationState
Статус запрашиваемых операций

| Name | Number | Description |
| ---- | ------ | ----------- |
| OPERATION_STATE_UNSPECIFIED | 0 | Статус операции не определён |
| OPERATION_STATE_EXECUTED | 1 | Исполнена |
| OPERATION_STATE_CANCELED | 2 | Отменена |




### OperationType


| Name | Number | Description |
| ---- | ------ | ----------- |
| OPERATION_TYPE_UNSPECIFIED | 0 | Тип операции не определён |
| OPERATION_TYPE_BUY | 1 | Покупка |
| OPERATION_TYPE_SELL | 2 | Продажа |
| OPERATION_TYPE_PAY_IN | 3 | Операция пополнения счёта |
| OPERATION_TYPE_PAY_OUT | 4 | Операция вывода средств |


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

