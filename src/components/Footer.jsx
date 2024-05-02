import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";

function Footer() {
	return (
		<footer class="footer">
				<div class="icon-brand">
					<FontAwesomeIcon className="icon" icon={faPepperHot} />
					<a class="navbar-brand" href="/">
						Akaboo World
					</a>
				</div>
				<a class="footer-btn" href="mailto:spiceitglobal@gmail.com">
					Email Us
				</a>
				<address>Gothenburg, Sweden</address>
				<div class="legal">
					<p>&copy; 2024 Spice It Global. All rights reserved.</p>
				</div>
		</footer>
	);
}

export { Footer };
