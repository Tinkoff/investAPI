#Отличия работы методов в песочнице и на продовом контуре.

Все вызовы продового сервиса выполняются по адресу **`invest-public-api.tinkoff.ru:443`**.

Все вызовы сервиса песочницы выполняются по адресу **`sandbox-invest-public-api.tinkoff.ru:443`**.

Используя адрес песочницы Вы можете выполнять практически те же запросы, что и по адресу продового контура.
Исключения в работе сервисов или методов описаны в таблице ниже. 
Это сделано для поддержания единообразия кода и легкости перехода из песочницы на продовый контур.

| Сервисы                                                                               | Продовый контур | Песочница |
|:--------------------------------------------------------------------------------------|:---------------:|:---------:|
| [Сервис инструментов](/investAPI/head-instruments/)                                   |       Да        |    Да     |
| [Сервис аккаунтов](/investAPI/head-users/)                                            |       Да        |    Да     |
| <li>[getMarginAttributes](/investAPI/users#getmarginattributes)</li>                  |       Да        |  **Нет**  |
| [Сервис операций](/investAPI/head-operations/)                                        |       Да        |    Да     |
| <li>[getBrokerReport](/investAPI/operations/#getbrokerreport)</li>                    |       Да        |  **Нет**  |
| <li>[PortfolioStream](/investAPI/operations/#portfoliostream)</li>                    |       Да        |  **Нет**  |
| <li>[PositionsStream](/investAPI/operations/#positionsstream)</li>                    |       Да        |  **Нет**  |
| <li>[getDividendsForeignIssuer](/investAPI/operations#getdividendsforeignissuer)</li> |       Да        |  **Нет**  |
| <li>[getWithdrawLimits](/investAPI/operations#getwithdrawlimits)</li>                 |       Да        |  **Нет**  |
| [Сервис котировок](/investAPI/head-marketdata/)                                       |       Да        |    Да     |
| [Сервис стоп-заявок](/investAPI/head-stoporders/)                                     |       Да        |  **Нет**  |
| [Песочницы](/investAPI/head-sandbox/)                                                 |       Да        |    Да     |
| [Сервис торговых поручений](/investAPI/head-orders/)                                  |       Да        |    Да     |
| <li>[TradeStream](/investAPI/orders/#tradesstream)</li>                               |       Да        | **Нет**   |


**Важно!** В песочнице так же не рассчитывается комиссия, ликвидность портфеля, а так же отсутствуют маржинальные показатели.