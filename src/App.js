import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [timeElapsed, setTimeElapsed] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeElapsed((timeElapsed) => timeElapsed + 1);
		}, 1000);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				{timeElapsed} seconds have elapsed since starting app.
			</header>
		</div>
	);
}

export default App;
