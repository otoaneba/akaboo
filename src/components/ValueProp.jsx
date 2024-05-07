import React from "react";
import Value from "./Value";

export default function ValueProp() {
	return (
		<div className="proposition--container">
			<Value proposition="Sustainability" icon="environment" />
			<Value proposition="Safety" icon="safety" />
			<Value proposition="Savings" icon="money" />
		</div>
	);
}
