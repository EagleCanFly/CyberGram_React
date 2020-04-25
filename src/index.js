import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogData = [
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
  ];

  let chatData = [
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
	];
ReactDOM.render(

  
  <React.StrictMode>
    <App names={dialogData} chat={chatData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();