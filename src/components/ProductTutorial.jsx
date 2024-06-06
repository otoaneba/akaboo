import React from "react";
import Step from "./Step";
import data from "../assets/data.json";

const ProductTutorial = React.forwardRef((props, ref) => {
	const process = data[props.process].map((item) => (
		<Step
			key={item.step}
			step={item.step}
			value={item.value}
			proposition={item.proposition}
		/>
	));

	return (
		<div className="product--tutorial" ref={ref}>
			<h2 className="tutorial--title">
				{`${props.process}`} with akaboo
			</h2>
			<div className="step--container">{process}</div>
		</div>
	);
});

export default ProductTutorial;