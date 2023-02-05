const burger = (humburgerMenu, menu) => {
    const burger = document.querySelector(humburgerMenu) // (1) получили по клику на 3 палки (бургер) его класс
    const menuELem = document.querySelector(menu) // (2) получили по клику класс выплывающего окна 

    const menuToggle = () => { // (5) функция для смены классов
        burger.classList.toggle('humburger-menu-active') // (6) обращение к класслисту бургера с замещением его старого класса .humburger-menu
        menuELem.classList.toggle('menu-active') // (7) обращение к класслисту меню с замещением его старого класса .menu
    }

    burger.addEventListener('click', () => { // (3) вешаем на "бургер" подслушиваетель
        menuToggle() // (4) по клику вызывается функция
        menuELem.addEventListener('click', (event) => { // (8) вешаем на выплывающее окно с меню подслушиватель
            const target = event.target // (9) обьявляем переменную, в которую записывем событие цели (по клику определяется класс)
            if (target.classList.contains('menu-list__link')) { // (10) если класс полученный по клику схож с menu-list__link
                burger.classList.remove('humburger-menu-active') // (11) то удаляем ранее обьявленный новый класс humburger-menu-active
                menuELem.classList.remove('menu-active') // (12) и удаляем ранее обьявленный новый класс menu-active
            }
        })
    })
}

export default burger;