const SEND_WALL_POST = "SEND-WALL-POST";
const UPDATE_PROFILE_TEXT = "UPDATE-PROFILE-TEXT";

let initialState = {
	msgInfo: [
		{
			likes: 0,
			message: "Hey dude",
		},
		{
			likes: 5,
			message: "How's it going?",
		},
		{
			likes: 1486,
			message: "Not too bad",
		},
	],
	updatedText: "12",
};

const profilePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_WALL_POST:
			let msg = {
				likes: Math.floor(Math.random() * 10),
				message: action.message,
			};
			state.msgInfo.push(msg);
			state.updatedText = "";
			return state;
		case UPDATE_PROFILE_TEXT:
			state.updatedText = action.message;
			return state;
		default:
			return state;
	}
};
export default profilePageReducer;

export const sendWallPostCreator = (text) => {
	return {
		type: SEND_WALL_POST,
		message: text,
	};
};
export const updateWallPostCreator = (text) => {
	return {
		type: UPDATE_PROFILE_TEXT,
		message: text,
	};
};
