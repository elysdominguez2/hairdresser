import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const FormClient = ({ createAppoint }) => {
	const [appoint, setAppoint] = useState({
		client: '',
		hairdresser: '',
		date: '',
		time: '',
		service: '',
	});

	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setAppoint({
			...appoint,
			[e.target.name]: e.target.value,
		});
	};

	const { client, hairdresser, date, time, service } = appoint;

	const submitAppoint = (e) => {
		e.preventDefault();
		//VALIDAR
		if (
			client.trim() === '' ||
			hairdresser.trim() === '' ||
			date.trim() === '' ||
			time.trim() === '' ||
			service.trim() === ''
		) {
			setError(true);
			return;
		}
		setError(false);

		//ASIGNO UN ID
		appoint.id = uuidv4();

		//CREANDO LA CITA
		createAppoint(appoint);

		setAppoint({
			client: '',
			hairdresser: '',
			date: '',
			time: '',
			service: '',
		});
	};

	return (
		<Fragment>
			<h2>New Appointment</h2>

			{error ? (
				<p className="error-alert">Todos los campos son obligatorios</p>
			) : null}

			<form onSubmit={submitAppoint}>
				<label>Client Name</label>
				<input
					type="text"
					name="client"
					className="u-full-width"
					placeholder="Client Name"
					onChange={handleChange}
					value={client}
				/>

				<label>Hairdresser Name</label>
				<input
					type="text"
					name="hairdresser"
					className="u-full-width"
					placeholder="Hairdresser Name"
					onChange={handleChange}
					value={hairdresser}
				/>

				<label>Date of the Appointment</label>
				<input
					type="date"
					name="date"
					className="u-full-width"
					onChange={handleChange}
					value={date}
				/>

				<label>Appointment time</label>
				<input
					type="time"
					name="time"
					className="u-full-width"
					onChange={handleChange}
					value={time}
				/>

				<label>Service</label>
				<textarea
					name="service"
					className="u-full-width"
					onChange={handleChange}
					value={service}
				></textarea>

				<button type="submit" className="u-full-width button-primary">
					Add Appointment
				</button>
			</form>
		</Fragment>
	);
};

FormClient.propTypes = {
	createAppoint: PropTypes.func.isRequired,
};

export default FormClient;
