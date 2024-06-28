import './App.css';
import Palette from './components/Palette';
import { init, subscribe } from './socketApi';
import { useEffect, useState } from 'react';

function App() {

  const [activeColor, setActiveColor] = useState("#282c34");

	useEffect(() => {
		init();

		subscribe((color) => {
			setActiveColor(color);
		});
	}, []);

	return (
		<div className="App" style={{ backgroundColor: activeColor }}>
			<h1>{activeColor}</h1>
			<Palatte activeColor={activeColor} />
		</div>
	);
}

export default App;
