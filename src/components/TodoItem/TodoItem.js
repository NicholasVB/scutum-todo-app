import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DeleteSharp, AddSharp, WidthFull } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from '../../redux/slices/todosList';


export function TodoItem ({id, title="", isDelete=true}) {
    // const [todoText, setTodoText] = useState(title);
    const dispatch = useDispatch();
    return(
        <Box key={id} sx={{
            width: "100%",
            display: "flex",
            flex: "1 1 auto",
            columnGap: "15px",
            alignItems: "center",

        }}>
            <TextField 
                sx={{
                    width: "100%"
                }}
                id="standard-basic" 
                // value={todoText}
                value={title}
                onChange={(event) => { dispatch(updateTodo({ todoId: id, newText: event.target.value })) }} 
                // onChange={(event) => { setTodoText(event.target.value) }} 
            />
            {/* {isDelete 
                ?  */}
                <DeleteSharp onClick={() => {dispatch(deleteTodo(id))}} />
            {/* //     : <AddSharp onClick={(event) => {dispatch(addTodo({ todoId: id, newText: event.target.value }))}} />
            // }  */}
            
        </Box>
    )
}