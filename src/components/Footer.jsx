import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";

function Footer() {
	return (
		<footer className="footer">
			<div className="icon-brand">
				<img className="logo" src="./akaboo_head.png" width="50px" />
				{/* <a className="navbar-brand" href="/">
						Akaboo World
					</a> */}
			</div>
			<a className="footer-btn" href="mailto:spiceitglobal@gmail.com">
				Email Us
			</a>
			<address>Gothenburg, Sweden</address>
			<div className="legal">
				<p>
					&copy;{" "}
					<span>
						<FontAwesomeIcon className="icon" icon={faPepperHot} />{" "}
					</span>
					2024 Spice IT Global. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export { Footer };
