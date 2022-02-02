import { autorun, makeAutoObservable } from "mobx";
import { ITodo } from "./interfaces";

class Store {
  todos: ITodo[] = [];
  title: string = "";

  constructor() {
    makeAutoObservable(this);

    this.todos = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    autorun(() => localStorage.setItem("todos", JSON.stringify(this.todos)));
  }

  setTitle(text: string) {
    this.title = text;
  }

  addTodo = (title: string) => {    
    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    if (title.trim() !== "") {
      this.todos.push(newTodo);
      this.title = "";
    } else {
      alert("Внесите задачу!");
    }
  };

  toggleHandler = (id: number) => {
    this.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  };

  removeTask = (id: number) => {
    const confirmDelete = window.confirm("Удалить задачу из списка?");
    if (confirmDelete) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    }
  };

  get activeTasks() {
    return this.todos.filter((todo) => !todo.completed).length;
  }
}

export default new Store();
