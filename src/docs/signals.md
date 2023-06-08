





## SignalService


###Методы сервиса


#### GetStrategies


- Тело запроса — [GetStrategiesRequest](#getstrategiesrequest)

- Тело ответа — [GetStrategiesResponse](#getstrategiesresponse)


#### GetSignals


- Тело запроса — [GetSignalsRequest](#getsignalsrequest)

- Тело ответа — [GetSignalsResponse](#getsignalsresponse)

 <!-- range .Methods -->
 <!-- range .Services -->

###Сообщения методов



#### GetStrategiesRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| strategy_id |  [string](#string) | Идентификатор стратегии |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetStrategiesResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| strategies | Массив объектов [Strategy](#strategy) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Strategy



| Field | Type | Description |
| ----- | ---- | ----------- |
| strategy_id |  [string](#string) | Идентификатор стратегии |
| strategy_name |  [string](#string) | Название стратегии |
| strategy_description |  [string](#string) | Описание стратегии |
| strategy_url |  [string](#string) | Ссылка на страницу с описанием стратегии |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetSignalsRequest



| Field | Type | Description |
| ----- | ---- | ----------- |
| strategy_id |  [string](#string) | Идентификатор стратегии |
| from |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата начала запрашиваемого интервала в часовом поясе UTC. |
| instrument_uid |  [string](#string) | Идентификатор  бумаги |
| to |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Дата конца запрашиваемого интервала  в часовом поясе UTC. |
| archive |  [bool](#bool) | Только архивные сигналы, по умолчанию false |
 <!-- end Fields -->
 <!-- end HasFields -->


#### GetSignalsResponse



| Field | Type | Description |
| ----- | ---- | ----------- |
| signals | Массив объектов [Signal](#signal) |  |
 <!-- end Fields -->
 <!-- end HasFields -->


#### Signal



| Field | Type | Description |
| ----- | ---- | ----------- |
| signal_id |  [string](#string) | идентификатор сигнала |
| strategy_id |  [string](#string) | Идентификатор стратегии |
| instrument_uid |  [string](#string) | Идентификатор  бумаги |
| create_dt |  [google.protobuf.Timestamp](#googleprotobuftimestamp) | Датавремя создания сигнала  в часовом поясе UTC. |
| lifetime |  [int64](#int64) | Срок действия сигнала, секунд |
| direction |  [string](#string) | "buy" / "sell" |
| price |  [float](#float) | Цена бумаги на момент формирования сигнала |
| profit |  [float](#float) | Расчетная прибыль сигнала |
| info |  [string](#string) | Произвольная информация о сигнале |
 <!-- end Fields -->
 <!-- end HasFields -->
 <!-- end messages -->

### Enums
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

