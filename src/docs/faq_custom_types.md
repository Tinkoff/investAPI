#Нестандартные типы данных TINKOFF INVEST API

##Timestamp 
Тип данных Timestamp является основным для передачи времени [в формате protoсol-buffers](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#timestamp) и представляет собой значение в диапазоне интервала дат 
от 0001-01-01T00:00:00Z до 9999-12-31T23:59:59.999999999Z

Timestamp всегда работает в формате UTC с нулевым смещением. Тип Timestamp состоит из двух полей целого типа: seconds и nanos. 

Seconds содержит количество секунд с полуночи (00:00:00) 01.01.1970, а nanos принимает значение от 0 до 999999999.

####Примеры timestamp
|Seconds|Nanos|Значение|
|:-------|:----------------|:------------------|
|1645718039|0|24 February 2022, 15:53:59.000|
|1|500000000|1 January 1970, 0:00:01.500|
 

    {
        //Пример конвертации из POSIX функции time()
	Timestamp timestamp;
    	timestamp.set_seconds(time(NULL));
    	timestamp.set_nanos(0);
    }


    {
        //Пример конвертации из POSIX функции gettimeofday()
        struct timeval tv;
        gettimeofday(&tv, NULL);

        Timestamp timestamp;
        timestamp.set_seconds(tv.tv_sec);
        timestamp.set_nanos(tv.tv_usec * 1000);
    }


    {
        //Пример конвертации из Windows функции GetSystemTimeAsFileTime()
        FILETIME ft;
        GetSystemTimeAsFileTime(&ft);
        UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;

        // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
        //  is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
        Timestamp timestamp;
        timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
        timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
    }


##MoneyValue
Данный тип данных используется для параметров, имеющих денежный эквивалент. Например, стоимость ценных бумаг.

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
