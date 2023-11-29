import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.scss";

export function TodoList ({todoList}) {
    return(
        <div className="todolist">
            {todoList.map(todo => <TodoItem id={todo.id} title={todo.title} />)}
        </div>
    )
}