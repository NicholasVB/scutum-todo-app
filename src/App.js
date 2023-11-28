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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodos('https://jsonplaceholder.typicode.com/todos?_limit=20');
        setTodoList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    
  }, []);

  

  return (
    <div>
      <TodoList todoList={todoList}/>
      <Pagination />
    </div>
  );
}

export default App;