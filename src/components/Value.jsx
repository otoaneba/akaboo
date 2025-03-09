import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLeaf,
	faCoins,
	faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function Value(props) {
	const valueType = props.icon;
	return (
		<div className="value--container">
			{valueType === "Sustainability" && (
				<FontAwesomeIcon icon={faLeaf} className="font--awesome" />
			)}
			{valueType === "Safety" && (
				<FontAwesomeIcon
					icon={faShieldHeart}
					className="font--awesome"
				/>
			)}
			{valueType === "Savings" && (
				<FontAwesomeIcon icon={faCoins} className="font--awesome" />
			)}
			<h3>{props.proposition}</h3>
		</div>
	);
}

Value.propTypes = {
	icon: PropTypes.string.isRequired,
	proposition: PropTypes.string.isRequired,
};
