import { todoContainer, todoElement, icons,addButton,projects } from "./domElements"
import { TodoItem, createTodosFromList, daysUntilTodo, test } from "./todoItem"
import '../src/style.css';
import { modal } from "./newTodoForm,js";


const addTodoButton = document.createElement("button")
addTodoButton.textContent = "add todo"
addButton.appendChild(addTodoButton)
addButton.appendChild(modal)


addTodoButton.addEventListener("click", () => {
    modal.style.display = "block";
})

export let currentTodoList = []
let work = [new TodoItem("xxx", "xxx",new Date("2024-04-25"), "high")]
let personal = []
let all = []
let past = []


const findPast = function(){
    const allTodos = all.concat(work).concat(personal)
    allTodos.forEach(element => {
        if(daysUntilTodo(element.dueDate) < 0 ){
            past.push(element)
        }
    })
}


export const refreshContent = function(){
    todoContainer.innerHTML = ""
    
    let content = []
    if(currentTodoList == all){
        content = createTodosFromList(all.concat(work).concat(personal))
    } else {
        content = createTodosFromList(currentTodoList)
    }
   
    
    todoContainer.appendChild(content)
    console.log(currentTodoList.content)
}

currentTodoList = all
refreshContent()



Array.from(projects).forEach(element => {
    element.addEventListener("click", () => {
        if(element.innerHTML == "work"){
            
            currentTodoList = work
            
        }
        if(element.innerHTML == "personal"){
            currentTodoList = personal
        }
        if(element.innerHTML == "show all"){
            currentTodoList = all
        }
        if(element.innerHTML == "past"){
            past=[]
            findPast()
            currentTodoList = past
        }
        refreshContent()
    });
});




