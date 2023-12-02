import { Box, TextField } from '@mui/material';
import styled from '@emotion/styled';
import { DeleteSharp } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../../redux/slices/todosList';

const StyledBox  = styled(Box)`
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    column-gap: 15px;
    align-items: center;
`;

const StyledTextField  = styled(TextField)`
    width: 100%;
`;

export function TodoItem ({id, title="", orderNumber}) {
    const dispatch = useDispatch();

    return(
        <StyledBox 
        // these classes are needed so that the last element in chank occupies 2 columns
        className={`${orderNumber % 2 ? "odd" : "even"}`}
        >
            <StyledTextField 
                id="standard-basic"
                value={title}
                onChange={(event) => { dispatch(updateTodo({ todoId: id, newText: event.target.value })) }}
            />
            <DeleteSharp onClick={() => {dispatch(deleteTodo(id))}} />
        </StyledBox>
    )
}