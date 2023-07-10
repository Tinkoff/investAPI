# Дедлайны запросов

TINKOFF INVEST API работает по протоколу [gRPC](/src/docs/grpc.md), который предполагает использование
параметра `deadline` на стороне клиента. Данный параметр отвечает за обозначение крайнего срока выполнения 
запроса, т.е. по истечению объявленного срока запрос будет прерван принудительно. В TINKOFF INVEST API
не существует жёсткого регулирования полученного дедлайна, однако стоит учитывать, что время выполнения
запроса зависит от множества факторов (объёма данных, скорости их обработки, сложности вычислений и т.п.)
Поэтому команда TINKOFF INVEST API не рекомендует использовать параметр *deadline* со значениями ниже обозначенных в таблице.

*Подробнее про deadline: [gRPC and Deadlines](https://grpc.io/blog/deadlines/).*

## Рекомендованные минимальные дедлайны запросов

| Метод TINKOFF INVEST API                                          | Рекомендованный deadline (ms) |
|:------------------------------------------------------------------|:------------------------------|
| [GetAccounts](/src/docs/users.md/#getaccounts)                       | 300                           |
| [GetMarginAttributes](/src/docs/users.md/#getmarginattributes)       | 300                           |
| [GetUserTariff](/src/docs/users.md/#getusertariff)                   | 300                           |
| [GetInfo](/src/docs/users.md/#getinfo)                               | 1000                          |
| [TradingSchedules](/src/docs/instruments.md/#tradingschedules)       | 300                           |
| [BondBy](/src/docs/instruments.md/#bondby)                           | 300                           |
| [Bonds](/src/docs/instruments.md/#bonds)                             | 500                           |
| [CurrencyBy](/src/docs/instruments.md/#currencyby)                   | 300                           |
| [Currencies](/src/docs/instruments.md/#currencies)                   | 500                           |
| [EtfBy](/src/docs/instruments.md/#etfby)                             | 300                           |
| [Etfs](/src/docs/instruments.md/#etfs)                               | 500                           |
| [FutureBy](/src/docs/instruments.md/#futureby)                       | 300                           |
| [Futures](/src/docs/instruments.md/#futures)                         | 500                           |
| [ShareBy](/src/docs/instruments.md/#shareby)                         | 300                           |
| [Shares](/src/docs/instruments.md/#shares)                           | 500                           |
| [GetAccruedInterests](/src/docs/instruments.md/#getaccruedinterests) | 500                           |
| [GetFuturesMargin](/src/docs/instruments.md/#getfuturesmargin)       | 500                           |
| [GetInstrumentBy](/src/docs/instruments.md/#getinstrumentby)         | 300                           |
| [PostOrder](/src/docs/orders.md/#postorder)                          | 1500                          |
| [CancelOrder](/src/docs/orders.md/#cancelorder)                      | 1500                          |
| [GetOrderState](/src/docs/orders.md/#getorderstate)                  | 300                           |
| [GetOrders](/src/docs/orders.md/#getorders)                          | 500                           |
| [GetOperations](/src/docs/operations.md/#getoperations)              | 1500                          |
| [GetPortfolio](/src/docs/operations.md/#getportfolio)                | 1500                          |
| [GetPositions](/src/docs/operations.md/#getpositions)                | 1000                          |
| [GetWithdrawLimits](/src/docs/operations.md/#getwithdrawlimits)      | 1000                          |
| [GetCandles](/src/docs/marketdata.md/#getcandles)                    | 500                           |
| [GetLastPrices](/src/docs/marketdata.md/#getlastprices)              | 500                           |
| [GetOrderBook](/src/docs/marketdata.md/#getorderbook)                | 500                           |
| [GetTradingStatus](/src/docs/marketdata.md/#gettradingstatus)        | 500                           |
| [PostStopOrder](/src/docs/stoporders.md/#poststoporder)              | 1500                          |
| [GetStopOrders](/src/docs/stoporders.md/#getstoporders)              | 1500                          |
| [CancelStopOrder](/src/docs/stoporders.md/#cancelstoporder)          | 1500                          |
| [OpenSandboxAccount](/src/docs/sandbox.md/#opensandboxaccount)       | 300                           |
| [GetSandboxAccounts](/src/docs/sandbox.md/#getsandboxaccounts)       | 300                           |
| [CloseSandboxAccount](/src/docs/sandbox.md/#closesandboxaccount)     | 300                           |
| [PostSandboxOrder](/src/docs/sandbox.md/#postsandboxorder)           | 300                           |
| [GetSandboxOrders](/src/docs/sandbox.md/#getsandboxorders)           | 300                           |
| [CancelSandboxOrder](/src/docs/sandbox.md/#cancelsandboxorder)       | 300                           |
| [GetSandboxOrderState](/src/docs/sandbox.md/#getsandboxorderstate)   | 300                           |
| [GetSandboxPositions](/src/docs/sandbox.md/#getsandboxpositions)     | 2000                          |
| [GetSandboxOperations](/src/docs/sandbox.md/#getsandboxoperations)   | 2000                          |
| [GetSandboxPortfolio](/src/docs/sandbox.md/#getsandboxportfolio)     | 2000                          |
| [SandboxPayIn](/src/docs/sandbox.md/#sandboxpayin)                   | 300                           |
