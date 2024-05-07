import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClock,
	faLeaf,
	faSeedling,
	faCoins,
	faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function Value(props) {
	const valueType = props.icon;
	return (
		<div className="value--container">
			{valueType === "environment" && (
				<FontAwesomeIcon icon={faLeaf} className="font--awesome" />
			)}
			{valueType === "time" && (
				<FontAwesomeIcon icon={faClock} className="font--awesome" />
			)}
			{valueType === "safety" && (
				<FontAwesomeIcon
					icon={faShieldHeart}
					className="font--awesome"
				/>
			)}
			{valueType === "money" && (
				<FontAwesomeIcon icon={faCoins} className="font--awesome" />
			)}
			<h3>{props.proposition}</h3>
			<p>Example description of the proposition.</p>
		</div>
	);
}
