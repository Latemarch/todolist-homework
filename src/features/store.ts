import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface IToDo {
	id: string;
	text: string;
	status: "Active" | "Completed";
	detail: string;
}
export interface IToDoList {
	toDos: IToDo[];
}
const initialState: IToDoList = {
	toDos: [
		{ id: "1", text: "work", status: "Active", detail: "" },
		{ id: "2", text: "study", status: "Active", detail: "" },
		{ id: "3", text: "shopping", status: "Active", detail: "" },
	],
};
const toDoSlice = createSlice({
	name: "toDoList",
	initialState,
	reducers: {
		addToDo: (state, action: PayloadAction<string>) => {
			const text = action.payload;
			text.trim().length &&
				state.toDos.push({
					id: uuid(),
					text,
					status: "Active",
					detail: "",
				});
		},

		addText: (
			state,
			action: PayloadAction<{ id: string | undefined; text: string }>
		) => {
			const { id, text } = action.payload;
			const idx = state.toDos.findIndex((t) => t.id === id);
			if (text.trim().length) {
				if (idx > -1) {
					state.toDos[idx].detail = text;
				} else {
					state.toDos.push({
						id: uuid(),
						text,
						status: "Active",
						detail: "",
					});
				}
			}
		},
		deleteToDo: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const idx = state.toDos.findIndex((t) => t.id === id);
			idx && state.toDos.splice(idx, 1);
		},
		updateToDo: (
			state,
			action: PayloadAction<{ id: string; status: "Active" | "Completed" }>
		) => {
			const { status, id } = action.payload;
			const idx = state.toDos.findIndex((t) => t.id === id);
			const newStatus = status === "Active" ? "Completed" : "Active";
			state.toDos[idx].status = newStatus;
		},
	},
});

export const { addToDo, deleteToDo, updateToDo, addText } = toDoSlice.actions;

export interface IFilter {
	filter: "Active" | "Completed" | "All" | "Detail";
}
export type TFilter = "Active" | "Completed" | "All" | "Detail";
const initialFilterState: IFilter = { filter: "All" };
const filterSlice = createSlice({
	name: "filter",
	initialState: initialFilterState,
	reducers: {
		updateFilter: (state, action: PayloadAction<TFilter>) => {
			state.filter = action.payload;
		},
	},
});

export const { updateFilter } = filterSlice.actions;

export default configureStore({
	reducer: { toDoList: toDoSlice.reducer, filter: filterSlice.reducer },
});
