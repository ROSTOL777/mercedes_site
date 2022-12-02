const accordion = () => {
    const buttons = document.querySelectorAll('.feature__link')
    const lists = document.querySelectorAll('.feature-sub')

    buttons.forEach((itemBtn, index) => {
        itemBtn.addEventListener('click', () => {
            if (itemBtn.classList.contains('feature__link_active')) { // contains проверяет элемент на наличие класса внутри класс листа
                itemBtn.classList.remove('feature__link_active')
                lists[index].classList.add('hidden')
            } else {
                buttons.forEach((item) => {
                    item.classList.remove('feature__link_active')
                })

                itemBtn.classList.add('feature__link_active')

                lists.forEach(list => {
                    list.classList.add('hidden')
                })

                lists[index].classList.remove('hidden')

            }
        })
    })
}

accordion()
