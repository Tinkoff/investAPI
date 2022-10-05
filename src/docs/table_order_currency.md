#Таблица возвращаемых типов значений для различных методов и параметров

В таблице ниже отображено в чем возвращаются значения для различных типов инструментов в различных методах и их параметрах.

| Метод                     | Параметр                        | Shares, ETF | Bonds                                | Futures|
|---------------------------|---------------------------------|-------------|--------------------------------------| ---|
| Методы сервиса MarketData |                                 | валюта      | пункты                               | пункты|
| postOrder                 | Лимитная заявка - входящая цена | валюта      | валюта                               | пункты|
|                           | initial_order_price             | валюта      | валюта + НКД, добавляемый системой   | валюта|
|                           | executed_order_price            | валюта      | валюта                               | валюта|
|                           | initial_order_price_pt          |             |                                      | пункты|
|                           | total_order_amount              | валюта      | валюта                               | валюта|
|                           | initial_commission              | валюта      | валюта                               | валюта|
|                           | executed_commission             | валюта      | валюта                               | валюта|
|                           | aci_value                       | валюта      | валюта                               | валюта|
|                           | initial_security_price          | валюта      | валюта, без НКД.                     | валюта|
| GetOrderState             | stages.price                    | валюта      | пункты                               | валюта|
|                           | initial_order_price             | валюта      | валюта                               | валюта|
|                           | executed_order_price            | валюта      | валюта, включая НКД                  | валюта|
|                           | total_order_amount              | валюта      | валюта, включая НКД                  | валюта|
|                           | average_position_price          | валюта      | пункты                               | валюта|
|                           | initialCommission               | валюта      | валюта                               | валюта|
|                           | executedCommission              | валюта      | валюта                               | валюта|
|                           | initial_security_price          | валюта      | пункты                               | валюта|
| postStopOrder             | price, stop_price               | валюта      | пункты                               | пункты|
| getStopOrders             | price, stop_price               | валюта      | валюта                               | пункты|
| getOperationByCurcor      | payment                         | валюта      | валюта                               | валюта|
|                           | price                           | валюта      | валюта                               | пункты|
|                           | trades.price                    | валюта      | валюта                               | пункты|
| getOperation              | payment                         | валюта      | валюта                               | валюта|
|                           | price                           | валюта      | валюта                               | пункты|
|                           | trades.price                    | валюта      | валюта                               | валюта|
