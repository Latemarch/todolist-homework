import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { addText } from "../features/store";
const Form = styled.form`
	background-color: tomato;
	height: 10%;
	width: 100%;
`;
const InputTodo = styled.input`
	height: 100%;
	width: 80%;
	font-size: 1.2rem;
	padding: 10px;
	border: none;
	background-color: skyblue;
	&:focus {
		outline: none;
	}
`;
const Button = styled.button`
	background: none;
	border: none;
	height: 100%;
	width: 20%;
	font-size: 1.2rem;
`;
export default function Input() {
	const [text, setText] = useState<string>("");
	const dispatch = useDispatch();
	const loc = useLocation();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setText(e.target.value);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		const id = loc.pathname.split("/").pop();
		e.preventDefault();
		dispatch(addText({ id, text }));
		setText("");
	};

	return (
		<Form onSubmit={handleSubmit}>
			<InputTodo
				value={text}
				placeholder={"Add ToDo.."}
				onChange={handleChange}
			></InputTodo>
			<Button>Add</Button>
		</Form>
	);
}
