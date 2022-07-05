###Что такое Figi инструмента? 

**FIGI**(*англ.:* Financial Instrument Global Identifier) — глобальный идентификатор
финансового инструмента. Представляет собой 12-символьный код из латинских букв и цифр,
определяется как идентификатор ценной бумаги на торговой площадке (бирже), которая
является некоторым *"источником цен"*.

В контексте работы с TINKOFF INVEST API основным идентификатором инструмента является Figi.
Нужно понимать, что не все инструменты, доступные в Тинькофф Инвестициях, имеют общепринятый
Figi. Поэтому не гарантируется уникальность инструментов с другими источниками. Узнать актуальный
Figi-идентификатор инструмента можно при помощи методов [сервиса инструментов](/investAPI/instruments/).

В будущем планируется переход на использование абстрактного идентификатора инструмента внутри Тинькофф
Инвестиций (uid), чтобы избежать возможной путаницы. 

###Как мне найти Figi инструмента по его названию, тикеру или isin? 

Методы поиска инструментов по идентификатору ([BondBy](/investAPI/instruments#bondby), 
[CurrencyBy](/investAPI/instruments#currencyby), [EtfBy](/investAPI/instruments#etfby), 
[FutureBy](/instruments#futureby), [ShareBy](/investAPI/instruments#shareby)) позволяют получить 
информацию об инструменте зная его Figi или связку ticker + class_code. Если же эти идентификаторы
вам неизвестны, вы можете получить полный список инструментов определённого типа методами запроса
списков инструментов ([Bonds](/investAPI/instruments#bonds),
[Currencies](/investAPI/instruments#currencies), [Etfs](/investAPI/instruments#etfs),
[Futures](/instruments#futures), [Shares](/investAPI/instruments#shares)) и выполнить поиск по известным
параметрам самостоятельно. Сделать это можно в коде робота или при помощи любого доступного gRPC-клиента,
например, Kreya. Инструкция по настройке Kreya доступна по [ссылке](/investAPI/grpc#kreya).

###Что такое class_code и где его найти? 

Сlass_code — это технический параметр "Режим торгов", используемый для обозначения секции биржи, на
которой торгуется данный инструмент. Узнать его можно, получив детали по инструменту методами сервиса
инструментов.

###Как понять, что бумага доступна для торговли через TINKOFF INVEST API?

Чтобы получить все доступные для торговли инструменты определённого типа можно воспользоваться
соответствующими методами, передав параметр **instrument_status** = ***INSTRUMENT_STATUS_BASE***: 
* [Bonds](/investAPI/instruments#bonds)
* [Currencies](/investAPI/instruments#currencies)
* [Etfs](/investAPI/instruments#etfs)
* [Futures](/instruments#futures)
* [Shares](/investAPI/instruments#shares)

Если же нет необходимости получать полный список инструментов, можно использовать параметр
**api_trade_available_flag** из ответа метода получения инструмента по его идентификатору 
([BondBy](/investAPI/instruments#bondby),
[CurrencyBy](/investAPI/instruments#currencyby), [EtfBy](/investAPI/instruments#etfby),
[FutureBy](/instruments#futureby), [ShareBy](/investAPI/instruments#shareby)). Этот флаг
отвечает за доступность инструмента для торгов через TINKOFF INVEST API.

Кроме того следует учитывать расписание работы бирж и торговый статус инструмента. Подробнее:
[Торговые статусы инструментов и расписание торгов](/investAPI/faq_trading_status/).

###Что такое накопленный купонный доход облигации и как его узнать?

**Купон, или купонный доход** — это процентные выплаты держателям облигаций со стороны эмитента, то есть
компании или госоргана, выпустивших этот тип ценных бумаг.
Даты выплат процентов по облигациям и размер купона известны заранее. Размер купона задается в процентах от
номинала — то есть от цены облигации при ее выпуске. Величина купона может быть фиксированной или плавающей —
то есть привязанной к инфляции, ключевой ставке Центробанка России или другим ориентирам. Иногда у облигации
может вовсе не быть купона. [Купонный доход по облигациям](https://www.tinkoff.ru/invest/account/help/get-profit/coupon-yield).

Получить календарь купонных выплат можно методом [GetAccruedInterests](/investAPI/instruments#getaccruedinterests).

###Как узнать стоимость шага цены (min_price_increment_amount) фьючерса?

Данный параметр может изменяться довольно часто в течении дня, поэтому для его получения существует 
отдельный метод сервиса инструментов [GetFuturesMargin](/investAPI/instruments#getfuturesmargin).

###Как узнать на какой бирже исполняются расчеты по инструменту? 

Для определения биржи на которой исполняются расчеты по финансовому инструменту в TINKOFF INVEST API добавлен параметр [real_exchange](/investAPI/instruments/#realexchange).

Список методов возвращающих в ответе биржу на которой исполняются расчеты:

* [GetInstrumentBy](/investAPI/instruments/#getinstrumentby) - Метод получения основной информации об инструменте.
* [GetBondBy](/investAPI/instruments/#bondby) - Метод получения облигации по её идентификатору.
* [GetBonds](/investAPI/instruments/#bonds) - Метод получения списка облигаций.
* [GetShareBy](/investAPI/instruments/#shareby) - Метод получения акции по её идентификатору.
* [GetShares](/investAPI/instruments/#shares) - Метод получения списка акций.
* [GetEtfBy](/investAPI/instruments/#etfby) - Метод получения инвестиционного фонда по его идентификатору.
* [GetEtfs](/investAPI/instruments/#etfs) - Метод получения списка инвестиционных фондов.
* [GetFutureBy](/investAPI/instruments/#futureby) - Метод получения фьючерса по его идентификатору.
* [GetFutures](/investAPI/instruments/#futures) - Метод получения списка фьючерсов.
* [GetCurrencyBy](/investAPI/instruments/#currencyby) - Метод получения валюты по её идентификатору.
* [GetCurrencies](/investAPI/instruments/#currencies) - Метод получения списка валют.


###Как найти базовый актив фьючерса?

В методах [GetFutureBy](/investAPI/instruments/#futureby) и [GetFutures](/investAPI/instruments/#futures) доступен параметр `basic_asset_position_uid`,
с помощью которого Вы можете найти позицию базового актива фьючерса используя метод [FindInstrument](/investAPI/instruments/#findinstrument)