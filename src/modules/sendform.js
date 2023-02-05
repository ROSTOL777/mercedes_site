const sendform = (formclass) => {
    const form = document.querySelector(formclass)

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = {}

    for (let { name, value } of form.elements) { // получение свойств name и value из формы элементов (name - name, mail, phone); (value - введенное значение в input)

        if (name) {
            data[name] = value
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts', { // endpoint
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                return res.json()
            } else {
                throw new Error(res.status)
            }
        })
        .then(data => {
            alert('Данные отправлены!')
            form.reset() // очистка формы
        })
        .catch(error => {
            alert('Вам капец! Ошибка ' + error.message)
        })
})
}

export default sendform;