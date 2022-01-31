

 <!-- range HasServices -->






## OperationsService
Сервис предназначен для получения:</br> **1**.  списка операций по счёту;</br> **2**.
портфеля по счёту;</br> **3**. позиций ценных бумаг на счёте;</br> **4**.
доступного остатка для вывода средств.

###Методы сервиса


#### GetOperations
Метод получения списка операций по счёту.

- Тело запроса — [OperationsRequest](#operationsrequest)

- Тело ответа — [OperationsResponse](#operationsresponse)


#### GetPortfolio
Метод получения портфеля по счёту.

- Тело запроса — [PortfolioRequest](#portfoliorequest)

- Тело ответа — [PortfolioResponse](#portfolioresponse)


#### GetPositions
Метод получения списка позиций по счёту.

- Тело запроса — [PositionsRequest](#positionsrequest)

- Тело ответа — [PositionsResponse](#positionsresponse)


#### GetWithdrawLimits
Метод получения доступного остатка для вывода средств.

- Тело запроса — [WithdrawLimitsRequest](#withdrawlimitsrequest)

- Тело ответа — [WithdrawLimitsResponse](#withdrawlimitsresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### OperationsRequest
Запрос получения списка операций по счёту.


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
Список операций.


| Field | Type | Description |
| ----- | ---- | ----------- |
| operations | Массив объектов [Operation](#operation) | Массив операций |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Operation
Данные по операции.


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
| instrument_type |  [string](#string) | Тип инструмента. Возможные значения: </br>**bond** — облигация; </br>**share** — акция; </br>**currency** — валюта; </br>**etf** — фонд; </br>**futures** — фьючерс. |
| date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время операции в формате часовом поясе UTC |
| type |  [string](#string) | Текстовое описание типа операции |
| operation_type |  [OperationType](#operationtype) | Тип операции |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioRequest
Запрос получения текущего портфеля по счёту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта пользователя |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioResponse
Текущий портфель по счёту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| total_amount_shares |  [MoneyValue](#moneyvalue) | Общая стоимость акций в портфеле в рублях |
| total_amount_bonds |  [MoneyValue](#moneyvalue) | Общая стоимость облигаций в портфеле в рублях |
| total_amount_etf |  [MoneyValue](#moneyvalue) | Общая стоимость фондов в портфеле в рублях |
| total_amount_currencies |  [MoneyValue](#moneyvalue) | Общая стоимость валют в портфеле в рублях |
| total_amount_futures |  [MoneyValue](#moneyvalue) | Общая стоимость валют в портфеле в рублях |
| expected_yield |  [float](#float) | Текущая доходность портфеля |
| positions | Массив объектов [PortfolioPosition](#portfolioposition) | Список позиций портфеля |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsRequest
Запрос позиций портфеля по счёту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта пользователя |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsResponse
Список позиций по счёту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| money | Массив объектов [MoneyValue](#moneyvalue) | Массив валютных позиций портфеля |
| blocked | Массив объектов [MoneyValue](#moneyvalue) | Массив заблокированных валютных позиций портфеля |
| securities | Массив объектов [PositionsSecurities](#positionssecurities) | Список ценно-бумажных позиций портфеля |
| limits_loading_in_progress |  [bool](#bool) | Признак идущей в данный момент выгрузки лимитов |
 <!-- end Fields -->
 <!-- end HasFields -->


#### WithdrawLimitsRequest
Запрос доступного для вывода остатка.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта пользователя |
 <!-- end Fields -->
 <!-- end HasFields -->


#### WithdrawLimitsResponse
Доступный для вывода остаток.


| Field | Type | Description |
| ----- | ---- | ----------- |
| money | Массив объектов [MoneyValue](#moneyvalue) | Массив валютных позиций портфеля |
| blocked | Массив объектов [MoneyValue](#moneyvalue) | Массив заблокированных валютных позиций портфеля |
| blocked_guarantee | Массив объектов [MoneyValue](#moneyvalue) | Заблокировано под гарантийное обеспечение фьючерсов |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioPosition
Позиции портфеля.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатора инструмента |
| instrument_type |  [string](#string) | Тип инструмента |
| quantity |  [float](#float) | Количество инструмента в портфеле в штуках |
| average_position_price |  [MoneyValue](#moneyvalue) | Средняя цена лота в позиции |
| expected_yield |  [float](#float) | Текущая рассчитанная доходность |
| current_nkd |  [MoneyValue](#moneyvalue) | Текущий НКД |
| average_position_price_pt |  [Quotation](#quotation) | Средняя цена лота в позиции в пунктах (для фьючерсов) |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsSecurities
Баланс позиции ценной бумаги.


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




#### OperationType
Тип операции

| Name | Number | Description |
| ---- | ------ | ----------- |
| OPERATION_TYPE_UNSPECIFIED | 0 | Тип операции не определён |
| OPERATION_TYPE_INPUT | 1 | Завод денежных средств |
| OPERATION_TYPE_BOND_TAX | 2 | Удержание налога по купонам |
| OPERATION_TYPE_OUTPUT_SECURITIES | 3 | Вывод ЦБ |
| OPERATION_TYPE_OVERNIGHT | 4 | Доход по сделке РЕПО овернайт |
| OPERATION_TYPE_TAX | 5 | Удержание налога |
| OPERATION_TYPE_BOND_REPAYMENT_FULL | 6 | Полное погашение облигаций |
| OPERATION_TYPE_SELL_CARD | 7 | Продажа ЦБ с карты |
| OPERATION_TYPE_DIVIDEND_TAX | 8 | Удержание налога по дивидендам |
| OPERATION_TYPE_OUTPUT | 9 | Вывод денежных средств |
| OPERATION_TYPE_BOND_REPAYMENT | 10 | Частичное погашение облигаций |
| OPERATION_TYPE_TAX_CORRECTION | 11 | Корректировка налога |
| OPERATION_TYPE_SERVICE_FEE | 12 | Удержание комиссии за обслуживание брокерского счёта |
| OPERATION_TYPE_BENEFIT_TAX | 13 | Удержание налога за материальную выгоду |
| OPERATION_TYPE_MARGIN_FEE | 14 | Удержание комиссии за непокрытую позицию |
| OPERATION_TYPE_BUY | 15 | Покупка ЦБ |
| OPERATION_TYPE_BUY_CARD | 16 | Покупка ЦБ с карты |
| OPERATION_TYPE_INPUT_SECURITIES | 17 | Завод ЦБ |
| OPERATION_TYPE_SELL_MARJIN | 18 | Продажа в результате Margin-call |
| OPERATION_TYPE_BROKER_FEE | 19 | Удержание комиссии за операцию |
| OPERATION_TYPE_BUY_MARGIN | 20 | Покупка в результате Margin-call |
| OPERATION_TYPE_DIVIDEND | 21 | Выплата дивидендов |
| OPERATION_TYPE_SELL | 22 | Продажа ЦБ |
| OPERATION_TYPE_COUPON | 23 | Выплата купонов |
| OPERATION_TYPE_SUCCESS_FEE | 24 | Удержание комиссии SuccessFee |
| OPERATION_TYPE_DIVIDEND_TRANSFER | 25 | Передача дивидендного дохода |
| OPERATION_TYPE_ACCRUING_VARMARJIN | 26 | Зачисление вариационной маржи |
| OPERATION_TYPE_WRITING_OFF_VARMARJIN | 27 | Списание вариационной маржи |
| OPERATION_TYPE_DELIVERY_BUY | 28 | Покупка в рамках экспирации фьючерсного контракта |
| OPERATION_TYPE_DELIVERY_SELL | 29 | Продажа в рамках экспирации фьючерсного контракта |
| OPERATION_TYPE_TRACK_MFEE | 30 | Комиссия за управление по счёту автоследования |
| OPERATION_TYPE_TRACK_PFEE | 31 | Комиссия за результат по счёту автоследования |
| OPERATION_TYPE_TAX_PROGRESSIVE | 32 | Удержание налога по ставке 15% |
| OPERATION_TYPE_BOND_TAX_PROGRESSIVE | 33 | Удержание налога по купонам по ставке 15% |
| OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE | 34 | Удержание налога по дивидендам по ставке 15% |
| OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE | 35 | Удержание налога за материальную выгоду по ставке 15% |
| OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE | 36 | Корректировка налога по ставке 15% |
| OPERATION_TYPE_TAX_REPO_PROGRESSIVE | 37 | Удержание налога за возмещение по сделкам РЕПО по ставке 15% |
| OPERATION_TYPE_TAX_REPO | 38 | Удержание налога за возмещение по сделкам РЕПО |
| OPERATION_TYPE_TAX_REPO_HOLD | 39 | Удержание налога по сделкам РЕПО |
| OPERATION_TYPE_TAX_REPO_REFUND | 40 | Возврат налога по сделкам РЕПО |
| OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE | 41 | Удержание налога по сделкам РЕПО по ставке 15% |
| OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE | 42 | Возврат налога по сделкам РЕПО по ставке 15% |
| OPERATION_TYPE_DIV_EXT | 43 | Выплата дивидендов на карту |


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

