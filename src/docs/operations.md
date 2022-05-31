

 <!-- range HasServices -->






## OperationsService
Сервис предназначен для получения:</br> **1**.  списка операций по счёту;</br> **2**.
портфеля по счёту;</br> **3**. позиций ценных бумаг на счёте;</br> **4**.
доступного остатка для вывода средств;</br> **4**. получения различных отчётов.

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


#### GetBrokerReport
Метод получения брокерского отчёта.

- Тело запроса — [BrokerReportRequest](#brokerreportrequest)

- Тело ответа — [BrokerReportResponse](#brokerreportresponse)


#### GetDividendsForeignIssuer
Метод получения отчёта "Справка о доходах за пределами РФ".

- Тело запроса — [GetDividendsForeignIssuerRequest](#getdividendsforeignissuerrequest)

- Тело ответа — [GetDividendsForeignIssuerResponse](#getdividendsforeignissuerresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### OperationsRequest
Запрос получения списка операций по счёту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта клиента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало периода (по UTC). |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание периода (по UTC). |
| state |  [OperationState](#operationstate) | Статус запрашиваемых операций. |
| figi |  [string](#string) | Figi-идентификатор инструмента для фильтрации. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OperationsResponse
Список операций.


| Field | Type | Description |
| ----- | ---- | ----------- |
| operations | Массив объектов [Operation](#operation) | Массив операций. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Operation
Данные по операции.


| Field | Type | Description |
| ----- | ---- | ----------- |
| id |  [string](#string) | Идентификатор операции. |
| parent_operation_id |  [string](#string) | Идентификатор родительской операции. |
| currency |  [string](#string) | Валюта операции. |
| payment |  [MoneyValue](#moneyvalue) | Сумма операции. |
| price |  [MoneyValue](#moneyvalue) | Цена операции за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| state |  [OperationState](#operationstate) | Статус операции. |
| quantity |  [int64](#int64) | Количество единиц инструмента. |
| quantity_rest |  [int64](#int64) | Неисполненный остаток по сделке. |
| figi |  [string](#string) | Figi-идентификатор инструмента, связанного с операцией. |
| instrument_type |  [string](#string) | Тип инструмента. Возможные значения: </br>**bond** — облигация; </br>**share** — акция; </br>**currency** — валюта; </br>**etf** — фонд; </br>**futures** — фьючерс. |
| date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время операции в формате часовом поясе UTC. |
| type |  [string](#string) | Текстовое описание типа операции. |
| operation_type |  [OperationType](#operationtype) | Тип операции. |
| trades | Массив объектов [OperationTrade](#operationtrade) | Массив сделок. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OperationTrade
Сделка по операции.


| Field | Type | Description |
| ----- | ---- | ----------- |
| trade_id |  [string](#string) | Идентификатор сделки. |
| date_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время сделки в часовом поясе UTC. |
| quantity |  [int64](#int64) | Количество инструментов. |
| price |  [MoneyValue](#moneyvalue) | Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioRequest
Запрос получения текущего портфеля по счёту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта пользователя. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioResponse
Текущий портфель по счёту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| total_amount_shares |  [MoneyValue](#moneyvalue) | Общая стоимость акций в портфеле в рублях. |
| total_amount_bonds |  [MoneyValue](#moneyvalue) | Общая стоимость облигаций в портфеле в рублях. |
| total_amount_etf |  [MoneyValue](#moneyvalue) | Общая стоимость фондов в портфеле в рублях. |
| total_amount_currencies |  [MoneyValue](#moneyvalue) | Общая стоимость валют в портфеле в рублях. |
| total_amount_futures |  [MoneyValue](#moneyvalue) | Общая стоимость фьючерсов в портфеле в рублях. |
| expected_yield |  [Quotation](#quotation) | Текущая относительная доходность портфеля, в %. |
| positions | Массив объектов [PortfolioPosition](#portfolioposition) | Список позиций портфеля. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsRequest
Запрос позиций портфеля по счёту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта пользователя. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsResponse
Список позиций по счёту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| money | Массив объектов [MoneyValue](#moneyvalue) | Массив валютных позиций портфеля. |
| blocked | Массив объектов [MoneyValue](#moneyvalue) | Массив заблокированных валютных позиций портфеля. |
| securities | Массив объектов [PositionsSecurities](#positionssecurities) | Список ценно-бумажных позиций портфеля. |
| limits_loading_in_progress |  [bool](#bool) | Признак идущей в данный момент выгрузки лимитов. |
| futures | Массив объектов [PositionsFutures](#positionsfutures) | Список фьючерсов портфеля. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### WithdrawLimitsRequest
Запрос доступного для вывода остатка.


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта пользователя. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### WithdrawLimitsResponse
Доступный для вывода остаток.


| Field | Type | Description |
| ----- | ---- | ----------- |
| money | Массив объектов [MoneyValue](#moneyvalue) | Массив валютных позиций портфеля. |
| blocked | Массив объектов [MoneyValue](#moneyvalue) | Массив заблокированных валютных позиций портфеля. |
| blocked_guarantee | Массив объектов [MoneyValue](#moneyvalue) | Заблокировано под гарантийное обеспечение фьючерсов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PortfolioPosition
Позиции портфеля.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатора инструмента. |
| instrument_type |  [string](#string) | Тип инструмента. |
| quantity |  [Quotation](#quotation) | Количество инструмента в портфеле в штуках. |
| average_position_price |  [MoneyValue](#moneyvalue) | Средневзвешенная цена позиции. **Возможна задержка до секунды для пересчёта**. |
| expected_yield |  [Quotation](#quotation) | Текущая рассчитанная доходность позиции. |
| current_nkd |  [MoneyValue](#moneyvalue) | Текущий НКД. |
| average_position_price_pt |  [Quotation](#quotation) | Средняя цена лота в позиции в пунктах (для фьючерсов). **Возможна задержка до секунды для пересчёта**. |
| current_price |  [MoneyValue](#moneyvalue) | Текущая цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента.. |
| average_position_price_fifo |  [MoneyValue](#moneyvalue) | Средняя цена лота в позиции по методу FIFO. **Возможна задержка до секунды для пересчёта**. |
| quantity_lots |  [Quotation](#quotation) | Количество лотов в портфеле. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsSecurities
Баланс позиции ценной бумаги.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор бумаги. |
| blocked |  [int64](#int64) | Заблокировано. |
| balance |  [int64](#int64) | Текущий незаблокированный баланс. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### PositionsFutures
Баланс фьючерса.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор фьючерса. |
| blocked |  [int64](#int64) | Заблокировано. |
| balance |  [int64](#int64) | Текущий незаблокированный баланс. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### BrokerReportRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| generate_broker_report_request |  [GenerateBrokerReportRequest](#generatebrokerreportrequest) |  |
| get_broker_report_request |  [GetBrokerReportRequest](#getbrokerreportrequest) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### BrokerReportResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| generate_broker_report_response |  [GenerateBrokerReportResponse](#generatebrokerreportresponse) |  |
| get_broker_report_response |  [GetBrokerReportResponse](#getbrokerreportresponse) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GenerateBrokerReportRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта клиента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало периода в часовом поясе UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание периода в часовом поясе UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GenerateBrokerReportResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| task_id |  [string](#string) | Идентификатор задачи формирования брокерского отчёта. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBrokerReportRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| task_id |  [string](#string) | Идентификатор задачи формирования брокерского отчёта. |
| page |  [int32](#int32) | Номер страницы отчета (начинается с 1), значение по умолчанию: 0. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBrokerReportResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| broker_report | Массив объектов [BrokerReport](#brokerreport) |  |
| itemsCount |  [int32](#int32) | Количество записей в отчете. |
| pagesCount |  [int32](#int32) | Количество страниц с данными отчета (начинается с 0). |
| page |  [int32](#int32) | Текущая страница (начинается с 0). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### BrokerReport



| Field | Type | Description |
| ----- | ---- | ----------- |
| trade_id |  [string](#string) | Номер сделки. |
| order_id |  [string](#string) | Номер поручения. |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| execute_sign |  [string](#string) | Признак исполнения. |
| trade_datetime |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время заключения в часовом поясе UTC. |
| exchange |  [string](#string) | Торговая площадка. |
| class_code |  [string](#string) | Режим торгов. |
| direction |  [string](#string) | Вид сделки. |
| name |  [string](#string) | Сокращённое наименование актива. |
| ticker |  [string](#string) | Код актива. |
| price |  [MoneyValue](#moneyvalue) | Цена за единицу. |
| quantity |  [int64](#int64) | Количество. |
| order_amount |  [MoneyValue](#moneyvalue) | Сумма (без НКД). |
| aci_value |  [Quotation](#quotation) | НКД. |
| total_order_amount |  [MoneyValue](#moneyvalue) | Сумма сделки. |
| broker_commission |  [MoneyValue](#moneyvalue) | Комиссия брокера. |
| exchange_commission |  [MoneyValue](#moneyvalue) | Комиссия биржи. |
| exchange_clearing_commission |  [MoneyValue](#moneyvalue) | Комиссия клир. центра. |
| repo_rate |  [Quotation](#quotation) | Ставка РЕПО (%). |
| party |  [string](#string) | Контрагент/Брокер. |
| clear_value_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата расчётов в часовом поясе UTC. |
| sec_value_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата поставки в часовом поясе UTC. |
| broker_status |  [string](#string) | Статус брокера. |
| separate_agreement_type |  [string](#string) | Тип дог. |
| separate_agreement_number |  [string](#string) | Номер дог. |
| separate_agreement_date |  [string](#string) | Дата дог. |
| delivery_type |  [string](#string) | Тип расчёта по сделке. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetDividendsForeignIssuerRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| generate_div_foreign_issuer_report |  [GenerateDividendsForeignIssuerReportRequest](#generatedividendsforeignissuerreportrequest) | Объект запроса формирования отчёта. |
| get_div_foreign_issuer_report |  [GetDividendsForeignIssuerReportRequest](#getdividendsforeignissuerreportrequest) | Объект запроса сформированного отчёта. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetDividendsForeignIssuerResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| generate_div_foreign_issuer_report_response |  [GenerateDividendsForeignIssuerReportResponse](#generatedividendsforeignissuerreportresponse) | Объект результата задачи запуска формирования отчёта. |
| div_foreign_issuer_report |  [GetDividendsForeignIssuerReportResponse](#getdividendsforeignissuerreportresponse) | Отчёт "Справка о доходах за пределами РФ". |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GenerateDividendsForeignIssuerReportRequest
Объект запроса формирования отчёта "Справка о доходах за пределами РФ".


| Field | Type | Description |
| ----- | ---- | ----------- |
| account_id |  [string](#string) | Идентификатор счёта клиента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало периода (по UTC). |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание периода (по UTC). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetDividendsForeignIssuerReportRequest
Объект запроса сформированного отчёта "Справка о доходах за пределами РФ".


| Field | Type | Description |
| ----- | ---- | ----------- |
| task_id |  [string](#string) | Идентификатор задачи формирования отчёта. |
| page |  [int32](#int32) | Номер страницы отчета (начинается с 0), значение по умолчанию: 0. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GenerateDividendsForeignIssuerReportResponse
Объект результата задачи запуска формирования отчёта "Справка о доходах за пределами РФ".


| Field | Type | Description |
| ----- | ---- | ----------- |
| task_id |  [string](#string) | Идентификатор задачи формирования отчёта. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetDividendsForeignIssuerReportResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| dividends_foreign_issuer_report | Массив объектов [DividendsForeignIssuerReport](#dividendsforeignissuerreport) |  |
| itemsCount |  [int32](#int32) | Количество записей в отчете. |
| pagesCount |  [int32](#int32) | Количество страниц с данными отчета (начинается с 0). |
| page |  [int32](#int32) | Текущая страница (начинается с 0). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### DividendsForeignIssuerReport
Отчёт "Справка о доходах за пределами РФ".


| Field | Type | Description |
| ----- | ---- | ----------- |
| record_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата фиксации реестра. |
| payment_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выплаты. |
| security_name |  [string](#string) | Наименование ценной бумаги. |
| isin |  [string](#string) | ISIN-идентификатор ценной бумаги. |
| issuer_country |  [string](#string) | Страна эмитента. Для депозитарных расписок указывается страна эмитента базового актива. |
| quantity |  [int64](#int64) | Количество ценных бумаг. |
| dividend |  [Quotation](#quotation) | Выплаты на одну бумагу |
| external_commission |  [Quotation](#quotation) | Комиссия внешних платёжных агентов. |
| dividend_gross |  [Quotation](#quotation) | Сумма до удержания налога. |
| tax |  [Quotation](#quotation) | Сумма налога, удержанного агентом. |
| dividend_amount |  [Quotation](#quotation) | Итоговая сумма выплаты. |
| currency |  [string](#string) | Валюта. |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

### Enums


#### OperationState
Статус запрашиваемых операций.

| Name | Number | Description |
| ---- | ------ | ----------- |
| OPERATION_STATE_UNSPECIFIED | 0 | Статус операции не определён |
| OPERATION_STATE_EXECUTED | 1 | Исполнена. |
| OPERATION_STATE_CANCELED | 2 | Отменена. |




#### OperationType
Тип операции.

| Name | Number | Description |
| ---- | ------ | ----------- |
| OPERATION_TYPE_UNSPECIFIED | 0 | Тип операции не определён. |
| OPERATION_TYPE_INPUT | 1 | Пополнение брокерского счёта. |
| OPERATION_TYPE_BOND_TAX | 2 | Удержание НДФЛ по купонам. |
| OPERATION_TYPE_OUTPUT_SECURITIES | 3 | Вывод ЦБ. |
| OPERATION_TYPE_OVERNIGHT | 4 | Доход по сделке РЕПО овернайт. |
| OPERATION_TYPE_TAX | 5 | Удержание налога. |
| OPERATION_TYPE_BOND_REPAYMENT_FULL | 6 | Полное погашение облигаций. |
| OPERATION_TYPE_SELL_CARD | 7 | Продажа ЦБ с карты. |
| OPERATION_TYPE_DIVIDEND_TAX | 8 | Удержание налога по дивидендам. |
| OPERATION_TYPE_OUTPUT | 9 | Вывод денежных средств. |
| OPERATION_TYPE_BOND_REPAYMENT | 10 | Частичное погашение облигаций. |
| OPERATION_TYPE_TAX_CORRECTION | 11 | Корректировка налога. |
| OPERATION_TYPE_SERVICE_FEE | 12 | Удержание комиссии за обслуживание брокерского счёта. |
| OPERATION_TYPE_BENEFIT_TAX | 13 | Удержание налога за материальную выгоду. |
| OPERATION_TYPE_MARGIN_FEE | 14 | Удержание комиссии за непокрытую позицию. |
| OPERATION_TYPE_BUY | 15 | Покупка ЦБ. |
| OPERATION_TYPE_BUY_CARD | 16 | Покупка ЦБ с карты. |
| OPERATION_TYPE_INPUT_SECURITIES | 17 | Перевод ценных бумаг из другого депозитария. |
| OPERATION_TYPE_SELL_MARGIN | 18 | Продажа в результате Margin-call. |
| OPERATION_TYPE_BROKER_FEE | 19 | Удержание комиссии за операцию. |
| OPERATION_TYPE_BUY_MARGIN | 20 | Покупка в результате Margin-call. |
| OPERATION_TYPE_DIVIDEND | 21 | Выплата дивидендов. |
| OPERATION_TYPE_SELL | 22 | Продажа ЦБ. |
| OPERATION_TYPE_COUPON | 23 | Выплата купонов. |
| OPERATION_TYPE_SUCCESS_FEE | 24 | Удержание комиссии SuccessFee. |
| OPERATION_TYPE_DIVIDEND_TRANSFER | 25 | Передача дивидендного дохода. |
| OPERATION_TYPE_ACCRUING_VARMARGIN | 26 | Зачисление вариационной маржи. |
| OPERATION_TYPE_WRITING_OFF_VARMARGIN | 27 | Списание вариационной маржи. |
| OPERATION_TYPE_DELIVERY_BUY | 28 | Покупка в рамках экспирации фьючерсного контракта. |
| OPERATION_TYPE_DELIVERY_SELL | 29 | Продажа в рамках экспирации фьючерсного контракта. |
| OPERATION_TYPE_TRACK_MFEE | 30 | Комиссия за управление по счёту автоследования. |
| OPERATION_TYPE_TRACK_PFEE | 31 | Комиссия за результат по счёту автоследования. |
| OPERATION_TYPE_TAX_PROGRESSIVE | 32 | Удержание налога по ставке 15%. |
| OPERATION_TYPE_BOND_TAX_PROGRESSIVE | 33 | Удержание налога по купонам по ставке 15%. |
| OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE | 34 | Удержание налога по дивидендам по ставке 15%. |
| OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE | 35 | Удержание налога за материальную выгоду по ставке 15%. |
| OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE | 36 | Корректировка налога по ставке 15%. |
| OPERATION_TYPE_TAX_REPO_PROGRESSIVE | 37 | Удержание налога за возмещение по сделкам РЕПО по ставке 15%. |
| OPERATION_TYPE_TAX_REPO | 38 | Удержание налога за возмещение по сделкам РЕПО. |
| OPERATION_TYPE_TAX_REPO_HOLD | 39 | Удержание налога по сделкам РЕПО. |
| OPERATION_TYPE_TAX_REPO_REFUND | 40 | Возврат налога по сделкам РЕПО. |
| OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE | 41 | Удержание налога по сделкам РЕПО по ставке 15%. |
| OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE | 42 | Возврат налога по сделкам РЕПО по ставке 15%. |
| OPERATION_TYPE_DIV_EXT | 43 | Выплата дивидендов на карту. |
| OPERATION_TYPE_TAX_CORRECTION_COUPON | 44 | Корректировка налога по купонам. |


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

