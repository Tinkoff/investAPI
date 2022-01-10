#Нестандартные типы данных TINKOFF INVEST API

##MoneyValue
Данный тип данных используется для параметров, имеющих денежный эквивалент. Например, цены на ценные бумаги.

Тип состоит из трёх параметров: 

* currency — строковый [ISO-код валюты](https://ru.wikipedia.org/wiki/ISO_4217). Например, RUB или USD.
* units — целая часть суммы. 
* nano — дробная часть суммы. 

Для корректной работы с данным типом данных требуется его конвертация в стандартные типы языка программирования,
который используется для написания торгового робота. 

###Пример конвертации на Java

    {
    //MoneyValue - конвертация из BigDecimal в MoneyValue и обратно
        BigDecimal value = new BigDecimal("123.456");
        String currency = "RUB";
        MoneyValue moneyValue = MoneyValue.newBuilder() 
            .setCurrency(currency)
            .setUnits(value != null ? value.longValue() : 0)
            .setNano(value != null ? value.remainder(BigDecimal.ONE).multiply(BigDecimal.valueOf(1_000_000_000)).intValue() : 0)
            .build();
        BigDecimal bigDecimal = moneyValue.getUnits() == 0 && moneyValue.getNano() == 0 ? BigDecimal.ZERO : BigDecimal.valueOf(moneyValue.getUnits()).add(BigDecimal.valueOf(moneyValue.getNano(), 9));
    }

####Примеры конвертированных значений 
|Сумма в валюте|Сумма в MoneyValue|
|:---------------|:-----------------|
| 114,25 рублей  |`{`</br>`"currency": "RUB",`</br>`"units": "114",`</br>`"nano": 250000000`</br>`}`|
|-200,20 долларов|`{`</br>`"currency": "USD",`</br>`"units": "-200",`</br>`"nano": -200000000`</br>`}`|
|-0.01 юаней     |`{`</br>`"currency": "CNY",`</br>`"units": "-0",`</br>`"nano": -10000000`</br>`}`|

##Quotation
Данный тип данных аналогичен MoneyValue с той лишь разницей, что в нём не содержится информации о валюте.

* units — целая часть суммы.
* nano — дробная часть суммы. 

###Пример конвертации на Java

    {
    //Пример конвертации из BigDecimal в Quotation и обратно
        BigDecimal value = new BigDecimal("123.456");
        Quotation quotation = Quotation.newBuilder()
            .setUnits(value != null ? value.longValue() : 0)
            .setNano(value != null ? value.remainder(BigDecimal.ONE).multiply(BigDecimal.valueOf(1_000_000_000)).intValue() : 0)
            .build();
        BigDecimal bigDecimal = quotation.getUnits() == 0 && quotation.getNano() == 0 ? BigDecimal.ZERO : BigDecimal.valueOf(quotation.getUnits()).add(BigDecimal.valueOf(quotation.getNano(), 9));
    }

####Примеры конвертированных значений
|Сумма   |Сумма в Quotation|
|:-------|:----------------|
| 114,25 |`{`</br>`"units": "114",`</br>`"nano": 250000000`</br>`}`|
|-200,20 |`{`</br>`"units": "-200",`</br>`"nano": -200000000`</br>`}`|
|-0.01   |`{`</br>`"units": "-0",`</br>`"nano": -10000000`</br>`}`|
