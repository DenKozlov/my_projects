$(function () {
    var shop = new application.collections.ProductsCollection([
        {
            productName: 'Беспроводная розетка 1000Вт',
            imgSrc: 'img/wireless_plug_1000.png',
            description: 'Мощность 1000 Вт, напряжение: 230В, размеры: 56,2 х 106,7 х 77 мм',
            price: 9.99
        },
        {
            productName: 'Беспроводная розетка 3500Вт',
            imgSrc: 'img/wireless_plug_3500.jpg',
            description: 'Мощность 3500 Вт, напряжение: 230В',
            price: 14.99
        },
        {
            productName: 'Светодиодная лампочка c дистанционным управлением',
            imgSrc: 'img/LED_bulb.jpg',
            description: 'Максимальная мощность: 6W Цветопередача: 75-80 Угол луча: 160 градусов Цветовая температура: 2700-6500K 7 режимов яркости',
            price: 12.99
        },
        {
            productName: 'Беспроводной мультисенсор 7в1',
            imgSrc: 'img/wireless_multisensor.png',
            description: 'Датчик температуры, влажности, освещенности, движения, электроэнергии, звука, кнопка.',
            price: 34.99
        },
        {
            productName: 'Переходник для лампочки с дистанционным управлением',
            imgSrc: 'img/bulb_adapter.jpg',
            description: 'Напряжение 220В, тип патрона E27, мощность лампы 1000Вт',
            price: 8.99
        },
        {
            productName: 'Беспроводной датчик открытия двери/окна',
            imgSrc: 'img/sensor_opener.png',
            description: 'Источник питания: 12В (внутренняя батарея 7.4В), дальность передачи: 100 м при отсутствии препятствий, внутреннее расстояние: 15 мм',
            price: 7.99
        },
        {
            productName: 'Беспроводной датчик вибрации',
            imgSrc: 'img/vibration_sensor.png',
            description: 'Высокая чувствительность к вибрационным или ударным воздействиям, радиус действия: 100 м, время автономной работы: 1 год',
            price: 7.99
        },
        {
            productName: 'Беспроводной датчик дыма',
            imgSrc: 'img/smoke_sensor.png',
            description: 'Тип сенсора: фотоэлектрический, покрываемая площадь:	20 м², громкость встроенной сирены:	85 дБ, расстояние:	100 м, время автономной работы: 1 года',
            price: 8.99
        }

    ]),
        shopView = new application.views.ProductsCollectionView({ collection: shop }).render().el,
        cart = new application.collections.Cart();

});