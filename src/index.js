import { todoContainer, todoElement, icons } from "./domElements"
import { createTodosFromList, test } from "./todoItem"
import '../src/style.css';


const xxx = createTodosFromList(test)
todoContainer.appendChild(xxx)




