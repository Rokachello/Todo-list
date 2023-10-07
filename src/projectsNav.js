import { projectContainer } from "./domElements";


export class projectItem{
    constructor(name, todoList){
        this.name = name,
        this.list = todoList
    }
    addTodo(item){
        this.list.push(item)
        console.log(item + "added")
    }
    removeTodo(item){
        
    }
}


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
      console.log("xxxxxx" + this.title + this.expand)
    }
    
  
  }