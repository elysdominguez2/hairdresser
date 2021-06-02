import React from 'react';
import PropTypes from 'prop-types';

const Appoint = ({ appoint, removeAppoint }) => (
	<div className="appoint">
		<p>
			Client: <span>{appoint.client} </span>
		</p>
		<p>
			Hairdresser: <span>{appoint.hairdresser} </span>
		</p>
		<p>
			Date: <span>{appoint.date} </span>
		</p>
		<p>
			Time: <span>{appoint.time} </span>
		</p>
		<p>
			Service: <span>{appoint.service} </span>
		</p>

		<button
			className="button eliminate u-full-width"
			onClick={() => removeAppoint(appoint.id)}
		>
			Remove &times;
		</button>
	</div>
);

Appoint.propTypes = {
	appoint: PropTypes.object.isRequired,
	removeAppoint: PropTypes.func.isRequired,
};

export default Appoint;
