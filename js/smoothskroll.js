const linksHead = document.querySelectorAll('.menu-list__link')
const mainscroll = document.querySelector('.main__scroll')
const newArray = [...linksHead, mainscroll] // обьединили переменные

newArray.forEach(links => {
    links.addEventListener('click', (event) => {
        event.preventDefault()
        const ID = event.target.getAttribute('href').substr(1) // через Pointerevent получили доступ к атрибуту href и отрезали #

        document.getElementById(ID).scrollIntoView({ // скролл к нужной секции элемента
            behavior: 'smooth', // плавный переход. Если auto, то без перехода
            block: 'start' // в какую область переход
        })
    })
})