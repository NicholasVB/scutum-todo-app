import { useEffect, useState } from 'react';
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
      {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </div>
  );
}

export default App;