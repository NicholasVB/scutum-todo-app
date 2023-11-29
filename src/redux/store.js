import { configureStore } from "@reduxjs/toolkit";
import todosList from "./slices/todosList";

export default configureStore({
	reducer: {
		todosList: todosList,
	},
});
