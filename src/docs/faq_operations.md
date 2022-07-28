###Можно ли узнать идентификатор поручения из операции?

Нет, в данный момент такой информации в операции нет, но мы работаем над этим. 

###Почему в операции пустой Figi?

Такое возможно для операций внесения денежных средств и подобных, т.к. нет связанного с операцией биржевого
инструмента

###Будут ли отображаться операции по бумагам, которые прошли делистинг? 

Да, такие операции отображаться будут. В том числе будут отображаться операции по бумагам после
различных корпоративных действий. Подробнее: [Корпоративные действия](/investAPI/faq_corp_action/).

###Параметр quantity в лотах или количествах? 

В рамках сервиса операций данный параметр всегда передаётся в лотах инструмента.

###Как с помощью TINKOFF INVEST API получить брокерский отчёт? 

Для получения брокерского отчёта можно воспользоваться методом [GetBrokerReport](/investAPI/operations#getbrokerreport).
Обратите внимание, что получение брокерского отчёта асинхронно, т.е. сперва вы запрашиваете формирование
отчёта (отправляя пакет [generate_broker_report_request](/investAPI/operations#generatebrokerreportrequest)),
получаете идентификатор задачи формирования отчёта (параметр task_id). После этого вы можете запросить 
отчёт по его идентификатору, в случае если формирование отчёта ещё не закончено, вы получите соответствующее
сообщение об ошибке.

Подробнее о брокерском отчёте: [Отчёты и справки](https://www.tinkoff.ru/invest/account/help/trade-on-bs/get-report/).

###Как получить информацию о позициях и доходности портфеля?

Для получения информации о позиция и доходности портфеля необходимо подписаться gRPC server-side stream 
получения сделок с биржи [PortfolioStream](/investAPI/operations/#portfoliostream) или выполнить запросы в [метод получения портфеля](/investAPI/operations/#getportfolio) и [метод получения позиций по счету](/investAPI/operations/#getpositions).
В [PortfolioStream](/investAPI/operations/#portfoliostream) не отображаются заблокированные биржей бумаги. 
Получить заблокированные бумаги можно в методе [GetPortfolio](/investAPI/operations/#getportfolio) и [GetPossitions](/investAPI/operations/#getpositions).

###Как получить информацию об операциях?

Для получения информации об операциях в TINKOFF INVEST API предусмотрен метод [getOperationsByCursor](/investAPI/operations#getoperationsbycursor).
Данный метод имеет широкие возможности фильтрации, а так же возвращает постраничную информацию об операциях.

Так же в TINKOFF INVEST API для получения списка операций существует метод [getOperations](/investAPI/operations#getoperations), являющийся более старой версией метода [getOperationsByCursor](/investAPI/operations#getoperationsbycursor).
Однако, метод [getOperationsByCursor](/investAPI/operations#getoperationsbycursor) является более **предпочтительным** для использования.

###Как понять какие бумаги в портфеле заблокированы по решению ЦБ?

В методах [getPortfolio](/investAPI/operations#getportfolio) и  [getPositions](/investAPI/operations#getpositions) добавлены специальные булевы параметры, означающие что данный инструмент заблокирован депозитарием.