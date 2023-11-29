import { useEffect, useState } from 'react';
import { TodoList } from "./components/TodoList/TodoList"
import { Pagination } from "./components/Pagination/Pagination"
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodos, setRenderList } from './redux/slices/todosList';
import { AddNewTodo } from './components/AddNewTodo/AddNewTodo';
import './App.scss';

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
        :<div className='content__body'>
          <TodoList todoList={renderList}/>
          <AddNewTodo placeholder={"New Todo"} id={new Date().getTime()}/>
          <Pagination todoListLength={listOfTodos.length} todoList={listOfTodos} setRenderPage={setRenderList}/>
        </div>
      }
    </>

  );
}

export default App;