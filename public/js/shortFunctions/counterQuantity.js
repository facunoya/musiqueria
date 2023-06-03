window.onload = function () {
    const increase = document.querySelectorAll('.increase')
    const decrease = document.querySelectorAll('.decrease')
    const quantity = document.querySelectorAll('.quantity')
    const stock = document.querySelectorAll('.stock')
    console.log('Hola Agos!')
    console.log(quantity[0].id)
    console.log(increase[0].value, decrease[0].value) //<-- aca tengo el boton con referencia del id
    increase.forEach(incremento => {
        incremento.addEventListener('click', () => {
            let product_id = incremento.value
            for (let i = 0; i < quantity.length; i++) {
                if (quantity[i].id == product_id) {
                    console.log(stock[i].value)
                    console.log(quantity[i].value)
                    if (parseInt(quantity[i].value) < parseInt(stock[i].value)) {
                        quantity[i].value++
                    }

                }
            }

        })


    });
    decrease.forEach(decremento => {
        decremento.addEventListener('click', () => {
            let product_id = decremento.value
            for (let i = 0; i < quantity.length; i++) {
                if (quantity[i].id == product_id) {
                    console.log(stock[i].value)
                    console.log(quantity[i].value)
                    if (parseInt(quantity[i].value) > 1) {
                        quantity[i].value--
                    }

                }
            }

        })


    })
}