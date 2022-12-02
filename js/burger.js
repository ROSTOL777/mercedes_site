const burger = document.querySelector('.humburger-menu')
const menuELem = document.querySelector('.menu')

const menuToggle = () => {
    burger.classList.toggle('humburger-menu-active')
    menuELem.classList.toggle('menu-active')
}

burger.addEventListener('click', () => {
    menuToggle()
    menuELem.addEventListener('click', (event) => {
        const target = event.target
        if (target.classList.contains('menu-list__link')) {
            burger.classList.remove('humburger-menu-active')
            menuELem.classList.remove('menu-active')
        }
    })
})

