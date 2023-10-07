import { todoElement } from "./domElements";
import { icons } from "./domElements";


export class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.expand = false,  
    this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
  }
  changeExpandState(){
    this.expand = !this.expand
  }
}

// test items
let t1 = new TodoItem( "Eat breakfast", "scrambled eggs with fresh juice", new Date("2025-03-25"), "medium");
let t2 = new TodoItem( "Take out trash", "bio on monday", new Date("2024-04-25"), "high");

export let test = [t1, t2];

export const createTodosFromList = function(list) {
  const todos = document.createElement("div")
  list.forEach(element => {
    let currentTodo = createTodo(element)
    todos.appendChild(currentTodo)
  });
  return todos
};


const daysUntilTodo = function(dueDate){
  const now = Date.now()
  const date = dueDate
  const time = date - now
  return Math.floor(time/86400000)
  }
  

const createTodo = function(todo){
  const todoElement = document.createElement("div")
  //COLLAPSED
  const todoElementCollapsed = document.createElement("div")
  todoElementCollapsed.classList.add("todo")
 
  const title = document.createElement("p")
  const daysLeft = document.createElement("p")
  const expand = document.createElement("img")
  expand.src = "../src/images/icons8-expand-arrow-50.png"
  title.textContent = todo.title
  daysLeft.textContent = "in " + daysUntilTodo(todo.dueDate) + " days"
    todoElementCollapsed.appendChild(title)
    todoElementCollapsed.appendChild(daysLeft)
    todoElementCollapsed.appendChild(expand)
    todoElement.appendChild(todoElementCollapsed)
  //EXPANDED
  const todoElementExpanded = document.createElement("div")
  todoElementExpanded.classList.add("todo")

  const description = document.createElement("p")
  description.textContent = todo.description
  const date = document.createElement("p")
  date.textContent = todo.dueDate.getDate() + "." 
  + (todo.dueDate.getMonth()+1)+ "." + todo.dueDate.getFullYear()
  todoElementExpanded.appendChild(description)
  todoElementExpanded.appendChild(date)
  todoElement.appendChild(todoElementExpanded)
  //TOGGLE 
  todoElementExpanded.style.display = "none"
  expand.addEventListener("click", function() {
    todoElement.classList.toggle("active");
    if(todoElement.classList.contains("active")){
      todoElementExpanded.style.display = "block"
    } else {
      todoElementExpanded.style.display = "none"
    }
  }
  )

  return todoElement

}

