// SELEÇÃO DE ELEMENTOS
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#searchInput");
const eraseBtn =  document.querySelector("#eraseBtn");
const filterBtn = document.querySelector("#filterBtn");

let oldInputValue;

// FUNÇÕES
const saveTodo = (text, done = 0, save = 1) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = ' <i class="fa-solid fa-xmark"></i>';


// UTILIZANDO DADOS DA LOCALSTORAGE
if (done) {
    todo.classList.add("done");
}

if (save) {
    saveTodoLocalStorage({text, done: 0})
}

todoList.appendChild(todo);

todoInput.value = "";
};

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;

            // UTILIZANDO DADOS DA LOCALSTORAGE
            updateTodoLocalStorage (oldInputValue, text);
        }
    });
    
    };

    const getSearchedTodos = (search) => {
        const todos = document.querySelector(".todo");

        todos.forEach((todo) => {
            const todoTitle = todo.querySelector("h3").innerText.toLowerCase();

            todo.style.display = "flex";

            console.log(todoTitle);

            if(!todoTitle.includes(search)) {
                todo.style.display = "none";
            }
        });
    };

    const filterTodos = (filterValue) => {
        const todos = document.querySelectorAll(".todo");

        switch(filterValue) {
            case "all":
                todos.forEach((todo) => (todo.style.display = "flex"));

                break;

            case "done":
                todos.forEach((todo) =>
                todo.classList.contains("done")
                ? (todo.style.display = "flex")
                : (todo.style.display = "none ")
                );     

                break;

            case "todo":
                todos.forEach((todo) =>
                !todo.classList.contains("done")
                ? (todo.style.display = "flex")   
                : (todo.style.display = "none")   
                );
                
                break;

             default:
                break;
        }
    };

// EVENTOS
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
})