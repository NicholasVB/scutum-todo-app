import { useState, useEffect } from "react";
// import { Icon } from "../Icon/Icon";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useDispatch } from "react-redux";
import "./Pagination.scss"

export function Pagination({todoList, setRenderPage}) {
    const dispatch = useDispatch();
    const todoListLength = todoList.length;
    const ChankSize = 10;
    // fix bug 0 of 0. When we delete all todo. Then max = 0 and we set it in 1
    const max = Math.ceil(todoListLength/ChankSize) || 1;
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        // fix bug when we delete all todo in chunk and see for example 5 of 4
        if (currentPage > max) { setCurrentPage(max)}

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
            <ArrowBackIos onClick={() => {paginate(currentPage - 1)}} imgLink="/icons/arrow-bottom.svg" />
            <div>
                <p>{currentPage} of {max}</p>
            </div>
            <ArrowForwardIos onClick={() => {paginate(currentPage + 1)}} imgLink="/icons/arrow-bottom.svg" /> 
        </div>
    )
}