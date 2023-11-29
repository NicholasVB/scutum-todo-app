import { useState, useEffect } from "react";
import { Icon } from "../Icon/Icon";
import { useDispatch } from "react-redux";
import "./Pagination.scss"

export function Pagination({todoList, setRenderPage}) {
    const dispatch = useDispatch();
    const todoListLength = todoList.length;
    const ChankSize = 10;
    const max = Math.ceil(todoListLength/ChankSize);
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        const endPoiner = currentPage * ChankSize;
        const startPoiner = endPoiner - ChankSize;
        const renderPage = todoList.slice(startPoiner, endPoiner);

        dispatch(setRenderPage(renderPage));

    }, [currentPage, todoList]);
    
    const paginate = (currentPage) => {
        if (currentPage < 1 || currentPage > max) return;
        setCurrentPage(currentPage);
    }

    return(
        <div className="pagination"> 
            <Icon onClick={() => {paginate(currentPage - 1)}} imgLink="/icons/arrow-bottom.svg" />
            <div>
                <p>{currentPage} of {max}</p>
            </div>
            <Icon onClick={() => {paginate(currentPage + 1)}} imgLink="/icons/arrow-bottom.svg" /> 
        </div>
    )
}