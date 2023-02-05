const modal = (more, modall) => {
    const modalBtn = document.querySelector(more) // (1) получаем класс кнопки "Узнать больше"
    const modal = document.querySelector(modall)// (2) получаем класс скрытого модального окна

    modalBtn.addEventListener('click', () => {// (3) вешаем подслушиватель на кнопку "Узнать больше"
        modal.classList.remove('hidden')// (4) по клику снимается заглушка (удаляется класс hidden, окно открывается)
    })

    modal.addEventListener('click', (event) => {// (5) вешаем подслушиватель с событием event на модальное окно
        const target = event.target// (6) записываем в новую переменную target событие цели

        if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {// (7) если по целью по клику являются классы overlay или modal__close
            modal.classList.add('hidden')// (8) то модальное окно закроется
        }

    })
}

export default modal;