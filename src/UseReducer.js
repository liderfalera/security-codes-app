import React from "react";

const SECURITY_CODE = "paradigma";

function UseReducer({ name }) {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	// const [value, setValue] = React.useState("");
	// const [error, setError] = React.useState(false);
	// const [loading, setLoading] = React.useState(false);

	// console.log(state);

	// const onInputChange = (event) => {
	// 	setState({ ...state, value: event.target.value });
	// 	if (state.error) {
	// 		setState({ ...state, error: false });
	// 	}
	// };

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
					dispatch({ type: "CONFIRM" });
				} else {
					// setError(true);
					// setLoading(false);
					// setState({ ...state, loading: false, error: true });
					dispatch({ type: "ERROR" });
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
						dispatch({ type: "WRITE", payload: event.target.value });
					}}
				/>
				<button
					onClick={() => {
						// setError(false);
						// // Reemplazado por validación en line 44
						// setLoading(true);
						// setState({ ...state, loading: true, error: false });
						dispatch({ type: "CHECK" });
					}}>
					Comprobar
				</button>
			</div>
		);
	} else if (state.confirmed && !state.deleted) {
		return (
			<>
				<p>¿Está seguro de eliminar el {name}?</p>
				<button
					onClick={() => {
						// setState({ ...state, deleted: true });
						dispatch({ type: "DELETE" });
					}}>
					Sí, Eliminar
				</button>
				<button
					onClick={() => {
						// setState({ ...state, deleted: false, confirmed: false, value: "" });
						dispatch({ type: "RESET" });
					}}>
					No, volver
				</button>
			</>
		);
	} else {
		return (
			<>
				<h2>{name} fue eliminado</h2>
				<button
					onClick={() => {
						dispatch({ type: "RESET" });
					}}>
					Recuperar UseState
				</button>
			</>
		);
	}
}

// ! -----------------------------------------------
// ! -----------------------------------------------
// ! -----------------------------------------------

const initialState = {
	value: "paradigma",
	error: false,
	loading: false,
	deleted: false,
	confirmed: false,
};

// ! --------------
// ? REDUCER IF
// ! --------------
// const reducer = (state, action) => {};

// const reducerIf = (state, action) => {
// 	if (action.type === "ERROR") {
// 		return {
// 			...state,
// 			error: true,
// 			loading: false,
// 		};
// 	} else if (action.type === "CHECK") {
// 		return {
// 			...state,
// 			loading: true,
// 		};
// 	} else {
// 		return {
// 			...state,
// 		};
// 	}
// };

// ! --------------
// ? REDUCER SWITCH
// ! --------------

// const reducerSwitch = (state, action) => {
// 	switch (action.type) {
// 		case "ERROR":
// 			return {
// 				...state,
// 				error: true,
// 				loading: false,
// 			};
// 		case "CHECK":
// 			return {
// 				...state,
// 				loading: true,
// 			};
// 		default:
// 			return {
// 				...state,
// 			};
// 	}
// };

// ! --------------
// ? REDUCER OBJECT
// ! --------------

const reducerObj = (state, payload) => ({
	CONFIRM: { ...state, loading: false, error: false, confirmed: true },
	ERROR: { ...state, loading: false, error: true },
	CHECK: { ...state, loading: true, error: false },
	DELETE: { ...state, deleted: true },
	RESET: { ...state, deleted: false, confirmed: false, value: "" },
	WRITE: { ...state, value: payload },
});

const reducer = (state, action) => {
	if (reducerObj(state)[action.type]) {
		return reducerObj(state, action.payload)[action.type];
	} else {
		return state;
	}
};

export { UseReducer };
