import PropTypes from "prop-types";

function Step({ value, proposition }) {
	return (
		<div className="step">
			<h3 className="step-title">{value}</h3>
			<p className="step-description">{proposition}</p>
		</div>
	);
}

Step.propTypes = {
	value: PropTypes.string.isRequired,
	proposition: PropTypes.string.isRequired,
};

export default Step;
