

 <!-- range HasServices -->






## InstrumentsService
Сервис предназначен для получения:</br>**1**. информации об инструментах;</br>**2**.
расписания торговых сессий;</br>**3**. календаря выплат купонов по облигациям;</br>**4**.
размера гарантийного обеспечения по фьючерсам;</br>**5**. дивидендов по ценной бумаге.

###Методы сервиса


#### TradingSchedules
Метод получения расписания торгов торговых площадок.

- Тело запроса — [TradingSchedulesRequest](#tradingschedulesrequest)

- Тело ответа — [TradingSchedulesResponse](#tradingschedulesresponse)


#### BondBy
Метод получения облигации по её идентификатору.

- Тело запроса — [InstrumentRequest](#instrumentrequest)

- Тело ответа — [BondResponse](#bondresponse)


#### Bonds
Метод получения списка облигаций.

- Тело запроса — [InstrumentsRequest](#instrumentsrequest)

- Тело ответа — [BondsResponse](#bondsresponse)


#### CurrencyBy
Метод получения валюты по её идентификатору.

- Тело запроса — [InstrumentRequest](#instrumentrequest)

- Тело ответа — [CurrencyResponse](#currencyresponse)


#### Currencies
Метод получения списка валют.

- Тело запроса — [InstrumentsRequest](#instrumentsrequest)

- Тело ответа — [CurrenciesResponse](#currenciesresponse)


#### EtfBy
Метод получения инвестиционного фонда по его идентификатору.

- Тело запроса — [InstrumentRequest](#instrumentrequest)

- Тело ответа — [EtfResponse](#etfresponse)


#### Etfs
Метод получения списка инвестиционных фондов.

- Тело запроса — [InstrumentsRequest](#instrumentsrequest)

- Тело ответа — [EtfsResponse](#etfsresponse)


#### FutureBy
Метод получения фьючерса по его идентификатору.

- Тело запроса — [InstrumentRequest](#instrumentrequest)

- Тело ответа — [FutureResponse](#futureresponse)


#### Futures
Метод получения списка фьючерсов.

- Тело запроса — [InstrumentsRequest](#instrumentsrequest)

- Тело ответа — [FuturesResponse](#futuresresponse)


#### ShareBy
Метод получения акции по её идентификатору.

- Тело запроса — [InstrumentRequest](#instrumentrequest)

- Тело ответа — [ShareResponse](#shareresponse)


#### Shares
Метод получения списка акций.

- Тело запроса — [InstrumentsRequest](#instrumentsrequest)

- Тело ответа — [SharesResponse](#sharesresponse)


#### GetAccruedInterests
Метод получения накопленного купонного дохода по облигации.

- Тело запроса — [GetAccruedInterestsRequest](#getaccruedinterestsrequest)

- Тело ответа — [GetAccruedInterestsResponse](#getaccruedinterestsresponse)


#### GetFuturesMargin
Метод получения размера гарантийного обеспечения по фьючерсам.

- Тело запроса — [GetFuturesMarginRequest](#getfuturesmarginrequest)

- Тело ответа — [GetFuturesMarginResponse](#getfuturesmarginresponse)


#### GetInstrumentBy
Метод получения основной информации об инструменте.

- Тело запроса — [InstrumentRequest](#instrumentrequest)

- Тело ответа — [InstrumentResponse](#instrumentresponse)


#### GetDividends
Метод для получения событий выплаты дивидендов по инструменту.

- Тело запроса — [GetDividendsRequest](#getdividendsrequest)

- Тело ответа — [GetDividendsResponse](#getdividendsresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### TradingSchedulesRequest
Запрос расписания торгов


| Field | Type | Description |
| ----- | ---- | ----------- |
| exchange |  [string](#string) | Наименование биржи или расчетного календаря. </br>Если не передаётся, возвращается информация по всем доступным торговым площадкам. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало периода по часовому поясу UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание периода по часовому поясу UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradingSchedulesResponse
Список торговых площадок


| Field | Type | Description |
| ----- | ---- | ----------- |
| exchanges | Массив объектов [TradingSchedule](#tradingschedule) | Список торговых площадок и режимов торгов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradingSchedule
Данные по торговой площадке.


| Field | Type | Description |
| ----- | ---- | ----------- |
| exchange |  [string](#string) | Наименование торговой площадки. |
| days | Массив объектов [TradingDay](#tradingday) | Массив с торговыми и неторговыми днями. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradingDay
Информация о времени торгов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата. |
| is_trading_day |  [bool](#bool) | Признак торгового дня на бирже. |
| start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала торгов по часовому поясу UTC. |
| end_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время окончания торгов по часовому поясу UTC. |
| market_order_start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала подачи заявки по часовому поясу UTC. |
| market_order_end_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время окончания подачи заявки по часовому поясу UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentRequest
Запрос получения инструмента по идентификатору.


| Field | Type | Description |
| ----- | ---- | ----------- |
| id_type |  [InstrumentIdType](#instrumentidtype) | Тип идентификатора инструмента. Возможные значения: figi, ticker, isin. Подробнее об идентификации инструментов: [Идентификация инструментов](https://tinkoff.github.io/investAPI/faq_identification/) |
| class_code |  [string](#string) | Идентификатор class_code. Обязателен при id_type = ticker. |
| id |  [string](#string) | Идентификатор запрашиваемого инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentsRequest
Запрос получения инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_status |  [InstrumentStatus](#instrumentstatus) | Статус запрашиваемых инструментов. Возможные значения: [InstrumentStatus](#instrumentstatus) |
 <!-- end Fields -->
 <!-- end HasFields -->


#### BondResponse
Информация об облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument |  [Bond](#bond) | Информация об облигации. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### BondsResponse
Список облигаций.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [Bond](#bond) | Массив облигаций. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CurrencyResponse
Данные по валюте.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument |  [Currency](#currency) | Информация о валюте. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CurrenciesResponse
Данные по валютам.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [Currency](#currency) | Массив валют. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### EtfResponse
Данные по фонду.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument |  [Etf](#etf) | Информация о фонде. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### EtfsResponse
Данные по фондам.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [Etf](#etf) | Массив фондов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### FutureResponse
Данные по фьючерсу.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument |  [Future](#future) | Информация о фьючерсу. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### FuturesResponse
Данные по фьючерсам.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [Future](#future) | Массив фьючерсов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### ShareResponse
Данные по акции.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument |  [Share](#share) | Информация об акции. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SharesResponse
Данные по акциям.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [Share](#share) | Массив акций. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Bond
Объект передачи информации об облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код (секция торгов). |
| isin |  [string](#string) | Isin-идентификатор инструмента. |
| lot |  [int32](#int32) | Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) |
| currency |  [string](#string) | Валюта расчётов. |
| klong |  [double](#double) | Коэффициент ставки риска длинной позиции по инструменту. |
| kshort |  [double](#double) | Коэффициент ставки риска короткой позиции по инструменту. |
| dlong |  [double](#double) | Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort |  [double](#double) | Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| dlong_min |  [double](#double) | Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort_min |  [double](#double) | Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Торговая площадка. |
| coupon_quantity_per_year |  [int32](#int32) | Количество выплат по купонам в год. |
| maturity_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата погашения облигации в часовом поясе UTC. |
| nominal |  [MoneyValue](#moneyvalue) | Номинал облигации. |
| state_reg_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выпуска облигации в часовом поясе UTC. |
| placement_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата размещения в часовом поясе UTC. |
| placement_price |  [MoneyValue](#moneyvalue) | Цена размещения. |
| aci_value |  [MoneyValue](#moneyvalue) | Значение НКД (накопленного купонного дохода) на дату. |
| country_of_risk |  [string](#string) | Код страны эмитента. |
| country_of_risk_name |  [string](#string) | Наименование страны эмитента. |
| sector |  [string](#string) | Сектор экономики. |
| issue_kind |  [string](#string) | Форма выпуска. Возможные значения: </br>**documentary** — документарная; </br>**non_documentary** — бездокументарная. |
| issue_size |  [int64](#int64) | Размер выпуска. |
| issue_size_plan |  [int64](#int64) | Плановый размер выпуска. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Признак внебиржевой ценной бумаги. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| floating_coupon_flag |  [bool](#bool) | Признак облигации с плавающим купоном. |
| perpetual_flag |  [bool](#bool) | Признак бессрочной облигации. |
| amortization_flag |  [bool](#bool) | Признак облигации с амортизацией долга. |
| min_price_increment |  [float](#float) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Currency
Объект передачи информации о валюте.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код (секция торгов). |
| isin |  [string](#string) | Isin-идентификатор инструмента. |
| lot |  [int32](#int32) | Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) |
| currency |  [string](#string) | Валюта расчётов. |
| klong |  [double](#double) | Коэффициент ставки риска длинной позиции по инструменту. |
| kshort |  [double](#double) | Коэффициент ставки риска короткой позиции по инструменту. |
| dlong |  [double](#double) | Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort |  [double](#double) | Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| dlong_min |  [double](#double) | Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort_min |  [double](#double) | Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Торговая площадка. |
| nominal |  [MoneyValue](#moneyvalue) | Номинал. |
| country_of_risk |  [string](#string) | Код страны эмитента. |
| country_of_risk_name |  [string](#string) | Наименование страны эмитента. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Признак внебиржевой ценной бумаги. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| iso_currency_name |  [string](#string) | Строковый ISO-код валюты. |
| min_price_increment |  [float](#float) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Etf
Объект передачи информации об инвестиционном фонде.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код (секция торгов). |
| isin |  [string](#string) | Isin-идентификатор инструмента. |
| lot |  [int32](#int32) | Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) |
| currency |  [string](#string) | Валюта расчётов. |
| klong |  [double](#double) | Коэффициент ставки риска длинной позиции по инструменту. |
| kshort |  [double](#double) | Коэффициент ставки риска короткой позиции по инструменту. |
| dlong |  [double](#double) | Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort |  [double](#double) | Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| dlong_min |  [double](#double) | Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort_min |  [double](#double) | Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Торговая площадка. |
| fixed_commission |  [double](#double) | Размер фиксированной комиссии фонда. |
| focus_type |  [string](#string) | Возможные значения: </br>**equity** — акции;</br>**fixed_income** — облигации;</br>**mixed_allocation** — смешанный;</br>**money_market** — денежный рынок;</br>**real_estate** — недвижимость;</br>**commodity** — товары;</br>**specialty** — специальный;</br>**private_equity** — private equity;</br>**alternative_investment** — альтернативные инвестиции. |
| released_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выпуска в часовом поясе UTC. |
| num_shares |  [double](#double) | Количество акций фонда в обращении. |
| country_of_risk |  [string](#string) | Код страны эмитента. |
| country_of_risk_name |  [string](#string) | Наименование страны эмитента. |
| sector |  [string](#string) | Сектор экономики. |
| rebalancing_freq |  [string](#string) | Частота ребалансировки. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Признак внебиржевой ценной бумаги. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| min_price_increment |  [float](#float) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Future
Объект передачи информации о фьючерсе.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код (секция торгов). |
| lot |  [int32](#int32) | Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) |
| currency |  [string](#string) | Валюта расчётов. |
| klong |  [double](#double) | Коэффициент ставки риска длинной позиции по клиенту. |
| kshort |  [double](#double) | Коэффициент ставки риска короткой позиции по клиенту. |
| dlong |  [double](#double) | Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort |  [double](#double) | Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| dlong_min |  [double](#double) | Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort_min |  [double](#double) | Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Торговая площадка. |
| first_trade_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата начала обращения контракта в часовом поясе UTC. |
| last_trade_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата в часовом поясе UTC, до которой возможно проведение операций с фьючерсом. |
| futures_type |  [string](#string) | Тип фьючерса. Возможные значения: </br>**physical_delivery** — физические поставки; </br>**cash_settlement** — денежный эквивалент. |
| asset_type |  [string](#string) | Тип актива. Возможные значения: </br>**commodity** — товар; </br>**currency** — валюта; </br>**security** — ценная бумага; </br>**index** — индекс. |
| basic_asset |  [string](#string) | Основной актив. |
| basic_asset_size |  [double](#double) | Размер основного актива. |
| country_of_risk |  [string](#string) | Код страны эмитента. |
| country_of_risk_name |  [string](#string) | Наименование страны эмитента. |
| sector |  [string](#string) | Сектор экономики. |
| expiration_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата истечения срока. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Признак внебиржевой ценной бумаги. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| min_price_increment |  [float](#float) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Share
Объект передачи информации об акции.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код (секция торгов). |
| isin |  [string](#string) | Isin-идентификатор инструмента. |
| lot |  [int32](#int32) | Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) |
| currency |  [string](#string) | Валюта расчётов. |
| klong |  [double](#double) | Коэффициент ставки риска длинной позиции по инструменту. |
| kshort |  [double](#double) | Коэффициент ставки риска короткой позиции по инструменту. |
| dlong |  [double](#double) | Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort |  [double](#double) | Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| dlong_min |  [double](#double) | Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort_min |  [double](#double) | Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Торговая площадка. |
| ipo_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата IPO акции в часовом поясе UTC. |
| issue_size |  [int64](#int64) | Размер выпуска. |
| country_of_risk |  [string](#string) | Код страны эмитента. |
| country_of_risk_name |  [string](#string) | Наименование страны эмитента. |
| sector |  [string](#string) | Сектор экономики. |
| issue_size_plan |  [int64](#int64) | Плановый размер выпуска. |
| nominal |  [MoneyValue](#moneyvalue) | Номинал. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Признак внебиржевой ценной бумаги. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| div_yield_flag |  [bool](#bool) | Признак наличия дивидендной доходности. |
| share_type |  [ShareType](#sharetype) | Тип акции. Возможные значения: [ShareType](https://tinkoff.github.io/investAPI/instruments#sharetype) |
| min_price_increment |  [float](#float) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetAccruedInterestsRequest
Запрос НКД по облигации


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода в часовом поясе UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода в часовом поясе UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetAccruedInterestsResponse
НКД облигации


| Field | Type | Description |
| ----- | ---- | ----------- |
| accrued_interests | Массив объектов [AccruedInterest](#accruedinterest) | Массив операций начисления купонов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AccruedInterest
Операция начисления купонов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время выплаты в часовом поясе UTC. |
| value |  [Quotation](#quotation) | Величина выплаты. |
| value_percent |  [float](#float) | Величина выплаты в процентах от номинала. |
| nominal |  [Quotation](#quotation) | Номинал облигации. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetFuturesMarginRequest
Запрос информации о фьючерсе


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Идентификатор инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetFuturesMarginResponse
Данные по фьючерсу


| Field | Type | Description |
| ----- | ---- | ----------- |
| initial_margin_on_buy |  [MoneyValue](#moneyvalue) | Гарантийное обеспечение при покупке. |
| initial_margin_on_sell |  [MoneyValue](#moneyvalue) | Гарантийное обеспечение при продаже. |
| min_price_increment |  [float](#float) | Шаг цены. |
| min_price_increment_amount |  [Quotation](#quotation) | Стоимость шага цены. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentResponse
Данные по инструменту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument |  [Instrument](#instrument) | Основная информация об инструменте. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Instrument
Объект передачи основной информации об инструменте.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код инструмента. |
| isin |  [string](#string) | Isin-идентификатор инструмента. |
| lot |  [int32](#int32) | Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) |
| currency |  [string](#string) | Валюта расчётов. |
| klong |  [double](#double) | Коэффициент ставки риска длинной позиции по инструменту. |
| kshort |  [double](#double) | Коэффициент ставки риска короткой позиции по инструменту. |
| dlong |  [double](#double) | Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort |  [double](#double) | Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| dlong_min |  [double](#double) | Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort_min |  [double](#double) | Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Торговая площадка. |
| country_of_risk |  [string](#string) | Код страны эмитента. |
| country_of_risk_name |  [string](#string) | Наименование страны эмитента. |
| instrument_type |  [string](#string) | Тип инструмента. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Признак внебиржевой ценной бумаги. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| min_price_increment |  [float](#float) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetDividendsRequest
Запрос дивидендов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода в часовом поясе UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода в часовом поясе UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetDividendsResponse
Дивиденды.


| Field | Type | Description |
| ----- | ---- | ----------- |
| dividends | Массив объектов [Dividend](#dividend) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Dividend
Информация о выплате.


| Field | Type | Description |
| ----- | ---- | ----------- |
| dividend_net |  [MoneyValue](#moneyvalue) | Величина дивиденда на 1 ценную бумагу (включая валюту). |
| payment_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата фактических выплат. |
| declared_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата объявления дивидендов. |
| last_buy_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Последний день (включительно) покупки для получения выплаты. |
| dividend_type |  [string](#string) | Тип выплаты. Возможные значения: Regular Cash – регулярные выплаты, Cancelled – выплата отменена, Daily Accrual – ежедневное начисление, Return of Capital – возврат капитала, прочие типы выплат. |
| record_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата фиксации реестра |
| regularity |  [string](#string) | Регулярность выплаты. Возможные значения: Annual – ежегодная, Semi-Anl – каждые полгода, прочие типы выплат. |
| close_price |  [MoneyValue](#moneyvalue) | Цена закрытия инструмента на момент ex_dividend_date. |
| yield_value |  [Quotation](#quotation) | Величина доходности. |
| created_at |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время создания записи. |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

### Enums


#### InstrumentIdType
Тип идентификатора инструмента. Подробнее об идентификации инструментов: [Идентификация инструментов](https://tinkoff.github.io/investAPI/faq_identification/)

| Name | Number | Description |
| ---- | ------ | ----------- |
| INSTRUMENT_ID_UNSPECIFIED | 0 | Значение не определено. |
| INSTRUMENT_ID_TYPE_FIGI | 1 | Figi. |
| INSTRUMENT_ID_TYPE_TICKER | 2 | Ticker. |




#### InstrumentStatus
Статус запрашиваемых инструментов.

| Name | Number | Description |
| ---- | ------ | ----------- |
| INSTRUMENT_STATUS_UNSPECIFIED | 0 | Значение не определено. |
| INSTRUMENT_STATUS_BASE | 1 | Базовый список инструментов (по умолчанию). |
| INSTRUMENT_STATUS_ALL | 2 | Список всех инструментов. |




#### ShareType
Тип акций.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SHARE_TYPE_UNSPECIFIED | 0 | Значение не определено. |
| SHARE_TYPE_COMMON | 1 | Обыкновенная |
| SHARE_TYPE_PREFERRED | 2 | Привилегированная |
| SHARE_TYPE_ADR | 3 | Американские депозитарные расписки |
| SHARE_TYPE_GDR | 4 | Глобальные депозитарные расписки |
| SHARE_TYPE_MLP | 5 | Товарищество с ограниченной ответственностью |
| SHARE_TYPE_NY_REG_SHRS | 6 | Акции из реестра Нью-Йорка |
| SHARE_TYPE_CLOSED_END_FUND | 7 | Закрытый инвестиционный фонд |
| SHARE_TYPE_REIT | 8 | Траст недвижимости |


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

