import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";

let store = {
	_state: {
		profilePage: {
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
		},
		messagesPage: {
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
			updateText: "123",
		},
		sidebar: {
			friends: [
				{
					name: "Kristina",
					avatar:
						"https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP4312-NPUB31721_00-UASMOBILEN000037/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000",
				},
				{
					name: "Kirkorov",
					avatar:
						"data:image/jpeg;base64,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",
				},
			],
		},
	},
	getState() {
		return this._state;
	},
	addPost(textMessage) {
		let msg = {
			text: textMessage,
		};
		this._state.messagesPage.chatData.push(msg);
		this._state.messagesPage.updateText = "";
		this.renderEntireDocument(this._state);
	},
	updateText(textMessage) {
		this._state.messagesPage.updateText = textMessage;
		this.renderEntireDocument(this._state);
	},
	subscriber(observer) {
		this.renderEntireDocument = observer;
	},
	renderEntireDocument: () => {},

	dispatch(action) {
		debugger;
		this._state.profilePage = profilePageReducer(this._state.profilePage, action);
		this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);
		this.renderEntireDocument(this._state);
	},
};

export default store;
