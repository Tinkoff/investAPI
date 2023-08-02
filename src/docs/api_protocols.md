# Доступные протоколы взаимодействия

TINKOFF INVEST API поддерживает возможность использования различных протоколов.
О том, как начать работать с gRPC, описано на [странице](/investAPI/grpc/).

| Протокол | Подробнее| Endpoint |
|----------|----------|----------|
| gRPC   | API реализован на быстром, удобном и функциональном протоколе [gRPC](https://grpc.io/docs/) | invest-public-api.tinkoff.ru:443 — продовый сервис,</br>sandbox-invest-public-api.tinkoff.ru:443 — сервис песочницы |
| gRPC-web   | Для поддержки web-клиентов, например браузерных JS скриптов, внедрена поддержка [gRPC-web](https://grpc.io/docs/platforms/web/basics/)  | invest-public-api.tinkoff.ru:443 — продовый сервис,</br>sandbox-invest-public-api.tinkoff.ru:443 — сервис песочницы |
| REST API   | Для клиентов, привыкших работать с REST API, реализован прокси [Swagger](https://tinkoff.github.io/investAPI/swagger-ui/). Инструкция по использованию Swagger описана на [странице](/investAPI/swagger/)| https://invest-public-api.tinkoff.ru/rest/ — продовый сервис, </br>https://sandbox-invest-public-api.tinkoff.ru/rest/ — сервис песочницы
| WebSocket   |Внедрена поддержка Websocket протокола  | wss://invest-public-api.tinkoff.ru/ws/ |
