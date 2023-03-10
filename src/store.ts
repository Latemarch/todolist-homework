interface IState {
	toDos: {
		id: string | number;
		text: string;
		status: string;
		detail: string;
	}[];
}

export const initialState: IState = {
	toDos: [
		{ id: 1, text: "work", status: "Active", detail: "" },
		{ id: 2, text: "study", status: "Active", detail: "" },
		{ id: 3, text: "shopping", status: "Active", detail: "" },
	],
};
type AddAction = { type: "add"; payload: string };
type Action = AddAction;

export function reducer(state: IState, action: Action): IState {
	const { payload: text } = action;
	switch (action.type) {
		case "add":
			const result = {
				...state,
				toDos: [
					...state.toDos,
					{
						id: `${text}${state.toDos.length}`,
						text,
						status: "Active",
						detail: "",
					},
				],
			};
			console.log(state.toDos);
			return result;
	}
}
