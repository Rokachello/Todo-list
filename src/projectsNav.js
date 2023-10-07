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
    
}
