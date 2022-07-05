(() => {


    let color;
    // Создание изменяющейся переменнной
    let hue = 0;

    function generateColor() {
        color = Snap.hsl(hue, 100, 50);
        hue = (hue + 1) % 360;
        setTimeout(generateColor, 100);
        // петля меняющая цвета на 1 градус каждый раз
    }

    generateColor();


    const li = document.querySelectorAll('#lineup li');

    for (const item of li.values()) {

        item.onmouseover = function () {
            this.style.backgroundColor = color;
            // каждый раз при наводе выдает цвет
        };

        item.onmouseout = function () {
            this.style.backgroundColor = 'transparent';
            // при убирании мышки вовращает цвет в исходный
        };
// Для всего листа
    }

})();