window.onload = function () {

    const hamburger = document.querySelector('.hamburger')
    const menu = document.querySelector('.navbar')

    console.log(menu)
    console.log(hamburger)

    hamburger.addEventListener('click', () => {
        menu.classList.toggle("spread")
        hamburger.classList.add('block') //Esto +     z-index: 10;(en css. .hamburger{}), hace el efecto de q el menu aparezca y desaparezca.
    })


    //Funcion abrir y cerrar menu

    window.addEventListener('click', e => {
        if (menu.classList.contains("spread") && e.target != menu && e.target != hamburger) {
            menu.classList.toggle("spread")
            hamburger.classList.remove('block')
        }
    })

    console.log('Esta andando')

}
