import { useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { IToDo } from "../fitures/store";
import { v4 as uuid } from "uuid";
import { Ul } from "./All";

interface RootState {
	toDoList: {
		toDos: IToDo[];
	};
	filter: {
		filter: "All" | "Active" | "Completed";
	};
}
export default function Completed() {
	const toDos = useSelector((state: RootState) => state.toDoList.toDos);
	const filter = useSelector((state: RootState) => state.filter.filter);
	return (
		<Ul>
			{toDos
				.filter((toDo) => toDo.status === filter)
				.map((toDo) => (
					<ToDo key={uuid()} toDo={toDo} />
				))}
		</Ul>
	);
}
