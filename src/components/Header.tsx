import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IFilter, TFilter, updateFilter } from "../features/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../pages/All";
const HeaderWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 10%;
	padding: 10px;
	align-items: center;
	justify-content: space-between;
	background-color: tomato;
`;
const HeaderButton = styled.button<{ filter: string; activeFilter: string }>`
	background: none;
	font-size: 1.2rem;
	color: ${(p) => (p.activeFilter === p.filter ? "white" : "black")};
	font-weight: 600;
	width: 100%;
	border: none;
	&:hover {
		color: #f3ff85;
	}
`;

const filters: TFilter[] = ["All", "Active", "Completed"];

export default function Header() {
	const activeFilter = useSelector((state: RootState) => state.filter.filter);
	const dispatch = useDispatch();
	return (
		<HeaderWrapper>
			{filters.map((filter, idx) => (
				<Link key={idx} to={`${filter.toLowerCase()}`}>
					<HeaderButton
						onClick={() => dispatch(updateFilter(filter))}
						filter={filter}
						activeFilter={activeFilter}
					>
						{filter.toUpperCase()}
					</HeaderButton>
				</Link>
			))}
		</HeaderWrapper>
	);
}
