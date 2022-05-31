





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


#### GetSandboxPortfolio
Метод получения портфолио в песочнице.

- Тело запроса — [PortfolioRequest](#portfoliorequest)

- Тело ответа — [PortfolioResponse](#portfolioresponse)


#### SandboxPayIn
Метод пополнения счёта в песочнице.

- Тело запроса — [SandboxPayInRequest](#sandboxpayinrequest)

- Тело ответа — [SandboxPayInResponse](#sandboxpayinresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



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

 <!-- range .Enums -->
 <!-- range HasServices -->


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
 <!-- range .Values -->



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
 <!-- range .Values -->

 <!-- range .HasEnums -->

 <!-- range .Enums -->
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
списка счетов пользователя; </br> **2**. маржинальных показателей по счёту.

###Методы сервиса


#### GetAccounts
Метод получения счетов пользователя.

- Тело запроса — [GetAccountsRequest](#getaccountsrequest)

- Тело ответа — [GetAccountsResponse](#getaccountsresponse)


#### GetMarginAttributes
Расчёт маржинальных показателей по счёту.

- Тело запроса — [GetMarginAttributesRequest](#getmarginattributesrequest)

- Тело ответа — [GetMarginAttributesResponse](#getmarginattributesresponse)


#### GetUserTariff
Запрос тарифа пользователя.

- Тело запроса — [GetUserTariffRequest](#getusertariffrequest)

- Тело ответа — [GetUserTariffResponse](#getusertariffresponse)


#### GetInfo
Метод получения информации о пользователе.

- Тело запроса — [GetInfoRequest](#getinforequest)

- Тело ответа — [GetInfoResponse](#getinforesponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### GetAccountsRequest
Запрос получения счетов пользователя.

 <!-- end HasFields -->


#### GetAccountsResponse
Список счетов пользователя.


| Field | Type | Description |
| ----- | ---- | ----------- |
| accounts | Массив объектов [Account](#account) | Массив счетов клиента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Account
Информация о счёте.


| Field | Type | Description |
| ----- | ---- | ----------- |
| id |  [string](#string) | Идентификатор счёта. |
| type |  [AccountType](#accounttype) | Тип счёта. |
| name |  [string](#string) | Название счёта. |
| status |  [AccountStatus](#accountstatus) | Статус счёта. |
| opened_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата открытия счёта в часовом поясе UTC. |
| closed_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата закрытия счёта в часовом поясе UTC. |
| access_level |  [AccessLevel](#accesslevel) | Уровень доступа к текущему счёту (определяется токеном). |
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
Запрос текущих лимитов пользователя.

 <!-- end HasFields -->


#### GetUserTariffResponse
Текущие лимиты пользователя.


| Field | Type | Description |
| ----- | ---- | ----------- |
| unary_limits | Массив объектов [UnaryLimit](#unarylimit) | Массив лимитов пользователя по unary-запросам |
| stream_limits | Массив объектов [StreamLimit](#streamlimit) | Массив лимитов пользователей для stream-соединений |
 <!-- end Fields -->
 <!-- end HasFields -->


#### UnaryLimit
Лимит unary-методов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| limit_per_minute |  [int32](#int32) | Количество unary-запросов в минуту |
| methods | Массив объектов [string](#string) | Названия методов |
 <!-- end Fields -->
 <!-- end HasFields -->


#### StreamLimit
Лимит stream-соединений.


| Field | Type | Description |
| ----- | ---- | ----------- |
| limit |  [int32](#int32) | Максимальное количество stream-соединений |
| streams | Массив объектов [string](#string) | Названия stream-методов |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetInfoRequest
Запрос информации о пользователе.

 <!-- end HasFields -->


#### GetInfoResponse
Информация о пользователе.


| Field | Type | Description |
| ----- | ---- | ----------- |
| prem_status |  [bool](#bool) | Признак премиум клиента. |
| qual_status |  [bool](#bool) | Признак квалифицированного инвестора. |
| qualified_for_work_with | Массив объектов [string](#string) | Набор требующих тестирования инструментов и возможностей, с которыми может работать пользователь. [Подробнее](https://tinkoff.github.io/investAPI/faq_users/). |
| tariff |  [string](#string) | Наименование тарифа пользователя. |
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



#### AccessLevel
Уровень доступа к счёту.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ACCOUNT_ACCESS_LEVEL_UNSPECIFIED | 0 | Уровень доступа не определён. |
| ACCOUNT_ACCESS_LEVEL_FULL_ACCESS | 1 | Полный доступ к счёту. |
| ACCOUNT_ACCESS_LEVEL_READ_ONLY | 2 | Доступ с уровнем прав "только чтение". |
| ACCOUNT_ACCESS_LEVEL_NO_ACCESS | 3 | Доступ отсутствует. |
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

