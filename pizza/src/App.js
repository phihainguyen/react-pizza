import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Main from '../components/main/main';

class App extends React.Component {
	render() {
		return (
			<Provider store={store} className="App">
				<h1 className="Transition">It's Pizza Time</h1>
				<Main />
			</Provider>
		);
	}
}

export default App;
