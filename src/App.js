import React, { Fragment, useState, useEffect } from 'react';
import FormClient from './components/FormClient';
import Appoint from './components/Appoint';
//import userEvent from '@testing-library/user-event';

function App() {
	let initialAppoints = JSON.parse(localStorage.getItem('appoints'));
	if (!initialAppoints) {
		initialAppoints = [];
	}
	//Listando todas las citas
	const [appoints, setAppoints] = useState(initialAppoints);

	useEffect(() => {
		let initialAppoints = JSON.parse(localStorage.getItem('appoints'));
		if (initialAppoints) {
			localStorage.setItem('appoints', JSON.stringify(appoints));
		} else {
			localStorage.setItem('appoints', JSON.stringify([]));
		}
	}, [appoints]);

	const createAppoint = (appoint) => {
		setAppoints([...appoints, appoint]);
	};

	const removeAppoint = (id) => {
		const newAppoints = appoints.filter((appoint) => appoint.id !== id);
		setAppoints(newAppoints);
	};

	const tittle =
		appoints.length === 0 ? 'No appointments' : 'Manage your Appointments';

	return (
		<Fragment>
			<h1>Customer Manager</h1>
			<div className="container">
				<div className="row">
					<div className="one-half column">
						<FormClient createAppoint={createAppoint} />
					</div>
					<div className="one-half column">
						<h2>{tittle}</h2>
						{appoints.map((appoint) => (
							<Appoint
								key={appoint.id}
								appoint={appoint}
								removeAppoint={removeAppoint}
							/>
						))}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
