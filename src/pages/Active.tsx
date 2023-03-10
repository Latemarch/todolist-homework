import { useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { IToDo } from "../features/store";
import { Ul } from "./All";
import { v4 as uuid } from "uuid";
interface RootState {
	toDoList: {
		toDos: IToDo[];
	};
	filter: {
		filter: "All" | "Active" | "Completed";
	};
}
export default function Active() {
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
