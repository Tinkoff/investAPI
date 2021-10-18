

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
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало периода (по UTC) |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание периода (по UTC) |
| state |  [string](#string) | Статус запрашиваемых операций |
| figi |  [string](#string) | Figi-идентификатор инструмента для фильтрации |
 <!-- end Fields -->
 <!-- end HasFields -->


### OperationsResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
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
| payment |  [MoneyValue](#moneyvalue) | Сумма операции |
| price |  [MoneyValue](#moneyvalue) | Цена операции |
| state |  [string](#string) | Статус операции |
| quantity |  [int64](#int64) | Количество лотов инструмента |
| quantity_rest |  [int64](#int64) | Неисполненный остаток по сделке |
| figi |  [string](#string) | Figi-идентификатор инструмента, связанного с операцией |
| instrument_type |  [string](#string) | Тип инструмента. Возможные значения: </br>**bond** — облигация; </br>**stock** — акция; </br>**currency** — валюта; </br>**etf** — фонд; </br>**futures** — фьючерс. |
| date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время операции в формате часовом поясе UTC |
| type |  [string](#string) | Тип операции |
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


### PositionsSecurities



| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор бумаги |
| blocked |  [int64](#int64) | Заблокировано |
| balance |  [int64](#int64) | Текущий баланс |
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


 <!-- range .Enums -->
 <!-- range HasServices -->
 <!-- range .Files -->

### SecurityTradingStatus

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

