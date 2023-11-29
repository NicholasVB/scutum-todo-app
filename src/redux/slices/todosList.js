import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllTodos = createAsyncThunk("todosList/fetchAllTodos", async () => {
	try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=35');
        return await response.json();
        // return data;
    } catch (error) {
        console.log(error);
    }
});

const todosSlice = createSlice({
	name: "todosList",
	initialState: {
		listOfTodos: [],
		renderList: [],
		status: null,	
	},
	reducers: {
		setRenderList: (state, action) => {
			state.renderList = action.payload;
		},
        addTodo: (state, action) => {
            const { todoId, newText } = action.payload;
            return {
                ...state,
                listOfTodos: [...state.listOfTodos, { id: todoId, title: newText }]
            };
        },
        updateTodo: (state, action) => {
            const { todoId, newText } = action.payload;
            state.listOfTodos = state.listOfTodos.map(
                todo => todo.id === todoId ? { ...todo, title: newText } : todo
            )            
        },
        deleteTodo: (state, action) => {
            console.log(action.payload);
            return {
                ...state,
                listOfTodos: state.listOfTodos.filter(todo => todo.id !== action.payload)
            };
        }
    },
	extraReducers: {
		[fetchAllTodos.pending]: (state) => {
			state.status = "Loading";
		},
		[fetchAllTodos.fulfilled]: (state, action) => {
            state.listOfTodos = action.payload;
			state.status = "Loaded";
		},
		[fetchAllTodos.rejected]: (state) => {
            state.status = "Error";
		},
	},
});
export const { setRenderList, addTodo, updateTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;