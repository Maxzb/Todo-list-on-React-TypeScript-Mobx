import { ITodo } from "../../interfaces";

export type TodoListProps = {
   todos:ITodo[];
   onToggle(id: number): void;
   onRemove: (id: number) => void;
};