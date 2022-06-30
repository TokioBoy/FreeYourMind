(() => {

    const hero = Snap('#hero');


    const circle = hero.circle('50%' , '50%' , 50);
    // Создание круга по параметрам. 1 и 2 - отступы. 3 - размер 
    circle.attr({
        fill: 'red'
        // fill - заливает цветом
    });



})();