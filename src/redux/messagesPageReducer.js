const UPDATE_TEXT = "UPDATE-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
	chatData: [
		{
			text: "zdarov",
		},
		{
			text: "privet",
		},
		{
			text: "kak sam",
		},
		{
			text: "norm",
		},
	],
	dialogData: [
		{
			id: 1,
			name: "Vitalik",
		},
		{
			id: 2,
			name: "Kristina",
		},
		{
			id: 3,
			name: "Valera",
		},
		{
			id: 4,
			name: "Julia",
		},
	],
	updateText: "",
};

const messagesPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_TEXT:
			return {
				...state,
				updateText: action.message,
			};
		case ADD_POST:
			return {
				...state,
				chatData: [...state.chatData, { text: action.message }], // такой синтаксис использован вместо .push
				updateText: "",
			};

		default:
			return { ...state };
	}
};
export default messagesPageReducer;

export const addPostCreator = (text) => {
	return {
		type: ADD_POST,
		message: text,
	};
};

export const updateTextCreator = (text) => {
	return {
		type: UPDATE_TEXT,
		message: text,
	};
};
