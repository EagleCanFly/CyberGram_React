import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


function App(props) {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />

				<Nav />
				<div className="content-wrapper">
					<Route path="/profile" component={Profile}/>
					<Route path="/messages" render={() => <Messages names={props.names} chat={props.chat}{...props}/>} />
					<Route path="/news" component={News} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
