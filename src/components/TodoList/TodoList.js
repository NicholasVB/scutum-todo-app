import { TodoItem } from "../TodoItem/TodoItem"
export function TodoList ({todoList}) {
    return(
        <ol>
            {todoList.map(todo => <TodoItem key={todo.id} title={todo.title}/>)}
        </ol>
    )
}