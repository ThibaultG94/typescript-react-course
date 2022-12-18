import React from 'react';

const App = () => {
	return (
		<div>
			<h2>Poster un message</h2>
			<form>
				<input
					type="text"
					placeholder="Entrez un message"
					id="inputMessage"
				/>
				<input type="submit" value="Envoyer" />
			</form>
			<h2>Liste des messages</h2>
			<div></div>
		</div>
	);
};

export default App;
