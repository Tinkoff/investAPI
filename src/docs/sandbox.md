

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


#### GetBondCoupons
Метод получения графика выплат купонов по облигации

- Тело запроса — [GetBondCouponsRequest](#getbondcouponsrequest)

- Тело ответа — [GetBondCouponsResponse](#getbondcouponsresponse)


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


#### GetAssetBy
Метод получения актива по его идентификатору.

- Тело запроса — [AssetRequest](#assetrequest)

- Тело ответа — [AssetResponse](#assetresponse)


#### GetAssets
Метод получения списка активов.

- Тело запроса — [AssetsRequest](#assetsrequest)

- Тело ответа — [AssetsResponse](#assetsresponse)


#### GetFavorites
Метод получения избранных инструментов.

- Тело запроса — [GetFavoritesRequest](#getfavoritesrequest)

- Тело ответа — [GetFavoritesResponse](#getfavoritesresponse)


#### EditFavorites
Метод редактирования избранных инструментов.

- Тело запроса — [EditFavoritesRequest](#editfavoritesrequest)

- Тело ответа — [EditFavoritesResponse](#editfavoritesresponse)

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
| opening_auction_start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала аукциона открытия в часовом поясе UTC. |
| closing_auction_end_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время окончания аукциона закрытия в часовом поясе UTC. |
| evening_opening_auction_start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала аукциона открытия вечерней сессии в часовом поясе UTC. |
| evening_start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала вечерней сессии в часовом поясе UTC. |
| evening_end_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время окончания вечерней сессии в часовом поясе UTC. |
| clearing_start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала основного клиринга в часовом поясе UTC. |
| clearing_end_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время окончания основного клиринга в часовом поясе UTC. |
| premarket_start_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала премаркета в часовом поясе UTC. |
| premarket_end_time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время окончания премаркета в часовом поясе UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentRequest
Запрос получения инструмента по идентификатору.


| Field | Type | Description |
| ----- | ---- | ----------- |
| id_type |  [InstrumentIdType](#instrumentidtype) | Тип идентификатора инструмента. Возможные значения: figi, ticker. Подробнее об идентификации инструментов: [Идентификация инструментов](https://tinkoff.github.io/investAPI/faq_identification/) |
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


#### GetBondCouponsRequest
Запрос купонов по облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода в часовом поясе UTC. Фильтрация по coupon_date (дата выплаты купона) |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода в часовом поясе UTC. Фильтрация по coupon_date (дата выплаты купона) |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBondCouponsResponse
Купоны по облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| events | Массив объектов [Coupon](#coupon) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Coupon
Объект передачи информации о купоне облигации.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| coupon_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выплаты купона |
| coupon_number |  [int64](#int64) | Номер купона |
| fix_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | (Опционально) Дата фиксации реестра для выплаты купона |
| pay_one_bond |  [MoneyValue](#moneyvalue) | Выплата на одну облигацию |
| coupon_type |  [CouponType](#coupontype) | Тип купона |
| coupon_start_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало купонного периода. |
| coupon_end_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание купонного периода. |
| coupon_period |  [int32](#int32) | Купонный период в днях. |
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
| klong |  [Quotation](#quotation) | Коэффициент ставки риска длинной позиции по инструменту. |
| kshort |  [Quotation](#quotation) | Коэффициент ставки риска короткой позиции по инструменту. |
| dlong |  [Quotation](#quotation) | Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort |  [Quotation](#quotation) | Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| dlong_min |  [Quotation](#quotation) | Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort_min |  [Quotation](#quotation) | Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
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
| country_of_risk |  [string](#string) | Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. |
| country_of_risk_name |  [string](#string) | Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. |
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
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| real_exchange |  [RealExchange](#realexchange) | Реальная площадка исполнения расчётов. |
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
| klong |  [Quotation](#quotation) | Коэффициент ставки риска длинной позиции по инструменту. |
| kshort |  [Quotation](#quotation) | Коэффициент ставки риска короткой позиции по инструменту. |
| dlong |  [Quotation](#quotation) | Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort |  [Quotation](#quotation) | Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| dlong_min |  [Quotation](#quotation) | Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort_min |  [Quotation](#quotation) | Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Торговая площадка. |
| nominal |  [MoneyValue](#moneyvalue) | Номинал. |
| country_of_risk |  [string](#string) | Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. |
| country_of_risk_name |  [string](#string) | Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Признак внебиржевой ценной бумаги. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| iso_currency_name |  [string](#string) | Строковый ISO-код валюты. |
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| real_exchange |  [RealExchange](#realexchange) | Реальная площадка исполнения расчётов. |
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
| klong |  [Quotation](#quotation) | Коэффициент ставки риска длинной позиции по инструменту. |
| kshort |  [Quotation](#quotation) | Коэффициент ставки риска короткой позиции по инструменту. |
| dlong |  [Quotation](#quotation) | Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort |  [Quotation](#quotation) | Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| dlong_min |  [Quotation](#quotation) | Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort_min |  [Quotation](#quotation) | Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Торговая площадка. |
| fixed_commission |  [Quotation](#quotation) | Размер фиксированной комиссии фонда. |
| focus_type |  [string](#string) | Возможные значения: </br>**equity** — акции;</br>**fixed_income** — облигации;</br>**mixed_allocation** — смешанный;</br>**money_market** — денежный рынок;</br>**real_estate** — недвижимость;</br>**commodity** — товары;</br>**specialty** — специальный;</br>**private_equity** — private equity;</br>**alternative_investment** — альтернативные инвестиции. |
| released_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выпуска в часовом поясе UTC. |
| num_shares |  [Quotation](#quotation) | Количество акций фонда в обращении. |
| country_of_risk |  [string](#string) | Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. |
| country_of_risk_name |  [string](#string) | Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. |
| sector |  [string](#string) | Сектор экономики. |
| rebalancing_freq |  [string](#string) | Частота ребалансировки. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Признак внебиржевой ценной бумаги. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| real_exchange |  [RealExchange](#realexchange) | Реальная площадка исполнения расчётов. |
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
| klong |  [Quotation](#quotation) | Коэффициент ставки риска длинной позиции по клиенту. |
| kshort |  [Quotation](#quotation) | Коэффициент ставки риска короткой позиции по клиенту. |
| dlong |  [Quotation](#quotation) | Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort |  [Quotation](#quotation) | Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| dlong_min |  [Quotation](#quotation) | Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort_min |  [Quotation](#quotation) | Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Торговая площадка. |
| first_trade_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата начала обращения контракта в часовом поясе UTC. |
| last_trade_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата в часовом поясе UTC, до которой возможно проведение операций с фьючерсом. |
| futures_type |  [string](#string) | Тип фьючерса. Возможные значения: </br>**physical_delivery** — физические поставки; </br>**cash_settlement** — денежный эквивалент. |
| asset_type |  [string](#string) | Тип актива. Возможные значения: </br>**commodity** — товар; </br>**currency** — валюта; </br>**security** — ценная бумага; </br>**index** — индекс. |
| basic_asset |  [string](#string) | Основной актив. |
| basic_asset_size |  [Quotation](#quotation) | Размер основного актива. |
| country_of_risk |  [string](#string) | Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. |
| country_of_risk_name |  [string](#string) | Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. |
| sector |  [string](#string) | Сектор экономики. |
| expiration_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата истечения срока в часов поясе UTC. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Признак внебиржевой ценной бумаги. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| real_exchange |  [RealExchange](#realexchange) | Реальная площадка исполнения расчётов. |
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
| klong |  [Quotation](#quotation) | Коэффициент ставки риска длинной позиции по инструменту. |
| kshort |  [Quotation](#quotation) | Коэффициент ставки риска короткой позиции по инструменту. |
| dlong |  [Quotation](#quotation) | Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort |  [Quotation](#quotation) | Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| dlong_min |  [Quotation](#quotation) | Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort_min |  [Quotation](#quotation) | Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Торговая площадка. |
| ipo_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата IPO акции в часовом поясе UTC. |
| issue_size |  [int64](#int64) | Размер выпуска. |
| country_of_risk |  [string](#string) | Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. |
| country_of_risk_name |  [string](#string) | Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. |
| sector |  [string](#string) | Сектор экономики. |
| issue_size_plan |  [int64](#int64) | Плановый размер выпуска. |
| nominal |  [MoneyValue](#moneyvalue) | Номинал. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Признак внебиржевой ценной бумаги. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| div_yield_flag |  [bool](#bool) | Признак наличия дивидендной доходности. |
| share_type |  [ShareType](#sharetype) | Тип акции. Возможные значения: [ShareType](https://tinkoff.github.io/investAPI/instruments#sharetype) |
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| real_exchange |  [RealExchange](#realexchange) | Реальная площадка исполнения расчётов. |
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
| value_percent |  [Quotation](#quotation) | Величина выплаты в процентах от номинала. |
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
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
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
| klong |  [Quotation](#quotation) | Коэффициент ставки риска длинной позиции по инструменту. |
| kshort |  [Quotation](#quotation) | Коэффициент ставки риска короткой позиции по инструменту. |
| dlong |  [Quotation](#quotation) | Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort |  [Quotation](#quotation) | Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| dlong_min |  [Quotation](#quotation) | Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) |
| dshort_min |  [Quotation](#quotation) | Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) |
| short_enabled_flag |  [bool](#bool) | Признак доступности для операций в шорт. |
| name |  [string](#string) | Название инструмента. |
| exchange |  [string](#string) | Торговая площадка. |
| country_of_risk |  [string](#string) | Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. |
| country_of_risk_name |  [string](#string) | Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. |
| instrument_type |  [string](#string) | Тип инструмента. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Текущий режим торгов инструмента. |
| otc_flag |  [bool](#bool) | Признак внебиржевой ценной бумаги. |
| buy_available_flag |  [bool](#bool) | Признак доступности для покупки. |
| sell_available_flag |  [bool](#bool) | Признак доступности для продажи. |
| min_price_increment |  [Quotation](#quotation) | Шаг цены. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
| real_exchange |  [RealExchange](#realexchange) | Реальная площадка исполнения расчётов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetDividendsRequest
Запрос дивидендов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода в часовом поясе UTC. Фильтрация происходит по параметру *record_date* (дата фиксации реестра). |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода в часовом поясе UTC. Фильтрация происходит по параметру *record_date* (дата фиксации реестра). |
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
| payment_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата фактических выплат в часовом поясе UTC. |
| declared_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата объявления дивидендов в часовом поясе UTC. |
| last_buy_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Последний день (включительно) покупки для получения выплаты в часовом поясе UTC. |
| dividend_type |  [string](#string) | Тип выплаты. Возможные значения: Regular Cash – регулярные выплаты, Cancelled – выплата отменена, Daily Accrual – ежедневное начисление, Return of Capital – возврат капитала, прочие типы выплат. |
| record_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата фиксации реестра в часовом поясе UTC. |
| regularity |  [string](#string) | Регулярность выплаты. Возможные значения: Annual – ежегодная, Semi-Anl – каждые полгода, прочие типы выплат. |
| close_price |  [MoneyValue](#moneyvalue) | Цена закрытия инструмента на момент ex_dividend_date. |
| yield_value |  [Quotation](#quotation) | Величина доходности. |
| created_at |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время создания записи в часовом поясе UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetRequest
Запрос актива по идентификатору.


| Field | Type | Description |
| ----- | ---- | ----------- |
| id |  [string](#string) | uid-идентификатор актива. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetResponse
Данные по активу.


| Field | Type | Description |
| ----- | ---- | ----------- |
| asset |  [AssetFull](#assetfull) | Актив. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetsRequest
Запрос списка активов.

 <!-- end HasFields -->


#### AssetsResponse
Список активов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| assets | Массив объектов [Asset](#asset) | Активы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetFull



| Field | Type | Description |
| ----- | ---- | ----------- |
| uid |  [string](#string) | Уникальный идентификатор актива. |
| type |  [AssetType](#assettype) | Тип актива. |
| name |  [string](#string) | Наименование актива. |
| name_brief |  [string](#string) | Короткое наименование актива. |
| description |  [string](#string) | Описание актива. |
| deleted_at |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время удаления актива. |
| required_tests | Массив объектов [string](#string) | Тестирование клиентов. |
| currency |  [AssetCurrency](#assetcurrency) | Валюта. Обязательно и заполняется только для type = "ASSET_TYPE_CURRENCY". |
| security |  [AssetSecurity](#assetsecurity) | Ценная бумага. Обязательно и заполняется только для type = "ASSET_TYPE_SECURITY". |
| gos_reg_code |  [string](#string) | Номер государственной регистрации. |
| cfi |  [string](#string) | Код CFI. |
| code_nsd |  [string](#string) | Код НРД инструмента. |
| status |  [string](#string) | Статус актива. |
| brand |  [Brand](#brand) | Бренд. |
| updated_at |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата и время последнего обновления записи. |
| br_code |  [string](#string) | Код типа ц.б. по классификации Банка России. |
| br_code_name |  [string](#string) | Наименование кода типа ц.б. по классификации Банка России. |
| instruments | Массив объектов [AssetInstrument](#assetinstrument) | Массив идентификаторов инструментов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Asset
Информация об активе.


| Field | Type | Description |
| ----- | ---- | ----------- |
| uid |  [string](#string) | Уникальный идентификатор актива. |
| type |  [AssetType](#assettype) | Тип актива. |
| name |  [string](#string) | Наименование актива. |
| instruments | Массив объектов [AssetInstrument](#assetinstrument) | Массив идентификаторов инструментов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetCurrency
Валюта.


| Field | Type | Description |
| ----- | ---- | ----------- |
| base_currency |  [string](#string) | ISO-код валюты. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetSecurity
Ценная бумага.


| Field | Type | Description |
| ----- | ---- | ----------- |
| isin |  [string](#string) | ISIN-идентификатор ценной бумаги. |
| type |  [string](#string) | Тип ценной бумаги. |
| share |  [AssetShare](#assetshare) | Акция. Заполняется только для акций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = share). |
| bond |  [AssetBond](#assetbond) | Облигация. Заполняется только для облигаций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = bond). |
| sp |  [AssetStructuredProduct](#assetstructuredproduct) | Структурная нота. Заполняется только для структурных продуктов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = sp). |
| etf |  [AssetEtf](#assetetf) | Фонд. Заполняется только для фондов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = etf). |
| clearing_certificate |  [AssetClearingCertificate](#assetclearingcertificate) | Клиринговый сертификат участия. Заполняется только для клиринговых сертификатов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = clearing_certificate). |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetShare
Акция.


| Field | Type | Description |
| ----- | ---- | ----------- |
| type |  [ShareType](#sharetype) | Тип акции. |
| issue_size |  [Quotation](#quotation) | Объем выпуска (шт.). |
| nominal |  [Quotation](#quotation) | Номинал. |
| nominal_currency |  [string](#string) | Валюта номинала. |
| primary_index |  [string](#string) | Индекс (Bloomberg). |
| dividend_rate |  [Quotation](#quotation) | Ставка дивиденда (для привилегированных акций). |
| preferred_share_type |  [string](#string) | Тип привилегированных акций. |
| ipo_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата IPO. |
| registry_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата регистрации. |
| div_yield_flag |  [bool](#bool) | Признак наличия дивидендной доходности. |
| issue_kind |  [string](#string) | Форма выпуска ФИ. |
| placement_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата размещения акции. |
| repres_isin |  [string](#string) | ISIN базового актива. |
| issue_size_plan |  [Quotation](#quotation) | Объявленное количество шт. |
| total_float |  [Quotation](#quotation) | Количество акций в свободном обращении. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetBond
Облигация.


| Field | Type | Description |
| ----- | ---- | ----------- |
| current_nominal |  [Quotation](#quotation) | Текущий номинал. |
| borrow_name |  [string](#string) | Наименование заемщика. |
| issue_size |  [Quotation](#quotation) | Объем эмиссии облигации (стоимость). |
| nominal |  [Quotation](#quotation) | Номинал облигации. |
| nominal_currency |  [string](#string) | Валюта номинала. |
| issue_kind |  [string](#string) | Форма выпуска облигации. |
| interest_kind |  [string](#string) | Форма дохода облигации. |
| coupon_quantity_per_year |  [int32](#int32) | Количество выплат в год. |
| indexed_nominal_flag |  [bool](#bool) | Признак облигации с индексируемым номиналом. |
| subordinated_flag |  [bool](#bool) | Признак субординированной облигации. |
| collateral_flag |  [bool](#bool) | Признак обеспеченной облигации. |
| tax_free_flag |  [bool](#bool) | Признак показывает, что купоны облигации не облагаются налогом (для mass market). |
| amortization_flag |  [bool](#bool) | Признак облигации с амортизацией долга. |
| floating_coupon_flag |  [bool](#bool) | Признак облигации с плавающим купоном. |
| perpetual_flag |  [bool](#bool) | Признак бессрочной облигации. |
| maturity_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата погашения облигации. |
| return_condition |  [string](#string) | Описание и условия получения дополнительного дохода. |
| state_reg_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выпуска облигации. |
| placement_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата размещения облигации. |
| placement_price |  [Quotation](#quotation) | Цена размещения облигации. |
| issue_size_plan |  [Quotation](#quotation) | Объявленное количество шт. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetStructuredProduct
Структурная нота.


| Field | Type | Description |
| ----- | ---- | ----------- |
| borrow_name |  [string](#string) | Наименование заемщика. |
| nominal |  [Quotation](#quotation) | Номинал. |
| nominal_currency |  [string](#string) | Валюта номинала. |
| type |  [StructuredProductType](#structuredproducttype) | Тип структурной ноты. |
| logic_portfolio |  [string](#string) | Стратегия портфеля. |
| asset_type |  [AssetType](#assettype) | Тип базового актива. |
| basic_asset |  [string](#string) | Вид базового актива в зависимости от типа базового актива. |
| safety_barrier |  [Quotation](#quotation) | Барьер сохранности (в процентах). |
| maturity_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата погашения. |
| issue_size_plan |  [Quotation](#quotation) | Объявленное количество шт. |
| issue_size |  [Quotation](#quotation) | Объем размещения. |
| placement_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата размещения ноты. |
| issue_kind |  [string](#string) | Форма выпуска. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetEtf
Фонд.


| Field | Type | Description |
| ----- | ---- | ----------- |
| total_expense |  [Quotation](#quotation) | Суммарные расходы фонда (в %). |
| hurdle_rate |  [Quotation](#quotation) | Барьерная ставка доходности после которой фонд имеет право на perfomance fee (в процентах). |
| performance_fee |  [Quotation](#quotation) | Комиссия за успешные результаты фонда (в процентах). |
| fixed_commission |  [Quotation](#quotation) | Фиксированная комиссия за управление (в процентах). |
| payment_type |  [string](#string) | Тип распределения доходов от выплат по бумагам. |
| watermark_flag |  [bool](#bool) | Признак необходимости выхода фонда в плюс для получения комиссии. |
| buy_premium |  [Quotation](#quotation) | Премия (надбавка к цене) при покупке доли в фонде (в процентах). |
| sell_discount |  [Quotation](#quotation) | Ставка дисконта (вычет из цены) при продаже доли в фонде (в процентах). |
| rebalancing_flag |  [bool](#bool) | Признак ребалансируемости портфеля фонда. |
| rebalancing_freq |  [string](#string) | Периодичность ребалансировки. |
| management_type |  [string](#string) | Тип управления. |
| primary_index |  [string](#string) | Индекс, который реплицирует (старается копировать) фонд. |
| focus_type |  [string](#string) | База ETF. |
| leveraged_flag |  [bool](#bool) | Признак использования заемных активов (плечо). |
| num_share |  [Quotation](#quotation) | Количество акций в обращении. |
| ucits_flag |  [bool](#bool) | Признак обязательства по отчетности перед регулятором. |
| released_date |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата выпуска. |
| description |  [string](#string) | Описание фонда. |
| primary_index_description |  [string](#string) | Описание индекса, за которым следует фонд. |
| primary_index_company |  [string](#string) | Основные компании, в которые вкладывается фонд. |
| index_recovery_period |  [Quotation](#quotation) | Срок восстановления индекса (после просадки). |
| inav_code |  [string](#string) | IVAV-код. |
| div_yield_flag |  [bool](#bool) | Признак наличия дивидендной доходности. |
| expense_commission |  [Quotation](#quotation) | Комиссия на покрытие расходов фонда (в процентах). |
| primary_index_tracking_error |  [Quotation](#quotation) | Ошибка следования за индексом (в процентах). |
| rebalancing_plan |  [string](#string) | Плановая ребалансировка портфеля. |
| tax_rate |  [string](#string) | Ставки налогообложения дивидендов и купонов. |
| rebalancing_dates | Массив объектов [google.protobuf.Timestamp](#googleprotobuftimestamp) | Даты ребалансировок. |
| issue_kind |  [string](#string) | Форма выпуска. |
| nominal |  [Quotation](#quotation) | Номинал. |
| nominal_currency |  [string](#string) | Валюта номинала. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetClearingCertificate
Клиринговый сертификат участия.


| Field | Type | Description |
| ----- | ---- | ----------- |
| nominal |  [Quotation](#quotation) | Номинал. |
| nominal_currency |  [string](#string) | Валюта номинала. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Brand
Бренд.


| Field | Type | Description |
| ----- | ---- | ----------- |
| uid |  [string](#string) | uid идентификатор бренда. |
| name |  [string](#string) | Наименование бренда. |
| description |  [string](#string) | Описание. |
| info |  [string](#string) | Информация о бренде. |
| company |  [string](#string) | Компания. |
| sector |  [string](#string) | Сектор. |
| country_of_risk |  [string](#string) | Код страны риска. |
| country_of_risk_name |  [string](#string) | Наименование страны риска. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### AssetInstrument
Идентификаторы инструмента.


| Field | Type | Description |
| ----- | ---- | ----------- |
| uid |  [string](#string) | uid идентификатор инструмента. |
| figi |  [string](#string) | figi идентификатор инструмента. |
| instrument_type |  [string](#string) | Тип инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код (секция торгов). |
| links | Массив объектов [InstrumentLink](#instrumentlink) | Массив связанных инструментов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentLink
Связь с другим инструментом.


| Field | Type | Description |
| ----- | ---- | ----------- |
| type |  [string](#string) | Тип связи. |
| instrument_uid |  [string](#string) | uid идентификатор связанного инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetFavoritesRequest
Запрос избранных инструментов.

 <!-- end HasFields -->


#### GetFavoritesResponse
Ответ избранных инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| favorite_instruments | Массив объектов [FavoriteInstrument](#favoriteinstrument) | Массив инструментов |
 <!-- end Fields -->
 <!-- end HasFields -->


#### FavoriteInstrument
Избранный инструмент.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| ticker |  [string](#string) | Тикер инструмента. |
| class_code |  [string](#string) | Класс-код инструмента. |
| isin |  [string](#string) | Isin-идентификатор инструмента. |
| instrument_type |  [string](#string) | Тип инструмента. |
| otc_flag |  [bool](#bool) | Признак внебиржевой ценной бумаги. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### EditFavoritesRequest
Запрос редактирования избранных инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [EditFavoritesRequestInstrument](#editfavoritesrequestinstrument) | Массив инструментов. |
| action_type |  [EditFavoritesActionType](#editfavoritesactiontype) | Тип действия со списком. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### EditFavoritesRequestInstrument
Избранный инструмент для редактирования.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### EditFavoritesResponse
Результат редактирования избранных инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| favorite_instruments | Массив объектов [FavoriteInstrument](#favoriteinstrument) | Массив инструментов |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->



### Enums


#### CouponType
Тип купонов.

| Name | Number | Description |
| ---- | ------ | ----------- |
| COUPON_TYPE_UNSPECIFIED | 0 | Неопределенное значение |
| COUPON_TYPE_CONSTANT | 1 | Постоянный |
| COUPON_TYPE_FLOATING | 2 | Плавающий |
| COUPON_TYPE_DISCOUNT | 3 | Дисконт |
| COUPON_TYPE_MORTGAGE | 4 | Ипотечный |
| COUPON_TYPE_FIX | 5 | Фиксированный |
| COUPON_TYPE_VARIABLE | 6 | Переменный |
| COUPON_TYPE_OTHER | 7 | Прочее |
 <!-- range .Values -->



#### InstrumentIdType
Тип идентификатора инструмента. Подробнее об идентификации инструментов: [Идентификация инструментов](https://tinkoff.github.io/investAPI/faq_identification/)

| Name | Number | Description |
| ---- | ------ | ----------- |
| INSTRUMENT_ID_UNSPECIFIED | 0 | Значение не определено. |
| INSTRUMENT_ID_TYPE_FIGI | 1 | Figi. |
| INSTRUMENT_ID_TYPE_TICKER | 2 | Ticker. |
| INSTRUMENT_ID_TYPE_UID | 3 | Уникальный идентификатор. |
 <!-- range .Values -->



#### InstrumentStatus
Статус запрашиваемых инструментов.

| Name | Number | Description |
| ---- | ------ | ----------- |
| INSTRUMENT_STATUS_UNSPECIFIED | 0 | Значение не определено. |
| INSTRUMENT_STATUS_BASE | 1 | Базовый список инструментов (по умолчанию). Инструменты доступные для торговли через TINKOFF INVEST API. |
| INSTRUMENT_STATUS_ALL | 2 | Список всех инструментов. |
 <!-- range .Values -->



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
 <!-- range .Values -->



#### AssetType
Тип актива.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ASSET_TYPE_UNSPECIFIED | 0 | Тип не определён. |
| ASSET_TYPE_CURRENCY | 1 | Валюта. |
| ASSET_TYPE_COMMODITY | 2 | Товар. |
| ASSET_TYPE_INDEX | 3 | Индекс. |
| ASSET_TYPE_SECURITY | 4 | Ценная бумага. |
 <!-- range .Values -->



#### StructuredProductType
Тип структурной ноты.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SP_TYPE_UNSPECIFIED | 0 | Тип не определён. |
| SP_TYPE_DELIVERABLE | 1 | Поставочный. |
| SP_TYPE_NON_DELIVERABLE | 2 | Беспоставочный. |
 <!-- range .Values -->



#### EditFavoritesActionType
Тип действия со списком избранных инструментов.

| Name | Number | Description |
| ---- | ------ | ----------- |
| EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED | 0 | Тип не определён. |
| EDIT_FAVORITES_ACTION_TYPE_ADD | 1 | Добавить в список. |
| EDIT_FAVORITES_ACTION_TYPE_DEL | 2 | Удалить из списка. |
 <!-- range .Values -->



#### RealExchange
Реальная площадка исполнения расчётов.

| Name | Number | Description |
| ---- | ------ | ----------- |
| REAL_EXCHANGE_UNSPECIFIED | 0 | Тип не определён. |
| REAL_EXCHANGE_MOEX | 1 | Московская биржа. |
| REAL_EXCHANGE_RTS | 2 | Санкт-Петербургская биржа. |
| REAL_EXCHANGE_OTC | 3 | Внебиржевой инструмент. |
 <!-- range .Values -->

 <!-- range .HasEnums -->

 <!-- range .Enums -->
 <!-- range HasServices -->






## MarketDataService
Сервис получения биржевой информации:</br> **1**. свечи;</br> **2**. стаканы;</br> **3**. торговые статусы;</br> **4**. лента сделок.

###Методы сервиса


#### GetCandles
Метод запроса исторических свечей по инструменту.

- Тело запроса — [GetCandlesRequest](#getcandlesrequest)

- Тело ответа — [GetCandlesResponse](#getcandlesresponse)


#### GetLastPrices
Метод запроса последних цен по инструментам.

- Тело запроса — [GetLastPricesRequest](#getlastpricesrequest)

- Тело ответа — [GetLastPricesResponse](#getlastpricesresponse)


#### GetOrderBook
Метод получения стакана по инструменту.

- Тело запроса — [GetOrderBookRequest](#getorderbookrequest)

- Тело ответа — [GetOrderBookResponse](#getorderbookresponse)


#### GetTradingStatus
Метод запроса статуса торгов по инструментам.

- Тело запроса — [GetTradingStatusRequest](#gettradingstatusrequest)

- Тело ответа — [GetTradingStatusResponse](#gettradingstatusresponse)


#### GetLastTrades
Метод запроса последних обезличенных сделок по инструменту.

- Тело запроса — [GetLastTradesRequest](#getlasttradesrequest)

- Тело ответа — [GetLastTradesResponse](#getlasttradesresponse)

 <!-- range .Methods -->


## MarketDataStreamService


###Методы сервиса


#### MarketDataStream
Bi-directional стрим предоставления биржевой информации.

- Тело запроса — [MarketDataRequest](#marketdatarequest)

- Тело ответа — [MarketDataResponse](#marketdataresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### MarketDataRequest
Запрос подписки или отписки на определённые биржевые данные.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscribe_candles_request |  [SubscribeCandlesRequest](#subscribecandlesrequest) | Запрос подписки на свечи. |
| subscribe_order_book_request |  [SubscribeOrderBookRequest](#subscribeorderbookrequest) | Запрос подписки на стаканы. |
| subscribe_trades_request |  [SubscribeTradesRequest](#subscribetradesrequest) | Запрос подписки на ленту обезличенных сделок. |
| subscribe_info_request |  [SubscribeInfoRequest](#subscribeinforequest) | Запрос подписки на торговые статусы инструментов. |
| subscribe_last_price_request |  [SubscribeLastPriceRequest](#subscribelastpricerequest) | Запрос подписки на последние цены. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### MarketDataResponse
Пакет биржевой информации по подписке.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscribe_candles_response |  [SubscribeCandlesResponse](#subscribecandlesresponse) | Результат подписки на свечи. |
| subscribe_order_book_response |  [SubscribeOrderBookResponse](#subscribeorderbookresponse) | Результат подписки на стаканы. |
| subscribe_trades_response |  [SubscribeTradesResponse](#subscribetradesresponse) | Результат подписки на поток обезличенных сделок. |
| subscribe_info_response |  [SubscribeInfoResponse](#subscribeinforesponse) | Результат подписки на торговые статусы инструментов. |
| candle |  [Candle](#candle) | Свеча. |
| trade |  [Trade](#trade) | Сделки. |
| orderbook |  [OrderBook](#orderbook) | Стакан. |
| trading_status |  [TradingStatus](#tradingstatus) | Торговый статус. |
| ping |  [Ping](#ping) | Проверка активности стрима. |
| subscribe_last_price_response |  [SubscribeLastPriceResponse](#subscribelastpriceresponse) | Результат подписки на последние цены инструментов. |
| last_price |  [LastPrice](#lastprice) | Последняя цена. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeCandlesRequest
subscribeCandles | Изменения статуса подписки на свечи.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Изменение статуса подписки. |
| instruments | Массив объектов [CandleInstrument](#candleinstrument) | Массив инструментов для подписки на свечи. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CandleInstrument
Запрос изменения статус подписки на свечи.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| interval |  [SubscriptionInterval](#subscriptioninterval) | Интервал свечей. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeCandlesResponse
Результат изменения статус подписки на свечи.


| Field | Type | Description |
| ----- | ---- | ----------- |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). |
| candles_subscriptions | Массив объектов [CandleSubscription](#candlesubscription) | Массив статусов подписки на свечи. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CandleSubscription
Статус подписки на свечи.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| interval |  [SubscriptionInterval](#subscriptioninterval) | Интервал свечей. |
| subscription_status |  [SubscriptionStatus](#subscriptionstatus) | Статус подписки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeOrderBookRequest
Запрос на изменение статуса подписки на стаканы.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Изменение статуса подписки. |
| instruments | Массив объектов [OrderBookInstrument](#orderbookinstrument) | Массив инструментов для подписки на стаканы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OrderBookInstrument
Запрос подписки на стаканы.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| depth |  [int32](#int32) | Глубина стакана. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeOrderBookResponse
Результат изменения статуса подписки на стаканы.


| Field | Type | Description |
| ----- | ---- | ----------- |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). |
| order_book_subscriptions | Массив объектов [OrderBookSubscription](#orderbooksubscription) | Массив статусов подписки на стаканы. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OrderBookSubscription
Статус подписки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| depth |  [int32](#int32) | Глубина стакана. |
| subscription_status |  [SubscriptionStatus](#subscriptionstatus) | Статус подписки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeTradesRequest
Изменение статуса подписки на поток обезличенных сделок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Изменение статуса подписки. |
| instruments | Массив объектов [TradeInstrument](#tradeinstrument) | Массив инструментов для подписки на поток обезличенных сделок. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradeInstrument
Запрос подписки на поток обезличенных сделок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeTradesResponse
Результат изменения статуса подписки на поток обезличенных сделок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). |
| trade_subscriptions | Массив объектов [TradeSubscription](#tradesubscription) | Массив статусов подписки на поток сделок. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradeSubscription
Статус подписки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| subscription_status |  [SubscriptionStatus](#subscriptionstatus) | Статус подписки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeInfoRequest
Изменение статуса подписки на торговый статус инструмента.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Изменение статуса подписки. |
| instruments | Массив объектов [InfoInstrument](#infoinstrument) | Массив инструментов для подписки на торговый статус. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InfoInstrument
Запрос подписки на торговый статус.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeInfoResponse
Результат изменения статуса подписки на торговый статус.


| Field | Type | Description |
| ----- | ---- | ----------- |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). |
| info_subscriptions | Массив объектов [InfoSubscription](#infosubscription) | Массив статусов подписки на торговый статус. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InfoSubscription
Статус подписки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| subscription_status |  [SubscriptionStatus](#subscriptionstatus) | Статус подписки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeLastPriceRequest
Изменение статуса подписки на последнюю цену инструмента.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Изменение статуса подписки. |
| instruments | Массив объектов [LastPriceInstrument](#lastpriceinstrument) | Массив инструментов для подписки на последнюю цену. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### LastPriceInstrument
Запрос подписки на последнюю цену.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeLastPriceResponse
Результат изменения статуса подписки на последнюю цену.


| Field | Type | Description |
| ----- | ---- | ----------- |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). |
| last_price_subscriptions | Массив объектов [LastPriceSubscription](#lastpricesubscription) | Массив статусов подписки на последнюю цену. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### LastPriceSubscription
Статус подписки на последнюю цену.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| subscription_status |  [SubscriptionStatus](#subscriptionstatus) | Статус подписки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Candle
Пакет свечей в рамках стрима.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| interval |  [SubscriptionInterval](#subscriptioninterval) | Интервал свечи. |
| open |  [Quotation](#quotation) | Цена открытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| high |  [Quotation](#quotation) | Максимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| low |  [Quotation](#quotation) | Минимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| close |  [Quotation](#quotation) | Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| volume |  [int64](#int64) | Объём сделок в лотах. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала интервала свечи в часовом поясе UTC. |
| last_trade_ts |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время последней сделки, вошедшей в свечу в часовом поясе UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### OrderBook
Пакет стаканов в рамках стрима.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| depth |  [int32](#int32) | Глубина стакана. |
| is_consistent |  [bool](#bool) | Флаг консистентности стакана. **false** значит не все заявки попали в стакан по причинам сетевых задержек или нарушения порядка доставки. |
| bids | Массив объектов [Order](#order) | Массив предложений. |
| asks | Массив объектов [Order](#order) | Массив спроса. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время формирования стакана в часовом поясе UTC по времени биржи. |
| limit_up |  [Quotation](#quotation) | Верхний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| limit_down |  [Quotation](#quotation) | Нижний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Order
Массив предложений/спроса.


| Field | Type | Description |
| ----- | ---- | ----------- |
| price |  [Quotation](#quotation) | Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| quantity |  [int64](#int64) | Количество в лотах. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Trade
Информация о сделке.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| direction |  [TradeDirection](#tradedirection) | Направление сделки. |
| price |  [Quotation](#quotation) | Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| quantity |  [int64](#int64) | Количество лотов. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время сделки в часовом поясе UTC по времени биржи. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### TradingStatus
Пакет изменения торгового статуса.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Статус торговли инструментом. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время изменения торгового статуса в часовом поясе UTC. |
| limit_order_available_flag |  [bool](#bool) | Признак доступности выставления лимитной заявки по инструменту. |
| market_order_available_flag |  [bool](#bool) | Признак доступности выставления рыночной заявки по инструменту. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetCandlesRequest
Запрос исторических свечей.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода в часовом поясе UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода в часовом поясе UTC. |
| interval |  [CandleInterval](#candleinterval) | Интервал запрошенных свечей. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetCandlesResponse
Список свечей.


| Field | Type | Description |
| ----- | ---- | ----------- |
| candles | Массив объектов [HistoricCandle](#historiccandle) | Массив свечей. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### HistoricCandle
Информация о свече.


| Field | Type | Description |
| ----- | ---- | ----------- |
| open |  [Quotation](#quotation) | Цена открытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| high |  [Quotation](#quotation) | Максимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| low |  [Quotation](#quotation) | Минимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| close |  [Quotation](#quotation) | Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| volume |  [int64](#int64) | Объём торгов в лотах. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время свечи в часовом поясе UTC. |
| is_complete |  [bool](#bool) | Признак завершённости свечи. **false** значит, свеча за текущие интервал ещё сформирована не полностью. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetLastPricesRequest
Запрос получения последних цен.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi | Массив объектов [string](#string) | Массив figi-идентификаторов инструментов. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetLastPricesResponse
Список последних цен.


| Field | Type | Description |
| ----- | ---- | ----------- |
| last_prices | Массив объектов [LastPrice](#lastprice) | Массив последних цен. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### LastPrice
Информация о цене.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Идентификатор инструмента. |
| price |  [Quotation](#quotation) | Последняя цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время получения последней цены в часовом поясе UTC по времени биржи. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetOrderBookRequest
Запрос стакана.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| depth |  [int32](#int32) | Глубина стакана. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetOrderBookResponse
Информация о стакане.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| depth |  [int32](#int32) | Глубина стакана. |
| bids | Массив объектов [Order](#order) | Множество пар значений на покупку. |
| asks | Массив объектов [Order](#order) | Множество пар значений на продажу. |
| last_price |  [Quotation](#quotation) | Цена последней сделки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| close_price |  [Quotation](#quotation) | Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| limit_up |  [Quotation](#quotation) | Верхний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
| limit_down |  [Quotation](#quotation) | Нижний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTradingStatusRequest
Запрос получения торгового статуса.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Идентификатор инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTradingStatusResponse
Информация о торговом статусе.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| trading_status |  [SecurityTradingStatus](#securitytradingstatus) | Статус торговли инструментом. |
| limit_order_available_flag |  [bool](#bool) | Признак доступности выставления лимитной заявки по инструменту. |
| market_order_available_flag |  [bool](#bool) | Признак доступности выставления рыночной заявки по инструменту. |
| api_trade_available_flag |  [bool](#bool) | Признак доступности торгов через API. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetLastTradesRequest
Запрос последних обезличенных сделок по инструменту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода в часовом поясе UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода в часовом поясе UTC. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetLastTradesResponse
Последние обезличенные сделки по инструменту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| trades | Массив объектов [Trade](#trade) | Массив сделок |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->



### Enums


#### SubscriptionAction
Тип операции со списком подписок.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SUBSCRIPTION_ACTION_UNSPECIFIED | 0 | Статус подписки не определён. |
| SUBSCRIPTION_ACTION_SUBSCRIBE | 1 | Подписаться. |
| SUBSCRIPTION_ACTION_UNSUBSCRIBE | 2 | Отписаться. |
 <!-- range .Values -->



#### SubscriptionInterval
Интервал свечи.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SUBSCRIPTION_INTERVAL_UNSPECIFIED | 0 | Интервал свечи не определён. |
| SUBSCRIPTION_INTERVAL_ONE_MINUTE | 1 | Минутные свечи. |
| SUBSCRIPTION_INTERVAL_FIVE_MINUTES | 2 | Пятиминутные свечи. |
 <!-- range .Values -->



#### SubscriptionStatus
Результат подписки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SUBSCRIPTION_STATUS_UNSPECIFIED | 0 | Статус подписки не определён. |
| SUBSCRIPTION_STATUS_SUCCESS | 1 | Успешно. |
| SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND | 2 | Инструмент не найден. |
| SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID | 3 | Некорректный статус подписки, список возможных значений: [SubscriptionAction](https://tinkoff.github.io/investAPI/marketdata#subscriptionaction). |
| SUBSCRIPTION_STATUS_DEPTH_IS_INVALID | 4 | Некорректная глубина стакана, доступные значения: 1, 10, 20, 30, 40, 50. |
| SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID | 5 | Некорректный интервал свечей, список возможных значений: [SubscriptionInterval](https://tinkoff.github.io/investAPI/marketdata#subscriptioninterval). |
| SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED | 6 | Превышен лимит подписок в рамках стрима, подробнее: [Лимитная политика](https://tinkoff.github.io/investAPI/limits/). |
| SUBSCRIPTION_STATUS_INTERNAL_ERROR | 7 | Внутренняя ошибка сервиса. |
 <!-- range .Values -->



#### TradeDirection
Направление сделки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| TRADE_DIRECTION_UNSPECIFIED | 0 | Направление сделки не определено. |
| TRADE_DIRECTION_BUY | 1 | Покупка. |
| TRADE_DIRECTION_SELL | 2 | Продажа. |
 <!-- range .Values -->



#### CandleInterval
Интервал свечей.

| Name | Number | Description |
| ---- | ------ | ----------- |
| CANDLE_INTERVAL_UNSPECIFIED | 0 | Интервал не определён. |
| CANDLE_INTERVAL_1_MIN | 1 | 1 минута. |
| CANDLE_INTERVAL_5_MIN | 2 | 5 минут. |
| CANDLE_INTERVAL_15_MIN | 3 | 15 минут. |
| CANDLE_INTERVAL_HOUR | 4 | 1 час. |
| CANDLE_INTERVAL_DAY | 5 | 1 день. |
 <!-- range .Values -->

 <!-- range .HasEnums -->

 <!-- range .Enums -->
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
| quantity |  [int64](#int64) | Количество лотов инструмента. |
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
| expected_yield |  [Quotation](#quotation) | Текущая рассчитанная относительная доходность позиции, в %. |
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
| OPERATION_TYPE_INPUT_SECURITIES | 17 | Завод ценных бумаг из другого депозитария. |
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
| price |  [Quotation](#quotation) | Цена одного инструмента. Для получения стоимости лота требуется умножить на лотность инструмента. |
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
 <!-- range .Values -->



#### StopOrderExpirationType
Тип экспирации стоп-заявке.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED | 0 | Значение не указано. |
| STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL | 1 | Действительно до отмены. |
| STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE | 2 | Действительно до даты снятия. |
 <!-- range .Values -->



#### StopOrderType
Тип стоп-заявки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STOP_ORDER_TYPE_UNSPECIFIED | 0 | Значение не указано. |
| STOP_ORDER_TYPE_TAKE_PROFIT | 1 | Take-profit заявка. |
| STOP_ORDER_TYPE_STOP_LOSS | 2 | Stop-loss заявка. |
| STOP_ORDER_TYPE_STOP_LIMIT | 3 | Stop-limit заявка. |
 <!-- range .Values -->

 <!-- range .HasEnums -->

 <!-- range .Enums -->
 <!-- range HasServices -->






## UsersService
Сервис предназначен для получения: </br> **1**.
списка счетов пользователя; </br> **2**. маржинальных показателе по счёту.

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
| qualified_for_work_with | Массив объектов [string](#string) | Набор требующих тестирования инструментов и возможностей, с которыми может работать пользователь. |
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

