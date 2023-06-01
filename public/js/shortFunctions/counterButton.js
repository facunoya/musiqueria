window.onload = function () {
    let counter = 1
    const decrease = document.querySelector('.decrease')
    const increase = document.querySelector('.increase')
    const frontQuantity = document.querySelector('.quantity')
    const stock2 = document.querySelector('.stock')
    console.log('sotck: ' + stock2.value)
    let stock = stock2.value
    let quantity = 0
    decrease.addEventListener('click', () => {
        console.log('soy el decrease')
        if (stock <= stock2.value && quantity >= 1) {
            stock++
            quantity--
            console.log("stock: " + stock + " quantity: " + quantity)
            frontQuantity.value = quantity + 1
        } else {
            console.log('valor minimo aceptado')
        }
    })
    increase.addEventListener('click', () => {
        console.log('soy el increase')
        if (stock >= 1) {
            stock--
            quantity++
            console.log("stock: " + stock + " quantity: " + quantity)
            if (quantity <= stock2) {

                frontQuantity.value = quantity + 1
            } else {
                frontQuantity.value = quantity
            }

        } else {

            console.log("stock: " + stock + " quantity: " + quantity)
        }
    })


    console.log('Amor ya esta la comida')
}