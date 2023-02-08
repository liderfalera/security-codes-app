import React from "react";
import { UseState } from "./UseState";
import { ClassState } from "./ClassState";
import { UseReducer } from "./UseReducer";

import "./App.css";

function App() {
	return (
		<div className="App">
			<UseState name="UseState" />
			<br />
			<hr />
			<ClassState name="ClassState" />
			<br />
			<hr />
			<UseReducer name="Use Reducer" />
		</div>
	);
}

export default App;
