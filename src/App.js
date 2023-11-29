import { useEffect, useState } from 'react';
import { TodoList } from "./components/TodoList/TodoList"
import { Pagination } from "./components/Pagination/Pagination"
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodos, setRenderList } from './redux/slices/todosList';
import './App.css';

function App() {
  const {listOfTodos, renderList, status} = useSelector(state => state.todosList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);  

  return (
    <>
      {
        status === "Loading" 
        ? <div>Loading...</div> 
        :<div>
          <TodoList todoList={renderList}/>
          <Pagination todoListLength={listOfTodos.length} todoList={listOfTodos} setRenderPage={setRenderList}/>
        </div>
      }
    </>

  );
}

export default App;