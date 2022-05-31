

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


#### GetCountries
Метод получения списка стран.

- Тело запроса — [GetCountriesRequest](#getcountriesrequest)

- Тело ответа — [GetCountriesResponse](#getcountriesresponse)


#### FindInstrument
Метод поиска инструмента.

- Тело запроса — [FindInstrumentRequest](#findinstrumentrequest)

- Тело ответа — [FindInstrumentResponse](#findinstrumentresponse)


#### GetBrands
Метод получения списка брендов.

- Тело запроса — [GetBrandsRequest](#getbrandsrequest)

- Тело ответа — [GetBrandsResponse](#getbrandsresponse)


#### GetBrandBy
Метод получения бренда по его идентификатору.

- Тело запроса — [GetBrandRequest](#getbrandrequest)

- Тело ответа — [Brand](#brand)

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


#### GetCountriesRequest
Запрос справочника стран.

 <!-- end HasFields -->


#### GetCountriesResponse
Справочник стран.


| Field | Type | Description |
| ----- | ---- | ----------- |
| countries | Массив объектов [CountryResponse](#countryresponse) | Массив стран. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CountryResponse
Данные о стране.


| Field | Type | Description |
| ----- | ---- | ----------- |
| alfa_two |  [string](#string) | Двухбуквенный код страны. |
| alfa_three |  [string](#string) | Трёхбуквенный код страны. |
| name |  [string](#string) | Наименование страны. |
| name_brief |  [string](#string) | Краткое наименование страны. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### FindInstrumentRequest
Запрос на поиск инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| query |  [string](#string) | Строка поиска. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### FindInstrumentResponse
Результат поиска инструментов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [InstrumentShort](#instrumentshort) | Массив инструментов, удовлетворяющих условиям поиска. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentShort
Краткая информация об инструменте.


| Field | Type | Description |
| ----- | ---- | ----------- |
| isin |  [string](#string) | Isin инструмента. |
| figi |  [string](#string) | Figi инструмента. |
| ticker |  [string](#string) | Ticker инструмента. |
| class_code |  [string](#string) | ClassCode инструмента. |
| instrument_type |  [string](#string) | Тип инструмента. |
| name |  [string](#string) | Название инструмента. |
| uid |  [string](#string) | Уникальный идентификатор инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBrandsRequest
Запрос списка брендов.

 <!-- end HasFields -->


#### GetBrandRequest
Запрос бренда.


| Field | Type | Description |
| ----- | ---- | ----------- |
| id |  [string](#string) | Uid-идентификатор бренда. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetBrandsResponse
Список брендов.


| Field | Type | Description |
| ----- | ---- | ----------- |
| brands | Массив объектов [Brand](#brand) | Массив брендов. |
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




#### InstrumentIdType
Тип идентификатора инструмента. Подробнее об идентификации инструментов: [Идентификация инструментов](https://tinkoff.github.io/investAPI/faq_identification/)

| Name | Number | Description |
| ---- | ------ | ----------- |
| INSTRUMENT_ID_UNSPECIFIED | 0 | Значение не определено. |
| INSTRUMENT_ID_TYPE_FIGI | 1 | Figi. |
| INSTRUMENT_ID_TYPE_TICKER | 2 | Ticker. |
| INSTRUMENT_ID_TYPE_UID | 3 | Уникальный идентификатор. |




#### InstrumentStatus
Статус запрашиваемых инструментов.

| Name | Number | Description |
| ---- | ------ | ----------- |
| INSTRUMENT_STATUS_UNSPECIFIED | 0 | Значение не определено. |
| INSTRUMENT_STATUS_BASE | 1 | Базовый список инструментов (по умолчанию). Инструменты доступные для торговли через TINKOFF INVEST API. |
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




#### AssetType
Тип актива.

| Name | Number | Description |
| ---- | ------ | ----------- |
| ASSET_TYPE_UNSPECIFIED | 0 | Тип не определён. |
| ASSET_TYPE_CURRENCY | 1 | Валюта. |
| ASSET_TYPE_COMMODITY | 2 | Товар. |
| ASSET_TYPE_INDEX | 3 | Индекс. |
| ASSET_TYPE_SECURITY | 4 | Ценная бумага. |




#### StructuredProductType
Тип структурной ноты.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SP_TYPE_UNSPECIFIED | 0 | Тип не определён. |
| SP_TYPE_DELIVERABLE | 1 | Поставочный. |
| SP_TYPE_NON_DELIVERABLE | 2 | Беспоставочный. |




#### EditFavoritesActionType
Тип действия со списком избранных инструментов.

| Name | Number | Description |
| ---- | ------ | ----------- |
| EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED | 0 | Тип не определён. |
| EDIT_FAVORITES_ACTION_TYPE_ADD | 1 | Добавить в список. |
| EDIT_FAVORITES_ACTION_TYPE_DEL | 2 | Удалить из списка. |




#### RealExchange
Реальная площадка исполнения расчётов.

| Name | Number | Description |
| ---- | ------ | ----------- |
| REAL_EXCHANGE_UNSPECIFIED | 0 | Тип не определён. |
| REAL_EXCHANGE_MOEX | 1 | Московская биржа. |
| REAL_EXCHANGE_RTS | 2 | Санкт-Петербургская биржа. |
| REAL_EXCHANGE_OTC | 3 | Внебиржевой инструмент. |


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

