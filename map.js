(() => {

    mapboxgl.accessToken = 'pk.eyJ1IjoidG9raW9ib3kiLCJhIjoiY2w1ODIxMjV2MWRkeTNrcGJtbTdtdnhzciJ9.pPOEquxCJnl4OihAYBsBeQ';

    const map = new mapboxgl.Map({
            container: 'map', 
            center: [5.904258360110408, 51.98379869314343],
            // массив
            zoom: 13,
            style: 'mapbox://style/mapbox/dark-v10'
            // Задает цвет карты через путь
    });
    // Конструктор


    map.scrollZoom.disable();
    // Убирает приближение/отдаление с помощью колеса мышки 
    map.addControl(new mapboxgl.NavigationControl());  
    // 1- добавляет возможность добавить элементы управления , 2 - добавляет элемент управления , в данном случае - элемент навигации
    
    const marker = document.createElement('div');
    // Создает новый элемент
    marker.className = 'marker';

    new mapboxgl.Marker(marker).setLngLat([5.904258360110408, 51.98379869314343]).addTo(map);
    // конструктор маркера , широта и долгота , карта
})();