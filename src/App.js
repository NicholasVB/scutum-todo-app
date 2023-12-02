import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodos } from './redux/slices/todosList';
import { AddNewTodo, TodoList, Pagination } from "./components";
import './App.scss';

function App() {
  const { listOfTodos, renderList, status } = useSelector(state => state.todosList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);  

  return (
    <>
      {
        status === "Loading" 
        ? <div>Loading...</div> 
        :<div className='content__body'>
          <TodoList todoList={ renderList }/>
          <AddNewTodo placeholder={ "New Todo" } id={ new Date().getTime() }/>
          <Pagination 
            todoListLength={ listOfTodos.length } 
            todoList={ listOfTodos }
          />
        </div>
      }
    </>

  );
}

export default App;