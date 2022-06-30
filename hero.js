(() => {

    const hero = Snap('#hero');


   


    function drawCircle(color) {

        const circle = hero.circle('50%' , '50%' , 50);
        // Создание круга по параметрам. 1 и 2 - отступы. 3 - размер 
        circle.attr({
            fill: color
            // fill - заливает цветом
        });
    
        circle.animate({ r: 200}, 6000);
        // 1 - до какого радиуса , 2 - секунды анимации



    }

    drawCircle('green');



})();