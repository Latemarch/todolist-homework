import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ToDo from "../components/ToDo";
import { IToDo } from "../fitures/store";
import { v4 as uuid } from "uuid";

export interface RootState {
	toDoList: {
		toDos: IToDo[];
	};
	filter: {
		filter: "All" | "Active" | "Completed" | "detail";
	};
}
export const Ul = styled.ul`
	height: 80%;
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: papayawhip;
	list-style: none;
	padding: 10px;
	margin: 0;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;
export default function All() {
	const toDos = useSelector((state: RootState) => state.toDoList.toDos);
	return (
		<Ul>
			{toDos.map((toDo) => (
				<ToDo key={uuid()} toDo={toDo} />
			))}
		</Ul>
	);
}
