import React from "react";
import Step from "./Step";
import data from "../assets/data.json";
import PropTypes from "prop-types";

const ProductTutorial = React.forwardRef(({ process, id, title }, ref) => {
	const steps = data[process].map((item) => (
		<Step
			key={item.step}
			step={item.step}
			value={item.value}
			proposition={item.proposition}
		/>
	));

	return (
		<div className="product--tutorial" ref={ref} id={id}>
			<h2 className="tutorial--title">{title}</h2>
			<div className="step--container">{steps}</div>
		</div>
	);
});

ProductTutorial.propTypes = {
	process: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

ProductTutorial.displayName = "ProductTutorial";

export default ProductTutorial;
