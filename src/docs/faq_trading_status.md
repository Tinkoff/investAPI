#Торговые статусы инструментов и расписание торгов

Получить актуальный торговый статус инструмента можно методом [GetTradingStatus](/investAPI/marketdata#gettradingstatus)
или подпиской [Info](/investAPI/marketdata#subscribeinforequest) в рамках 
[stream-соединения сервиса котировок](/investAPI/marketdata#marketdatastream). 

В зависимости от торгового статуса определяется возможность выставления торговых поручений определённого типа: 

|Наименование статуса торговли|Описание статуса|Возможность выставлять лимитные заявки|Возможность выставлять рыночные заявки|
|:-----|:-----|:-----|:-----|
| SECURITY_TRADING_STATUS_UNSPECIFIED                      | Торговый статус не определён                                | Нет | Нет |
| SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING        | Недоступен для торгов                                       | Нет | Нет |
| SECURITY_TRADING_STATUS_OPENING_PERIOD                   | Период открытия торгов                                      | Да  | Нет |
| SECURITY_TRADING_STATUS_CLOSING_PERIOD                   | Период закрытия торгов                                      | Да  | Нет |
| SECURITY_TRADING_STATUS_BREAK_IN_TRADING                 | Перерыв в торговле                                          | Нет | Нет |
| SECURITY_TRADING_STATUS_NORMAL_TRADING                   | Нормальная торговля                                         | Да  | Да  |
| SECURITY_TRADING_STATUS_CLOSING_AUCTION                  | Аукцион закрытия                                            | Да  | Нет |
| SECURITY_TRADING_STATUS_DARK_POOL_AUCTION                | Аукцион крупных пакетов                                     | Нет | Да  |
| SECURITY_TRADING_STATUS_DISCRETE_AUCTION                 | Дискретный аукцион                                          | Да  | Нет |
| SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD           | Аукцион открытия                                            | Да  | Нет |
| SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE | Период торгов по цене аукциона закрытия                     | Да  | Нет |
| SECURITY_TRADING_STATUS_SESSION_ASSIGNED                 | Сессия назначена                                            | Да  | Нет |
| SECURITY_TRADING_STATUS_SESSION_CLOSE                    | Сессия закрыта                                              | Да  | Нет |
| SECURITY_TRADING_STATUS_SESSION_OPEN                     | Сессия открыта                                              | Да  | Нет |
| SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING            | Доступна торговля в режиме внутренней ликвидности брокера   | Нет | Да  |
| SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING          | Перерыв торговли в режиме внутренней ликвидности брокера    | Нет | Нет |
| SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING | Недоступна торговля в режиме внутренней ликвидности брокера | Нет | Нет |

##Описание торговых статусов

SECURITY_TRADING_STATUS_UNSPECIFIED — служебное значение торгового статуса. Устанавливается, если от биржи пришёл
неизвестный торговый статус инструмента.

SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING — торговля инструментом недоступна. Данный статус возвращается, когда
торги по инструменту недоступны. Например, при закрытии торговой площадки.

SECURITY_TRADING_STATUS_OPENING_PERIOD — период открытия торгов (премаркет). По инструменту происходит
аукцион открытия. Это особый режим торгов, когда биржа собирает заявки на покупку/продажу в биржевой стакан. По 
результатам аукциона открытия при помощи специального алгоритма биржи определяется цена открытия торгов основной сессии.
В данном режиме торгов доступно выставление только лимитных поручений.

SECURITY_TRADING_STATUS_CLOSING_PERIOD — период закрытия торгов (постмаркет). По инструменту происходит аукцион закрытия.
Это режим торгов, когда биржа собирается заявки для определения цены закрытия сессии. Доступны только лимитные заявки.

SECURITY_TRADING_STATUS_BREAK_IN_TRADING — перерыв в торговле инструментов. Перерыв в торгах по конкретным или всем 
инструментам биржа может устанавливать по разным причинам. Например, технические сбои или высокая волатильность на рынке.
В данном статусе недоступно выставление поручений по инструменту. 

SECURITY_TRADING_STATUS_NORMAL_TRADING — нормальный режим торгов по инструменту. В данном режиме доступны все виды 
поручений.

SECURITY_TRADING_STATUS_CLOSING_AUCTION — то же, что и SECURITY_TRADING_STATUS_CLOSING_PERIOD.

SECURITY_TRADING_STATUS_DARK_POOL_AUCTION — режим торгов крупными пакетами (Dark Pool). Это режим торгов со скрытым 
стаканом для заключения крупных сделок. Торги проходят в формате непрерывного заключения сделок (при наличии встречных 
заявок) по Цене аукциона. Цена аукциона определяется перед его началом на основе заявок в Режиме основных торгов. В 
данном режиме доступно выставление только рыночных торговых поручений с ограничением на минимальный объём заявки.

SECURITY_TRADING_STATUS_DISCRETE_AUCTION — дискретный аукцион. Особый режим, который применяется вместо перерыва
в торгах в моменты высокой волатильности рынков. В данном режиме возможно выставление только лимитных заявок, исполнение
сделок не происходит до момента возобновления торгов. Отсутствуют механизмы расчёта "рыночной цены". 

SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD — то же, что и SECURITY_TRADING_STATUS_OPENING_PERIOD.

SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE — режим торгов по цене аукциона закрытия. В данном режиме
возможно выставление рыночных заявок и лимитных заявок с ценой аукциона закрытия. Все заявки во время данного режима
исполняются по цене аукциона закрытия (при наличии встречных предложений).

SECURITY_TRADING_STATUS_SESSION_ASSIGNED — торговая сессия назначена. Технический статус, время клиринга. В данном 
режиме выставление всех видов торговых поручений недоступно. 

SECURITY_TRADING_STATUS_SESSION_CLOSE — то же, что и SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING.

SECURITY_TRADING_STATUS_SESSION_OPEN — то же, что и SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING.

SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING — торги в режиме внутренней ликвидности брокера. Данный статус 
устанавливается брокером (Тинькофф Инвестиции) во время торговли по выходным. В этом режиме недоступно выставление
лимитных заявок. Исполняются только рыночные заявки по цене, сформированной по алгоритмам брокера (при наличии 
встречных предложений).

SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING — перерыв в торгах в режиме внутренней ликвидности брокера. Выставление
торговых поручений недоступно.

SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING — то же, что и SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING.
