import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
	const [state, setState] = React.useState({
		value: "",
		error: false,
		loading: false,
		deleted: false,
		confirmed: false,
	});

	// const [value, setValue] = React.useState("");
	// const [error, setError] = React.useState(false);
	// const [loading, setLoading] = React.useState(false);

	console.log(state);

	const onConfirm = () => {
		setState({ ...state, loading: false, error: false, confirmed: true });
	};

	const onError = () => {
		setState({ ...state, loading: false, error: true });
	};

	const onInputChange = (event) => {
		setState({ ...state, value: event.target.value });
		if (state.error) {
			setState({ ...state, error: false });
		}
	};
	const onCheck = () => {
		setState({ ...state, loading: true, error: false });
	};

	const onDelete = () => {
		setState({ ...state, deleted: true });
	};

	const onReset = () => {
		setState({ ...state, deleted: false, confirmed: false, value: "" });
	};

	React.useEffect(() => {
		console.log("Empezando effect");

		if (state.loading) {
			// If is loading
			setTimeout(() => {
				console.log("Haciendo la validación");

				if (state.value === SECURITY_CODE) {
					// setLoading(false);
					// console.log("código correcto");
					// setState({ ...state, loading: false, error: false, confirmed: true });
					onConfirm();
				} else {
					// setError(true);
					// setLoading(false);
					// setState({ ...state, loading: false, error: true });
					onError();
				}

				// if (state.value !== SECURITY_CODE) {
				// 	setError(true);
				// }
				// setLoading(false);

				console.log("Terminando la validación");
			}, 1500);
		}

		console.log("Terminando effect");
	}, [state.loading]);

	if (!state.deleted && !state.confirmed) {
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
						// // setValue(event.target.value);
						// setState({ ...state, value: event.target.value });
						// if (state.error) {
						// 	// setError(false);
						// 	setState({ ...state, error: false });
						// }
						// //  Reemplazado por validación en line 44
						onInputChange(event);
					}}
				/>
				<button
					onClick={() => {
						// setError(false);
						// // Reemplazado por validación en line 44
						// setLoading(true);
						// setState({ ...state, loading: true, error: false });
						onCheck();
					}}>
					Comprobar
				</button>
			</div>
		);
	} else if (state.confirmed && !state.deleted) {
		return (
			<>
				<p>¿Está seguro de eliminar el useState?</p>
				<button
					onClick={() => {
						// setState({ ...state, deleted: true });
						onDelete();
					}}>
					Sí, Eliminar
				</button>
				<button
					onClick={() => {
						// setState({ ...state, deleted: false, confirmed: false, value: "" });
						onReset();
					}}>
					No, volver
				</button>
			</>
		);
	} else {
		return (
			<>
				<h2>UseState fue eliminado</h2>
				<button
					onClick={() => {
						onReset();
					}}>
					Recuperar UseState
				</button>
			</>
		);
	}
}

export { UseState };
