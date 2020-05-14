import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Nav state={props.state.sidebar}/> 
				<div className="content-wrapper">
					<Route path="/profile" render={() => <ProfileContainer state={props.state.profilePage} dispatch={props.dispatch}/>} />
					<Route path="/messages" render={() => <MessagesContainer state={props.state.messagesPage} dispatch={props.dispatch} />} />
					<Route path="/news" component={News} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	);
	
}
export default App;
