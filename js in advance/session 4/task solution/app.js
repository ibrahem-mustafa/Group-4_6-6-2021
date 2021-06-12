// console.log('test')

// TASK GOALS
// fetch todos from api
// render 10 of todo list in (ul)
// take value of input and add it to todo list
// add (x) button to each todo list item
// add click event to (x) button that deletes the appended todo

const todoListContainer = document.querySelector('.todoListContainer');
let todoList = todoListContainer.querySelector('ul.todoList');

if (!todoList) {
    const ul = createElement('ul', {class: 'todoList'})
    todoListContainer.appendChild(ul)
    todoList = ul;
}


(async function fetchTodos() {
    const response = await fetch('http://localhost:3000/todos')
    const fetchedTodos = await response.json()
    const todoSlice = fetchedTodos.slice(0, 10)
    todoSlice.forEach(todo => renderTodo(todoList, todo))
})()

function renderTodo(todoList, todo) {

    const li = createElement('li', {
        class: 'todoListItem',
    }, todo.title)

    const xButton = createElement('button', {class: 'todoListItemAction'}, 'X')
    li.appendChild(xButton)
    
    xButton.addEventListener('click', () => {
        todoList.removeChild(li)
    })

    todoList.appendChild(li)
}


const formContainer = document.querySelector('.formContainer')
const input = formContainer.querySelector('#todoFormInput')
const button = formContainer.querySelector('#todoFormButton')

button.addEventListener('click', () => {
    const todo = {
        title: input.value
    }
    renderTodo(todoList, todo)

    input.value = ''
})



function createElement(tag, attributes, textContent) {
    const ele = document.createElement(tag);

    const attributesKeys = Object.keys(attributes);

    for (let key of attributesKeys) {
        ele.setAttribute(key, attributes[key])
    }

    if (textContent) {
        ele.textContent = textContent
    }
    return ele
}


