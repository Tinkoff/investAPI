**C помощью Swagger вы можете тестировать методы Tinkoff Invest API. [Cсылка на Swagger Tinkoff Invest API](https://tinkoff.github.io/investAPI/swagger-ui/).**

## Что такое Swagger?

**Swagger** - это фреймворк для спецификации RESTful API. Один из его инструментов, Swagger UI, позволяет не только интерактивно просматривать спецификацию, но и отправлять запросы.

## Что такое Swagger UI?

**[Swagger UI](https://swagger.io/tools/swagger-ui/)** - один из самых популярных инструментов для создания интерактивной документации. Swagger UI создает интерактивную консоль API для экспериментов с запросами в реальном времени. 

## Инструкция по использованию

### Авторизация

Прежде чем делать какие-либо запросы, нужна авторизация. Нажимаем кнопку Authorize и заполняем информацию, требуемую в окне «Авторизация», изображенном ниже:

![Swagger авторизация](/investAPI/img/Auth_swagger1.png "Swagger авторизация")

![Swagger авторизация - интерфейс](/investAPI/img/Auth_swagger.png "Swagger авторизация - интерфейс")

В нашем случае необходимо ввести токен токен доступа. Подробнее о том, как получить токен можно узнать по ссылке: [Токен доступа](/investAPI/token/)

Например:
`t.QtEo8ahkNFX4RTpbqp0u4z4GDZq27HzUp6AotJASBx7_DVqmqZMHfM2Cy7JmUjS80boI9eVg`

###  Создание запроса

Теперь создадим запрос:

- Разворачиваем конечную точку 
- Нажимаем кнопку Try it out

![Swagger Try](/investAPI/img/Swagger_try.png "Swagger Try")

- После того, как мы нажмем кнопку Try it out, значение примера в поле «Тело запроса» станет редактируемым.

- В редактируемом поле изменяем значения параметров.

- Нажимаем Execute.

![Swagger Try 2](/investAPI/img/Swagger_try2.png "Swagger Try 2")

Пользовательский интерфейс Swagger отправляет запрос и показывает отправленный curl. Раздел Ответы показывает тело ответа и заголовки ответа.

Самый ожидаемый ответ, в случае правильной обработки запроса сервером, имеет код 200 и показывает то, как должна выглядеть структура ответа.

![Swagger Response](/investAPI/img/response_swagger.png "Swagger Respons")

![Swagger Response](/investAPI/img/response_swagger2.png "Swagger Respons")

C помощью Swagger вы можете тестировать методы [Tinkoff Invest API](https://tinkoff.github.io/investAPI/swagger-ui/).

Официальную документацию вы можете найти на сайте [Swagger](https://swagger.io/).