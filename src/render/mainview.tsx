import HelloWorld from './helloworld.js';
import React from 'react';
import ReactDOM from "react-dom";

export default class MainView {

	constructor() {
		
	}

	hello() {
		ReactDOM.render(
			<HelloWorld />,
			document.getElementById('content')
		);
	}
};