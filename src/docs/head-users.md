#Сервис предоставления справочной информации о пользователе Тинькофф Инвестиций

##Получение списка счетов пользователя

[Тинькофф Инвестиции](https://www.tinkoff.ru/invest/) позволяют открывать несколько счетов каждому 
пользователю. Счета так же могут иметь различные типы (брокерский счёт, ИИС, инвесткопилка). 
Для получения списка счетов, их статусов и типов используется метод [getAccounts](/investAPI/users#getaccounts).

Данный метод возвращает полный список счетов пользователя, в том числе закрытые или находящиеся в процессе
открытия. Для определения доступности счёта для торговли используется параметр *status*. 

##Получение текущих лимитов запросов пользователя.

TINKOFF INVEST API обладает системой динамического назначения лимитов запросов для пользователя. 
Подробнее о тарифной политике можно почитать по ссылке: [Лимиты в TINKOFF INVEST API](/investAPI/limits/).

В ответе данного метода можно получить информацию по лимитам для каждого метода сервиса TINKOFF INVEST API,
а также лимиты, касающиеся stream-соединений.

##Получение маржинальных показателей по счёту

TINKOFF INVEST API предоставляет своим пользователям возможность использовать маржинальную торговлю.
Маржинальная торговля — это режим, в котором можно совершать сделки не только со своими деньгами и 
ценными бумагами, но и с активами, которые вы как бы берёте в долг у брокера. Подробнее о маржинальной
торговле: [Маржинальная торговля](https://help.tinkoff.ru/margin-trade/). 

Для получения показателей маржинальной торговли используется метод [getMarginAttributes](/investAPI/users#getmarginattributes).

##Получение информации о статусе пользователя

Для определения различных атрибутов пользователя можно использовать метод [getInfo](/investAPI/users#getinfo).
Данный метод позволяет узнать имеет ли пользователь статус квалифицированного инвестора, является ли 
премиальным клиентом, а также получить список типов инструментов, к которым имеет доступ по итогам тестирования. 





