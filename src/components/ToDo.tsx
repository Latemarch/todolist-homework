import { useDispatch } from "react-redux";
import { deleteToDo, IToDo, updateFilter, updateToDo } from "../fitures/store";
import { BsTrash } from "react-icons/bs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Li = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5px;
	background-color: #f2d8a9;
	padding: 2px;
	border-radius: 5px;
	&:hover {
		cursor: pointer;
	}
`;
const ListContent = styled.li`
	list-style: none;
	display: flex;
	align-items: center;
	width: 80%;
`;
const ListText = styled.p`
	display: flex;
	width: 80%;
	margin: 0;
	margin-left: 10px;
`;
export default function ToDo({ toDo }: { toDo: IToDo }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleClick = () => {
		dispatch(updateFilter("Detail"));
		navigate(`/${toDo.id}`);
	};
	return (
		<Li>
			<ListContent>
				<input
					type={"checkbox"}
					checked={toDo.status === "Completed"}
					onChange={() => dispatch(updateToDo(toDo))}
				/>
				<ListText onClick={handleClick}>{toDo.text}</ListText>
			</ListContent>
			<BsTrash onClick={() => dispatch(deleteToDo(toDo.id))} />
		</Li>
	);
}
