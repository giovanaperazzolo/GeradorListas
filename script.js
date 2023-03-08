const inputList = document.querySelector('.input-list')
const inputButton = document.querySelector('.lis > button')

inputButton.addEventListener('click', newList)

function newList(e) {
    e.preventDefault()
    console.log("aaaas")

    const listNew = document.querySelector('.new-list')

    const newItem = document.createElement('li')
    const trashButton = document.createElement('button')
    const viewButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fa fa-trash"></i>'
    viewButton.innerHTML = '<i class="fa fa-eye"></i>'


    if (inputList.value !== '') {
        newItem.textContent = inputList.value
        inputList.value = ''
        listNew.appendChild(newItem)
        newItem.appendChild(trashButton)
        newItem.appendChild(viewButton)
    }

    trashButton.addEventListener('click', function () {
        const parent = this.parentNode
        parent.remove()
    })

    viewButton.addEventListener('click', function () {

        window.location.assign("todo.html")
    })

}
