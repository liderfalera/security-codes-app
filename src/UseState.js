import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
	const [state, setState] = React.useState({
		value: "",
		error: false,
		loading: false,
	});

	// const [value, setValue] = React.useState("");
	// const [error, setError] = React.useState(false);
	// const [loading, setLoading] = React.useState(false);

	console.log(state);

	React.useEffect(() => {
		console.log("Empezando effect");

		if (state.loading) {
			// If is loading
			setTimeout(() => {
				console.log("Haciendo la validación");

				if (state.value === SECURITY_CODE) {
					// setLoading(false);
					// console.log("código correcto");
					setState({ ...state, loading: false, error: false });
				} else {
					// setError(true);
					// setLoading(false);
					setState({ ...state, loading: false, error: true });
				}

				// if (state.value !== SECURITY_CODE) {
				// 	setError(true);
				// }
				// setLoading(false);

				console.log("Terminando la validación");
			}, 3000);
		}

		console.log("Terminando effect");
	}, [state.loading]);

	return (
		<div>
			<h2>Eliminar {name}</h2>
			<p>
				Por favor, escribe el código de seguridad para comprobar que quieres
				eliminar.
			</p>
			{state.error && !state.loading && (
				<p>
					<small>Error: Código incorrecto</small>
				</p>
			)}
			{state.loading && <p>Cargando...</p>}
			<input
				placeholder="Código de seguridad"
				value={state.value}
				onChange={(event) => {
					// setValue(event.target.value);
					setState({ ...state, value: event.target.value });
					if (state.error) {
						// setError(false);
						setState({ ...state, error: false });
					}
					//  Reemplazado por validación en line 44
				}}
			/>
			<button
				onClick={() => {
					// setError(false);
					// // Reemplazado por validación en line 44
					// setLoading(true);
					setState({ ...state, loading: true, error: false });
				}}>
				Comprobar
			</button>
		</div>
	);
}

export { UseState };
