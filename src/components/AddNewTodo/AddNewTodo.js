import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import styled from '@emotion/styled';
import { AddSharp } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/todosList';

const StyledBox  = styled(Box)`
  display: flex;
  width: 100%;
  column-gap: 15px;
  align-items: center;
`;

const StyledTextField = styled(TextField)`
    width: 100%
`;

export function AddNewTodo ({id, placeholder}) {
    const [todoText, setTodoText] = useState("");
    const dispatch = useDispatch();
    return(
        <StyledBox key={id}>
            <StyledTextField
                id="standard-basic"
                placeholder={placeholder} 
                value={todoText}
                onChange={(event) => { setTodoText(event.target.value) }} 
            />
            <AddSharp onClick={() => {
                dispatch(addTodo({ todoId: id, newText: todoText}))
                setTodoText("")
                }}
            />            
        </StyledBox>
    )
}