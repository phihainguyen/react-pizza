import React from 'react';
import './App.css';
import Main from './components/main';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1 className="Transition">It's Pizza Time</h1>
				<Main />
			</div>
		);
	}
}

export default App;
