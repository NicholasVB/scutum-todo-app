import { useEffect, useState } from 'react';
import { TodoList } from "./components/TodoList/TodoList"
import { Pagination } from "./components/Pagination/Pagination"
import './App.css';

async function getTodos (url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function App() {
  const [todoList, setTodoList] = useState([]);
  const [renderTodoList, setRenderTodoList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodos('https://jsonplaceholder.typicode.com/todos?_limit=120');
        setTodoList(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    
  }, []);  

  return (
    <div>
      <TodoList todoList={renderTodoList}/>
      <Pagination todoList={todoList} setRenderPage={setRenderTodoList}/>
    </div>
  );
}

export default App;