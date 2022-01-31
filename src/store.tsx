import { makeAutoObservable } from "mobx";
import { ITodo } from "./interfaces";

class Store {
  todos: ITodo[] = [];
  title: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setTitle(text: string) {
    this.title = text;
  }

  addTodo = (title: string) => {
    const newTodo: ITodo = {
      number: this.todos.length + 1,
      id: Date.now(),
      title: title,
      completed: false,
    };
    if (title.trim() !== "") {
      this.todos.push(newTodo);
      this.title = "";
      localStorage.setItem("todos", JSON.stringify(this.todos));
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
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  };

  get activeTasks() {
    return this.todos.filter((todo) => !todo.completed).length;
  }
}

export default new Store();
