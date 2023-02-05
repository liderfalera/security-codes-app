import React from "react";

function UseState({ name }) {
	const [error, setError] = React.useState(true);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		console.log("Empezando effect");

		if (loading) {
			// If is loading
			setTimeout(() => {
				console.log("Haciendo la validación");
				setLoading(false);
				console.log("Terminando la validación");
			}, 3000);
		}

		console.log("Terminando effect");
	}, [loading]);

	return (
		<div>
			<h2>Eliminar {name}</h2>
			<p>
				Por favor, escribe el código de seguridad para comprobar que quieres
				eliminar.
			</p>
			{error && (
				<p>
					<small>Error: Código incorrecto</small>
				</p>
			)}
			{loading && <p>Cargando...</p>}
			<input placeholder="Código de seguridad" />
			<button onClick={() => setLoading(true)}>Comprobar</button>
		</div>
	);
}

export { UseState };
