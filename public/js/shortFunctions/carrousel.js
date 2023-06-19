window.onload = function () {

    const grande = document.querySelector('.grande')
    const punto = document.querySelectorAll('.punto')

    //cuando cliqueo un punto saber la posicion de ese punto
    //aplicar un transform en el eje x al grande
    //quitar la clase activo de todos los puntos
    //añadir la clase activo al punto que hemos hecho click

    punto.forEach((cadaPunto, i) => {
        punto[i].addEventListener('click', () => {

            let posicion = i
            //posicion es 0 el transformX  es 0
            //posicion es 1 transformX es -33%
            // operacion = posicion *-33.3
            let operacion = posicion * -33.3
            grande.style.transform = `translateX(${operacion}%)`

            punto.forEach((cadaPunto, i) => {
                punto[i].classList.remove('activo')
            })
            punto[i].classList.add('activo')
        })

        console.log('ANDAS MAS O MENOS POR ACA')
    })



}



