import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: false,
			loading: false,
		};
	}

	// componentDidMount() {
	// 	console.log("DidMount component");
	// }

	componentDidUpdate() {
		console.log("DidUpdate component");
		if (this.state.loading) {
			// If is loading
			setTimeout(() => {
				console.log("Haciendo la validación");

				if (this.state.value === SECURITY_CODE) {
					this.setState({ loading: false, error: false });
				} else {
					this.setState({ loading: false, error: true });
				}

				console.log("Terminando la validación");
			}, 3000);
		}
	}

	render() {
		return (
			<div>
				<h2>Eliminar {this.props.name}</h2>
				<p>
					Por favor, escribe el código de seguridad para comprobar que quieres
					eliminar.
				</p>
				{this.state.error && !this.state.loading && (
					<p>
						<small>Error: Código incorrecto</small>
					</p>
				)}

				{this.state.loading && <Loading />}

				<input
					placeholder="Código de seguridad"
					onChange={(event) => {
						this.setState({ value: event.target.value });
					}}
				/>
				<button onClick={() => this.setState({ loading: true })}>
					Comprobar
				</button>
			</div>
		);
	}
}

export { ClassState };
