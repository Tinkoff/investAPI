# Websocket proxy for grpc streaming

Сервис для получения сообщений grpc streaming Тинькофф Инвестиции через json websocket

Адрес для подключения **wss://invest-public-api.tinkoff.ru/ws/**

* ***token** - токен доступа к счету Тинькофф Инвестиции можно передать в заголовке `Authorization: Bearer *token`
  , либо  в заголовке `Web-Socket-Protocol: json, *token`
* запрос на подключение требует указание протокола json в заголовоке `Web-Socket-Protocol: json`

Чтобы получать сообщения c наименованиями полей идентичными наименованиям полей из proto-контрактов, необходимо использовать протокол в заголовке WebSocket-Protocol
```
json-proto
```
 вместо
```
json
``` 
Отправка json-сообщений поддерживается в обоих вариантах,  как в camelCase, так и snake_case.


## Сервис поручений

### Лента сделок.

[TradesStreamRequest](/investAPI/ws/websock-docs/output/index.html#schema-v1TradesStreamRequest)
[TradesStreamResponse](/investAPI/ws/websock-docs/output/index.html#schema-v1TradesStreamResponse)

Пример запроса

```json
{
  "accounts": [
    "*accountId"
  ]
}
```
Пример ответа
```json
{
  "orderTrades": {
    "orderId": "36042910361",
    "createdAt": "2023-05-16T13:27:14.682140664Z",
    "direction": "ORDER_DIRECTION_SELL",
    "figi": "BBG00RPRPX12",
    "trades": [
      {
        "dateTime": "2023-05-16T13:27:13.423246Z",
        "price": {
          "units": "1",
          "nano": 235000000
        },
        "quantity": "1",
        "tradeId": "7653265991"
      }
    ],
    "accountId": "*accountId",
    "instrumentUid": "ade12bc5-07d9-44fe-b27a-1543e05bacfd"
  }
}
```


[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.OrdersStreamService/TradesStream)

## Сервис операций

### Лента событий по позициям.

[PositionsStreamRequest](/investAPI/ws/websock-docs/output/index.html#schema-v1PositionsStreamRequest)
[PositionsStreamResponse](/investAPI/ws/websock-docs/output/index.html#schema-v1PositionsStreamResponse)

Пример запроса

```json
{
  "accounts": [
    "*accountId"
  ]
}
```


Пример ответа - подписка успешна

```json
{
  "subscriptions": {
    "accounts": [
      {
        "accountId": "*accountId",
        "subscriptionStatus": "POSITIONS_SUBSCRIPTION_STATUS_SUCCESS"
      }
    ]
  }
}
```

Пример события - изменение позици в портфеле
```json
{
  "position": {
    "accountId": "*accountId",
    "money": [
      {
        "availableValue": {
          "currency": "rub",
          "units": "3148",
          "nano": 130000000
        },
        "blockedValue": {
          "currency": "rub",
          "units": "0",
          "nano": 20000000
        }
      }
    ],
    "securities": [
      {
        "figi": "BBG00RPRPX12",
        "blocked": "0",
        "balance": "9",
        "positionUid": "eee36ccf-5f28-4419-9c29-c6465f39581a",
        "instrumentUid": "ade12bc5-07d9-44fe-b27a-1543e05bacfd",
        "exchangeBlocked": false,
        "instrumentType": "etf"
      }
    ],
    "futures": [],
    "options": [],
    "date": "2023-05-16T13:29:13.411710Z"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PositionsStream)

### Лента событий по портфелям.

[PortfolioStreamRequest](/investAPI/ws/websock-docs/output/index.html#schema-v1PortfolioStreamRequest)
[PortfolioStreamResponse](/investAPI/ws/websock-docs/output/index.html#schema-v1PortfolioStreamResponse)

Пример запроса

```json
{
  "accounts": [
    "*accountId"
  ]
}
```


Пример ответа подписка успешна

```json
{
  "subscriptions": {
    "accounts": [
      {
        "accountId": "*accountId",
        "subscriptionStatus": "PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS"
      }
    ]
  }
}
```

Пример события изменения по портфелю
```json
{
  "portfolio": {
    "totalAmountShares": {
      "currency": "rub",
      "units": "2787",
      "nano": 700000000
    },
    "totalAmountBonds": {
      "currency": "rub",
      "units": "0",
      "nano": 0
    },
    "totalAmountEtf": {
      "currency": "rub",
      "units": "11",
      "nano": 115000000
    },
    "totalAmountCurrencies": {
      "currency": "rub",
      "units": "3194",
      "nano": 843600000
    },
    "expectedYield": {
      "units": "9158",
      "nano": 160000000
    },
    "positions": [
      {
        "figi": "BBG004S68473",
        "instrumentType": "share",
        "quantity": {
          "units": "400",
          "nano": 0
        },
        "averagePositionPrice": {
          "currency": "rub",
          "units": "3",
          "nano": 942567000
        },
        "expectedYield": {
          "units": "6",
          "nano": 352000000
        },
        "averagePositionPricePt": {
          "units": "3",
          "nano": 942567000
        },
        "currentPrice": {
          "currency": "rub",
          "units": "4",
          "nano": 193000000
        },
        "averagePositionPriceFifo": {
          "currency": "rub",
          "units": "3",
          "nano": 956275000
        },
        "quantityLots": {
          "units": "4",
          "nano": 0
        },
        "blocked": false,
        "positionUid": "427f9bcc-2cab-4561-bf94-942d4261fbb7",
        "instrumentUid": "2dfbc1fd-b92a-436e-b011-928c79e805f2"
      }
    ],
    "accountId": "*accountId",
    "virtualPositions": []
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PortfolioStream)

## Сервис рыночных данных

[MarketDataRequest](/investAPI/ws/websock-docs/output/index.html#message-v1MarketDataRequest)
[MarketDataResponse](/investAPI/ws/websock-docs/output/index.html#message-v1MarketDataResponse)

### Лента торговых статусов инструментов

Пример запроса

```json
{
  "subscribeInfoRequest": {
    "subscriptionAction": "SUBSCRIPTION_ACTION_SUBSCRIBE",
    "instruments": [
      {
        "instrumentId": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ]
  }
}
```

Пример ответа - подписка успешна
```json
{
  "subscribeInfoResponse": {
    "trackingId": "644a898058ce5265b24f9adc21011f67",
    "infoSubscriptions": [
      {
        "figi": "BBG004730RP0",
        "subscriptionStatus": "SUBSCRIPTION_STATUS_SUCCESS",
        "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ]
  }
}
```

Пример сообщения торговый статус по инструменту

```json
{
  "tradingStatus": {
    "figi": "BBG004730RP0",
    "tradingStatus": "SECURITY_TRADING_STATUS_NORMAL_TRADING",
    "time": "2023-05-16T07:00:00.750460Z",
    "limitOrderAvailableFlag": true,
    "marketOrderAvailableFlag": true,
    "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream)



### Лента цен последних сделок

Пример запроса

```json
{
  "subscribeLastPriceRequest": {
    "subscriptionAction": "SUBSCRIPTION_ACTION_SUBSCRIBE",
    "instruments": [
      {
        "instrumentId": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ]
  }
}
```

Пример ответа - подписка успешна
```json
{
  "subscribeLastPriceResponse": {
    "trackingId": "644a875239934cfcda96460984a55ced",
    "lastPriceSubscriptions": [
      {
        "figi": "BBG004730RP0",
        "subscriptionStatus": "SUBSCRIPTION_STATUS_SUCCESS",
        "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ]
  }
}
```

Пример сообщения последние цены по инструменту
```json
{
  "lastPrice": {
    "figi": "BBG004730RP0",
    "price": {
      "units": "178",
      "nano": 790000000
    },
    "time": "2023-05-16T08:49:31.085056Z",
    "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream)


### Лента обезличенных сделок

Пример запроса

```json
{
  "subscribeTradesRequest": {
    "subscriptionAction": "SUBSCRIPTION_ACTION_SUBSCRIBE",
    "instruments": [
      {
        "instrumentId": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ]
  }
}
```

Пример ответа - подписка успешна
```json
{
  "subscribeTradesResponse": {
    "trackingId": "6440d32adb48515bc217b426880a99a7",
    "tradeSubscriptions": [
      {
        "figi": "BBG004730RP0",
        "subscriptionStatus": "SUBSCRIPTION_STATUS_SUCCESS",
        "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ]
  }
}
```

Пример сообщения обезличиные сделки по инстурменту
```json
{
  "trade": {
    "figi": "BBG004730RP0",
    "direction": "TRADE_DIRECTION_SELL",
    "price": {
      "units": "178",
      "nano": 860000000
    },
    "quantity": "200",
    "time": "2023-05-16T08:50:22.807741Z",
    "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream)


### Лента событий по стаканам

Пример запроса

```json
{
  "subscribeOrderBookRequest": {
    "subscriptionAction": "SUBSCRIPTION_ACTION_SUBSCRIBE",
    "instruments": [
      {
        "depth":  10,
        "instrumentId": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ],
    "waitingClose": false
  }
}
```
Пример ответа - подписка успешна
```json
{
  "subscribeOrderBookResponse": {
    "trackingId": "6440cfbaa85be1a52839fc81e5f0f14f",
    "orderBookSubscriptions": [
      {
        "figi": "",
        "depth": 10,
        "subscriptionStatus": "SUBSCRIPTION_STATUS_SUCCESS",
        "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ]
  }
}
```

Пример сообщения стака по инструменту
```json
{
  "orderbook": {
    "figi": "BBG004730RP0",
    "depth": 10,
    "isConsistent": true,
    "bids": [
      {
        "price": {
          "units": "178",
          "nano": 970000000
        },
        "quantity": "20"
      }...
      # ...other 9 items collapsed
    ],
    "asks": [
      {
        "price": {
          "units": "178",
          "nano": 980000000
        },
        "quantity": "3"
      }...
      # ...other 9 items collapsed
    ],
    "time": "2023-05-16T08:54:00.549662Z",
    "limitUp": {
      "units": "191",
      "nano": 440000000
    },
    "limitDown": {
      "units": "156",
      "nano": 240000000
    },
    "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream)


### Лента события по свечам

Пример запроса

```json
{
  "subscribeCandlesRequest": {
    "subscriptionAction": "SUBSCRIPTION_ACTION_SUBSCRIBE",
    "instruments": [
      {
        "interval": "SUBSCRIPTION_INTERVAL_ONE_MINUTE",
        "instrumentId": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ],
    "waitingClose": false
  }
}
```

Пример ответа - подписка успешна
```json
{
  "subscribeCandlesResponse": {
    "trackingId": "644a8c236378693c5265a3f679698708",
    "candlesSubscriptions": [
      {
        "figi": "BBG004730RP0",
        "interval": "SUBSCRIPTION_INTERVAL_ONE_MINUTE",
        "subscriptionStatus": "SUBSCRIPTION_STATUS_SUCCESS",
        "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
      }
    ]
  }
}
```

Пример события свеча по инструменту
```json
{
  "candle": {
    "figi": "BBG004730RP0",
    "interval": "SUBSCRIPTION_INTERVAL_ONE_MINUTE",
    "open": {
      "units": "179",
      "nano": 50000000
    },
    "high": {
      "units": "179",
      "nano": 70000000
    },
    "low": {
      "units": "178",
      "nano": 950000000
    },
    "close": {
      "units": "178",
      "nano": 950000000
    },
    "volume": "4279",
    "time": "2023-05-16T08:44:00Z",
    "lastTradeTs": "2023-05-16T08:44:27.432487Z",
    "instrumentUid": "962e2a95-02a9-4171-abd7-aa198dbe643a"
  }
}
```

[Проверить](/investAPI/ws/websock/index.html#/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream)

## Пинг сообщения

Пример 
```json
{
  "ping": {
    "time": "2023-05-16T08:32:00.472145624Z"
  }
}
```