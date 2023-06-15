let addBtn = document.getElementById('add_btn')
addBtn.addEventListener('click', addTodo)
let parentList = document.getElementById('parentList')

function addTodo(e) {
    if (parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove()
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling

    let newLi = document.createElement('li')
    newLi.className = 'list-group-item d-flex justify-content-between-item'
    newLi.innerHTML = `<h3 class="flex-grow-1">${currentInput.value}</h3>
                    <button class="btn btn-warning mx-3" onclick="editTodo(this)">Edit</button>
                    <button class="btn btn-danger" onclick="removeTodo(this)">Remove</button>`

    parentList.appendChild(newLi)

}

function removeTodo(e) {
    let currentTodo = e.parentElement
    currentTodo.remove()

    if (parentList.children.length <= 0) {
        let emptyMsg = document.createElement("h4")
        emptyMsg.classList.add("emptyMsg")
        emptyMsg.textContent = "No Todo's added yet !!!"
        parentList.appendChild(emptyMsg)
    }
}

function editTodo(e) {
    if (e.textContent == "Done") {
        e.textContent = "Edit"
        let currentTodo = e.previousElementSibling.value
        let updatedTodo = document.createElement('h3')
        updatedTodo.className = "flex-grow-1"
        updatedTodo.textContent = currentTodo
        e.parentElement.replaceChild(updatedTodo, e.previousElementSibling)

    } else {
        e.textContent = "Done"
        let currentTodo = e.previousElementSibling.textContent
        let currentInput = document.createElement('input');
        currentInput.type = "text"
        currentInput.placeholder = "Todo Item"
        currentInput.className = "form-control"
        currentInput.value = currentTodo
        e.parentElement.replaceChild(currentInput, e.previousElementSibling)

    }
}