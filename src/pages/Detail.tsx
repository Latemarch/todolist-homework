import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "./All";

const Wrapper = styled.div`
	font-weight: 600;
	font-size: 1.2rem;
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
export default function Detail() {
	const location = useLocation();
	const id = location.pathname.split("/").pop();
	const toDo = useSelector((state: RootState) => state.toDoList.toDos).filter(
		(t) => t.id === id
	)[0];

	return <Wrapper>{toDo.detail}</Wrapper>;
}
