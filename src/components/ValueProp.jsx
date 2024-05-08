import React from "react";
import Value from "./Value";
import data from "../assets/data.json";

export default function ValueProp() {
  const values = data['valueProposition'].map((item) => (
		<Value key={item.value} proposition={item.value} icon={item.value}/>
	));

	return (
		<div className="proposition--container">
			{values}
		</div>
	);
}
