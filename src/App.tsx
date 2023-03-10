import React from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Input from "./components/Input";
import store from "./fitures/store";

const Container = styled.div`
	height: 50%;
	max-height: 1000px;
	min-height: 300px;
	width: 50%;
	max-width: 500px;
	min-width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 10px;
	overflow: hidden;
`;

function App() {
	return (
		<Provider store={store}>
			<Container>
				<Header />
				<Outlet />
				<Input />
			</Container>
		</Provider>
	);
}

export default App;
