import React from "react";
import { UseState } from "./UseState";
import { ClassState } from "./ClassState";

import "./App.css";

function App() {
	return (
		<div className="App">
			<UseState />
			<br />
			<hr />
			<ClassState />
		</div>
	);
}

export default App;