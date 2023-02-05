import React from "react";

class Loading extends React.Component {
	componentWillUnmount() {
		console.log("WillUnMount component");
	}

	render() {
		return (
			<p>
				<small>Cargando...</small>
			</p>
		);
	}
}

export { Loading };
