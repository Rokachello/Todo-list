import { todoContainer, todoElement, icons } from "./domElements"
import { createTodosFromList, test } from "./todoItem"
import '../src/style.css';
import { modal } from "./newTodoForm,js";

const addTodoButton = document.createElement("button")
addTodoButton.textContent = "add todo"
todoContainer.appendChild(addTodoButton)
todoContainer.appendChild(modal)


addTodoButton.addEventListener("click", () => {
    modal.style.display = "block";
})




const xxx = createTodosFromList(test)
todoContainer.appendChild(xxx)





