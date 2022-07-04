(() => {

    const hero = Snap('#hero');

    let i = 0;

    // let используем потому-что она может изменяться. const изменяться не может


   


    function drawCircle() {

        i = i + 15;
        // каждый раз i будет увеличиваться на 15

        let hue = i % 360;
        let color = Snap.hsl(hue, 100, 40);

        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const radius = Math.floor( Math.sqrt((vw ** 2) + (vh ** 2)) / 2) + 150;
        // Теорема Пифагора
        // ** - значек степени 
        // Math.sqrt - корень
        // Math.floor - округляет число
        // console.log(radius);



        // console.log( 'Размер окошка браузера:' + vw , vh);
        // Выводит в консоль размер окошка браузера

        const circle = hero.circle('50%' , '50%' , 50);
        // Создание круга по пар    аметрам. 1 и 2 - отступы. 3 - размер 
        circle.attr({
            // fill: 'aquamarine',
            fill: color
            // fill - заливает цветом
            // stroke: 'purple'
            // ободок 
        });
    
        circle.animate({ r: radius}, 6000 , function () {
            // console.log('animation is finished');
            this.remove();
            // т.к. this в circle , то он ссылаеться на него и удаляет
        });
        // 1 - до какого радиуса(обьект) , 2 - милисекунды анимации(аргумент) , 3 - функция



    }

    // drawCircle('aquamarine');
    // Функция "нарисовать круг" и параметр - цвет

    // const a = 1;
    // const b = 2;
    // const c = a + b;
    // const a2 = '1';
    // const b2 = '2';
    // const c2 = a + b;
    // // Тут в консте и строки и числа... пиндец , верните Java))

    // function addNumbers(a , b){
    //     let c = a + b;
    //     return c;
    // }

    // addNumbers(12 , 1);
    // // запихивает числа наверх

    // let result = addNumbers(12 , 1);

    setInterval(drawCircle, 1000);

    // Интервал рисования круга и время интервала в милисекундах
})();