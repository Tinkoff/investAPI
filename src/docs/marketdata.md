





## MarketDataService
Сервис получения биржевой информации:</br> **1**. свечи;</br> **2**. стаканы;</br> **3**. торговые статусы;</br> **4**. лента сделок.

###Методы сервиса


#### GetCandles
Метод запроса исторических свечей по инструменту.

- Тело запроса — [GetCandlesRequest](#getcandlesrequest)

- Тело ответа — [GetCandlesResponse](#getcandlesresponse)


#### GetLastPrices
Метод запроса цен последних сделок по инструментам.

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


#### GetTradingStatuses
Метод запроса статуса торгов по инструментам.

- Тело запроса — [GetTradingStatusesRequest](#gettradingstatusesrequest)

- Тело ответа — [GetTradingStatusesResponse](#gettradingstatusesresponse)


#### GetLastTrades
Метод запроса обезличенных сделок за последний час.

- Тело запроса — [GetLastTradesRequest](#getlasttradesrequest)

- Тело ответа — [GetLastTradesResponse](#getlasttradesresponse)


#### GetClosePrices
Метод запроса цен закрытия торговой сессии по инструментам.

- Тело запроса — [GetClosePricesRequest](#getclosepricesrequest)

- Тело ответа — [GetClosePricesResponse](#getclosepricesresponse)

 <!-- range .Methods -->


## MarketDataStreamService


###Методы сервиса


#### MarketDataStream
Bi-directional стрим предоставления биржевой информации.

- Тело запроса — [MarketDataRequest](#marketdatarequest)

- Тело ответа — [MarketDataResponse](#marketdataresponse)


#### MarketDataServerSideStream
Server-side стрим предоставления биржевой информации.

- Тело запроса — [MarketDataServerSideStreamRequest](#marketdataserversidestreamrequest)

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
| subscribe_last_price_request |  [SubscribeLastPriceRequest](#subscribelastpricerequest) | Запрос подписки на цены последних сделок. |
| get_my_subscriptions |  [GetMySubscriptions](#getmysubscriptions) | Запрос своих подписок. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### MarketDataServerSideStreamRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| subscribe_candles_request |  [SubscribeCandlesRequest](#subscribecandlesrequest) | Запрос подписки на свечи. |
| subscribe_order_book_request |  [SubscribeOrderBookRequest](#subscribeorderbookrequest) | Запрос подписки на стаканы. |
| subscribe_trades_request |  [SubscribeTradesRequest](#subscribetradesrequest) | Запрос подписки на ленту обезличенных сделок. |
| subscribe_info_request |  [SubscribeInfoRequest](#subscribeinforequest) | Запрос подписки на торговые статусы инструментов. |
| subscribe_last_price_request |  [SubscribeLastPriceRequest](#subscribelastpricerequest) | Запрос подписки на цены последних сделок. |
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
| subscribe_last_price_response |  [SubscribeLastPriceResponse](#subscribelastpriceresponse) | Результат подписки на цены последние сделок по инструментам. |
| last_price |  [LastPrice](#lastprice) | Цена последней сделки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeCandlesRequest
subscribeCandles | Изменения статуса подписки на свечи.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Изменение статуса подписки. |
| instruments | Массив объектов [CandleInstrument](#candleinstrument) | Массив инструментов для подписки на свечи. |
| waiting_close |  [bool](#bool) | Флаг ожидания закрытия временного интервала для отправки свечи, применяется только для минутных свечей. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### CandleInstrument
Запрос изменения статус подписки на свечи.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id. |
| interval |  [SubscriptionInterval](#subscriptioninterval) | Интервал свечей. |
| instrument_id |  [string](#string) | Идентификатор инструмента, принимает значение figi или instrument_uid |
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
| instrument_uid |  [string](#string) | Uid инструмента |
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
| figi |  [string](#string) | Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id. |
| depth |  [int32](#int32) | Глубина стакана. |
| instrument_id |  [string](#string) | Идентификатор инструмента, принимает значение figi или instrument_uid |
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
| instrument_uid |  [string](#string) | Uid инструмента |
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
| figi |  [string](#string) | Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id. |
| instrument_id |  [string](#string) | Идентификатор инструмента, принимает значение figi или instrument_uid |
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
| instrument_uid |  [string](#string) | Uid инструмента |
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
| figi |  [string](#string) | Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id. |
| instrument_id |  [string](#string) | Идентификатор инструмента, принимает значение figi или instrument_uid |
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
| instrument_uid |  [string](#string) | Uid инструмента |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeLastPriceRequest
Изменение статуса подписки на цену последней сделки по инструменту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| subscription_action |  [SubscriptionAction](#subscriptionaction) | Изменение статуса подписки. |
| instruments | Массив объектов [LastPriceInstrument](#lastpriceinstrument) | Массив инструментов для подписки на цену последней сделки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### LastPriceInstrument
Запрос подписки на последнюю цену.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id. |
| instrument_id |  [string](#string) | Идентификатор инструмента, принимает значение figi или instrument_uid |
 <!-- end Fields -->
 <!-- end HasFields -->


#### SubscribeLastPriceResponse
Результат изменения статуса подписки на цену последней сделки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| tracking_id |  [string](#string) | Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). |
| last_price_subscriptions | Массив объектов [LastPriceSubscription](#lastpricesubscription) | Массив статусов подписки на цену последней сделки. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### LastPriceSubscription
Статус подписки на цену последней сделки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| subscription_status |  [SubscriptionStatus](#subscriptionstatus) | Статус подписки. |
| instrument_uid |  [string](#string) | Uid инструмента |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Candle
Пакет свечей в рамках стрима.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| interval |  [SubscriptionInterval](#subscriptioninterval) | Интервал свечи. |
| open |  [Quotation](#quotation) | Цена открытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| high |  [Quotation](#quotation) | Максимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| low |  [Quotation](#quotation) | Минимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| close |  [Quotation](#quotation) | Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| volume |  [int64](#int64) | Объём сделок в лотах. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время начала интервала свечи в часовом поясе UTC. |
| last_trade_ts |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время последней сделки, вошедшей в свечу в часовом поясе UTC. |
| instrument_uid |  [string](#string) | Uid инструмента |
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
| limit_up |  [Quotation](#quotation) | Верхний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| limit_down |  [Quotation](#quotation) | Нижний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| instrument_uid |  [string](#string) | Uid инструмента |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Order
Массив предложений/спроса.


| Field | Type | Description |
| ----- | ---- | ----------- |
| price |  [Quotation](#quotation) | Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| quantity |  [int64](#int64) | Количество в лотах. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Trade
Информация о сделке.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi-идентификатор инструмента. |
| direction |  [TradeDirection](#tradedirection) | Направление сделки. |
| price |  [Quotation](#quotation) | Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| quantity |  [int64](#int64) | Количество лотов. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время сделки в часовом поясе UTC по времени биржи. |
| instrument_uid |  [string](#string) | Uid инструмента |
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
| instrument_uid |  [string](#string) | Uid инструмента |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetCandlesRequest
Запрос исторических свечей.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода в часовом поясе UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода в часовом поясе UTC. |
| interval |  [CandleInterval](#candleinterval) | Интервал запрошенных свечей. |
| instrument_id |  [string](#string) | Идентификатор инструмента, принимает значение figi или instrument_uid. |
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
| open |  [Quotation](#quotation) | Цена открытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| high |  [Quotation](#quotation) | Максимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| low |  [Quotation](#quotation) | Минимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| close |  [Quotation](#quotation) | Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| volume |  [int64](#int64) | Объём торгов в лотах. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время свечи в часовом поясе UTC. |
| is_complete |  [bool](#bool) | Признак завершённости свечи. **false** значит, свеча за текущие интервал ещё сформирована не полностью. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetLastPricesRequest
Запрос получения цен последних сделок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi | Массив объектов [string](#string) | Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id. |
| instrument_id | Массив объектов [string](#string) | Массив идентификаторов инструмента, принимает значения figi или instrument_uid. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetLastPricesResponse
Список цен последних сделок.


| Field | Type | Description |
| ----- | ---- | ----------- |
| last_prices | Массив объектов [LastPrice](#lastprice) | Массив цен последних сделок. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### LastPrice
Информация о цене последней сделки.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi инструмента. |
| price |  [Quotation](#quotation) | Цена последней сделки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время получения последней цены в часовом поясе UTC по времени биржи. |
| instrument_uid |  [string](#string) | Uid инструмента |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetOrderBookRequest
Запрос стакана.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id. |
| depth |  [int32](#int32) | Глубина стакана. |
| instrument_id |  [string](#string) | Идентификатор инструмента, принимает значение figi или instrument_uid. |
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
| last_price |  [Quotation](#quotation) | Цена последней сделки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| close_price |  [Quotation](#quotation) | Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| limit_up |  [Quotation](#quotation) | Верхний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| limit_down |  [Quotation](#quotation) | Нижний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) |
| last_price_ts |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время получения цены последней сделки. |
| close_price_ts |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время получения цены закрытия. |
| orderbook_ts |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Время формирования стакана на бирже. |
| instrument_uid |  [string](#string) | Uid инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTradingStatusRequest
Запрос получения торгового статуса.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id. |
| instrument_id |  [string](#string) | Идентификатор инструмента, принимает значение figi или instrument_uid. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTradingStatusesRequest
Запрос получения торгового статуса.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_id | Массив объектов [string](#string) | Идентификатор инструмента, принимает значение figi или instrument_uid |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetTradingStatusesResponse
Информация о торговом статусе.


| Field | Type | Description |
| ----- | ---- | ----------- |
| trading_statuses | Массив объектов [GetTradingStatusResponse](#gettradingstatusresponse) | Массив информации о торговых статусах |
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
| instrument_uid |  [string](#string) | Uid инструмента. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetLastTradesRequest
Запрос обезличенных сделок за последний час.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id. |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Начало запрашиваемого периода в часовом поясе UTC. |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Окончание запрашиваемого периода в часовом поясе UTC. |
| instrument_id |  [string](#string) | Идентификатор инструмента, принимает значение figi или instrument_uid. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetLastTradesResponse
Обезличенных сделок за последний час.


| Field | Type | Description |
| ----- | ---- | ----------- |
| trades | Массив объектов [Trade](#trade) | Массив сделок. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetMySubscriptions
Запрос активных подписок.

 <!-- end HasFields -->


#### GetClosePricesRequest
Запрос цен закрытия торговой сессии по инструментам.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instruments | Массив объектов [InstrumentClosePriceRequest](#instrumentclosepricerequest) | Массив по инструментам. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentClosePriceRequest
Запрос цен закрытия торговой сессии по инструменту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| instrument_id |  [string](#string) | Идентификатор инструмента, принимает значение figi или instrument_uid. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetClosePricesResponse
Цены закрытия торговой сессии по инструментам.


| Field | Type | Description |
| ----- | ---- | ----------- |
| close_prices | Массив объектов [InstrumentClosePriceResponse](#instrumentclosepriceresponse) | Массив по инструментам. |
 <!-- end Fields -->
 <!-- end HasFields -->


#### InstrumentClosePriceResponse
Цена закрытия торговой сессии по инструменту.


| Field | Type | Description |
| ----- | ---- | ----------- |
| figi |  [string](#string) | Figi инструмента. |
| instrument_uid |  [string](#string) | Uid инструмента. |
| price |  [Quotation](#quotation) | Цена закрытия торговой сессии. |
| time |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата совершения торгов. |
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




#### SubscriptionInterval
Интервал свечи.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SUBSCRIPTION_INTERVAL_UNSPECIFIED | 0 | Интервал свечи не определён. |
| SUBSCRIPTION_INTERVAL_ONE_MINUTE | 1 | Минутные свечи. |
| SUBSCRIPTION_INTERVAL_FIVE_MINUTES | 2 | Пятиминутные свечи. |




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
| SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED | 6 | Превышен лимит на общее количество подписок в рамках стрима, подробнее: [Лимитная политика](https://tinkoff.github.io/investAPI/limits/). |
| SUBSCRIPTION_STATUS_INTERNAL_ERROR | 7 | Внутренняя ошибка сервиса. |
| SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS | 8 | Превышен лимит на количество запросов на подписки в течение установленного отрезка времени |




#### TradeDirection
Направление сделки.

| Name | Number | Description |
| ---- | ------ | ----------- |
| TRADE_DIRECTION_UNSPECIFIED | 0 | Направление сделки не определено. |
| TRADE_DIRECTION_BUY | 1 | Покупка. |
| TRADE_DIRECTION_SELL | 2 | Продажа. |




#### CandleInterval
Интервал свечей.

| Name | Number | Description |
| ---- | ------ | ----------- |
| CANDLE_INTERVAL_UNSPECIFIED | 0 | Интервал не определён. |
| CANDLE_INTERVAL_1_MIN | 1 | от 1 минуты до 1 дня. |
| CANDLE_INTERVAL_5_MIN | 2 | от 5 минут до 1 дня. |
| CANDLE_INTERVAL_15_MIN | 3 | от 15 минут до 1 дня. |
| CANDLE_INTERVAL_HOUR | 4 | от 1 часа до 1 недели. |
| CANDLE_INTERVAL_DAY | 5 | от 1 дня до 1 года. |
| CANDLE_INTERVAL_2_MIN | 6 | от 2 минут до 1 дня. |
| CANDLE_INTERVAL_3_MIN | 7 | от 3 минут до 1 дня. |
| CANDLE_INTERVAL_10_MIN | 8 | от 10 минут до 1 дня. |
| CANDLE_INTERVAL_30_MIN | 9 | от 30 минут до 2 дней. |
| CANDLE_INTERVAL_2_HOUR | 10 | от 2 часов до 1 месяца. |
| CANDLE_INTERVAL_4_HOUR | 11 | от 4 часов до 1 месяца. |
| CANDLE_INTERVAL_WEEK | 12 | от 1 недели до 2 лет. |
| CANDLE_INTERVAL_MONTH | 13 | от 1 месяца до 10 лет. |


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

