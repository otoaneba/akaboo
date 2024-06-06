import React from "react";
import Value from "./Value";
import data from "../assets/data.json";

const ValueProp = React.forwardRef(( {id, style }, ref) =>  {
  const values = data['valueProposition'].map((item) => (
		<Value key={item.value} proposition={item.value} icon={item.value}/>
	));

	return (
		<div className="proposition--container" ref={ref} id={id}>
			{values}
		</div>
	);
});

export default ValueProp;