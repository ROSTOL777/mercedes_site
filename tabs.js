const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')  // (1) записываем дата атрибут data-tabs-handler в переменную tabsHandlerElems
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')  // (2) записываем дата атрибут data-tabs-field в переменную tabsContentElems

for (let btn of tabsHandlerElems) {  // (3) цикл переборки дата атрибутов переменной tabsHandlerElems
    btn.addEventListener('click', () => {  // (4) вешаем на каждый перебраный атрибут подслушиватель и по клику:
        tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))  // (5) вешаем метод на каждый элемент tabsHandlerElems и удаляем класс design-list__item_active
        btn.classList.add('design-list__item_active')  // (6) затем добавляем класс design-list__item_active тому элементу, на кнопку которого нажали

        tabsContentElems.forEach(content => {  // (7) вешаем метод на каждый элемент tabsContentElems
            if (content.dataset.tabsField === btn.dataset.tabsHandler) {  // (8) если значение дата элемента tabsField совпадает с значением tabsHandler
                content.classList.remove('hidden')  // (9) то элементы (фото) появляются
            }
            else {  // ()
                content.classList.add('hidden')   // (10) иначе элементы (фото) исчезают
            }
        })
    })


}