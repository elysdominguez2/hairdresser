import React, { Fragment } from 'react';
import FormClient from './components/FormClient';

function App() {
	return (
		<Fragment>
			<h1>Customer Manager</h1>
			<div className="container">
				<div className="row">
					<div className="one-half column">
						<FormClient />
					</div>
					<div className="one-half column">2</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
