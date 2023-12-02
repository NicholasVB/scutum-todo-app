import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.scss";

export function TodoList ({todoList}) {
    return(
        <div className="todolist">
            {todoList.map((todo, index) => <TodoItem key={todo.id} id={todo.id} title={todo.title} orderNumber={index + 1} />)}
        </div>
    )
}