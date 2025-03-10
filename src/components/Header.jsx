import PropTypes from "prop-types";

function Header({ openModal }) {
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header className="header">
			<div className="header-content">
				<div className="logo">
					<img src="./akaboo.png" alt="Akaboo logo" />
				</div>
				<nav className="nav-links">
					<button onClick={() => scrollToSection("intro")}>
						Home
					</button>
					<button onClick={() => scrollToSection("how-it-works")}>
						How It Works
					</button>
					<button onClick={() => scrollToSection("resources")}>
						Resources
					</button>
				</nav>
				<button className="cta-button" onClick={openModal}>
					Join the Waitlist
				</button>
			</div>
		</header>
	);
}

Header.propTypes = {
	openModal: PropTypes.func.isRequired,
};

export default Header;
