(() => {

    const hero = Snap('#hero');


   


    function drawCircle(color) {

        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const radius = Math.floor( Math.sqrt((vw ** 2) + (vh ** 2)) / 2);
        // Теорема Пифагора
        // ** - значек степени 
        // Math.sqrt - корень
        // Math.floor - округляет число
        // console.log(radius);



        // console.log( 'Размер окошка браузера:' + vw , vh);
        // Выводит в консоль размер окошка браузера

        const circle = hero.circle('50%' , '50%' , 50);
        // Создание круга по параметрам. 1 и 2 - отступы. 3 - размер 
        circle.attr({
            fill: color
            // fill - заливает цветом
        });
    
        circle.animate({ r: radius}, 6000 , function () {
            // console.log('animation is finished');
            this.remove();
            // т.к. this в circle , то он ссылаеться на него и удаляет
        });
        // 1 - до какого радиуса(обьект) , 2 - милисекунды анимации(аргумент) , 3 - функция



    }

    drawCircle('aquamarine');
    // цвет

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


})();