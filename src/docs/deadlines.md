#Дедлайны запросов

TINKOFF INVEST API работает по протоколу [gRPC](/investAPI/grpc/), который предполагает использование
параметра deadline на стороне клиента. Данный параметр отвечает за обозначение крайнего срока выполнения 
запроса, т.е. по истечению объявленного срока запрос будет прерван принудительно. В TINKOFF INVEST API
не существует жёсткого регулирования, полученного дедлайна, однако, стоит учитывать, что время выполнения
запроса зависит от множества факторов (объёма данных, скорости их обработки, сложности вычислений и т.п.)
Поэтому команда TINKOFF INVEST API рекомендует не использовать параметр deadline ниже обозначенных в таблице
ниже.

*Подробнее про deadline: [gRPC and Deadlines](https://grpc.io/blog/deadlines/).*

##Рекомендованные минимальные дедлайны запросов

|Метод TINKOFF INVEST API|Рекомендованный deadline (ms)|
| :--------------------- | :-------------------------- |
|[GetAccounts](/investAPI/users#getaccounts)|300|
|[GetMarginAttributes](/investAPI/users#getmarginattributes)|300|
|[GetUserTariff](/investAPI/users#getusertariff)|300|
|[GetInfo](/investAPI/users#getinfo)|1000|
|[TradingSchedules](/investAPI/instruments#tradingschedules)|300|
|[BondBy](/investAPI/instruments#bondby)|300|
|[Bonds](/investAPI/instruments#bonds)|500|
|[CurrencyBy](/investAPI/instruments#currencyby)|300|
|[Currencies](/investAPI/instruments#currencies)|500|
|[EtfBy](/investAPI/instruments#etfby)|300|
|[Etfs](/investAPI/instruments#etfs)|500|
|[FutureBy](/investAPI/instruments#futureby)|300|
|[Futures](/investAPI/instruments#futures)|500|
|[StockBy](/investAPI/instruments#stockby)|300|
|[Stocks](/investAPI/instruments#stocks)|500|
|[GetAccruedInterests](/investAPI/instruments#getaccruedinterests)|500|
|[GetFuturesMargin](/investAPI/instruments#getfuturesmargin)|500|
|[GetInstrumentBy](/investAPI/instruments#getinstrumentby)|300|
|[PostOrder](/investAPI/orders#postorder)|1500|
|[CancelOrder](/investAPI/orders#cancelorder)|1500|
|[GetOrderState](/investAPI/orders#getorderstate)|300|
|[GetOrders](/investAPI/orders#getorders)|500|
|[GetOperations](/investAPI/operations#getoperations)|1500|
|[GetPortfolio](/investAPI/operations#getportfolio)|1500|
|[GetPositions](/investAPI/operations#getpositions)|1000|
|[GetWithdrawLimits](/investAPI/operations#getwithdrawlimits)|1000|
|[GetCandles](/investAPI/marketdata#getcandles)|500|
|[GetLastPrices](/investAPI/marketdata#getlastprices)|500|
|[GetOrderBook](/investAPI/marketdata#getorderbook)|500|
|[GetTradingStatus](/investAPI/marketdata#gettradingstatus)|500|
|[PostStopOrder](/investAPI/stoporders#poststoporder)|1500|
|[GetStopOrders](/investAPI/stoporders#getstoporders)|1500|
|[CancelStopOrder](/investAPI/stoporders#cancelstoporder)|1500|
|[OpenSandboxAccount](/investAPI/sandbox#opensandboxaccount)|300|
|[GetSandboxAccounts](/investAPI/sandbox#getsandboxaccounts)|300|
|[CloseSandboxAccount](/investAPI/sandbox#closesandboxaccount)|300|
|[PostSandboxOrder](/investAPI/sandbox#postsandboxorder)|300|
|[GetSandboxOrders](/investAPI/sandbox#getsandboxorders)|300|
|[CancelSandboxOrder](/investAPI/sandbox#cancelsandboxorder)|300|
|[GetSandboxOrderState](/investAPI/sandbox#getsandboxorderstate)|300|
|[GetSandboxPositions](/investAPI/sandbox#getsandboxpositions)|2000|
|[GetSandboxOperations](/investAPI/sandbox#getsandboxoperations)|2000|
|[GetSandboxPortfolio](/investAPI/sandbox#getsandboxportfolio)|2000|
|[SandboxPayIn](/investAPI/sandbox#sandboxpayin)|300|






