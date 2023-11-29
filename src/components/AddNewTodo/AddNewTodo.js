import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AddSharp } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addTodo} from '../../redux/slices/todosList';


export function AddNewTodo ({id, title=""}) {
    const [todoText, setTodoText] = useState(title);
    const dispatch = useDispatch();
    return(
        <Box key={id}
        sx={{
            display: "flex",
            width: "100%",
            columnGap: "15px",
            alignItems: "center",
        }}
        >
            <TextField 
                sx={{
                    width: "100%",
                }}
                id="standard-basic" 
                value={todoText}
                onChange={(event) => { setTodoText(event.target.value) }} 
            />
            <AddSharp onClick={() => {
                dispatch(addTodo({ todoId: id, newText: todoText}))
                setTodoText("")
                }} 
            />            
        </Box>
    )
}