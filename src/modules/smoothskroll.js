const smoothskroll = (menuListLink, mainScroll) => {
    const linksHead = document.querySelectorAll(menuListLink) // (1) получаем все ссылки из менюшки
    const mainscroll = document.querySelector(mainScroll) // (2) получаем класс ссылки кнопки белой стрелки вниз
    const newArray = [...linksHead, mainscroll] // (3) обьединили переменные

    newArray.forEach(links => {// (4) вешаем функцию перебора на переменную newArray
        links.addEventListener('click', (event) => {// (5) вешаем на каждую перебранную ссылку подслушиватель с событием event
            event.preventDefault()// (6) событие деактивирует стандартное поведение ссылок
            const ID = event.target.getAttribute('href').substr(1) // (7) через Pointerevent получили доступ к атрибуту href и отрезали #

            document.getElementById(ID).scrollIntoView({ // (8) скролл к нужной секции элемента
                behavior: 'smooth', // (9) плавный переход. Если auto, то без перехода
                block: 'start' // (10) в какую область переход
            })
        })
    })
}

export default smoothskroll;