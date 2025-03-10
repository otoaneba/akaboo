import "./Header.css";

function Header() {
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
					<button onClick={() => scrollToSection("value-prop")}>
						About
					</button>
					<button onClick={() => scrollToSection("buying")}>
						Services
					</button>
					<button onClick={() => scrollToSection("akatask")}>
						Resources
					</button>
				</nav>
				<button
					className="cta-button"
					onClick={() => scrollToSection("contact")}
				>
					Join Waitlist
				</button>
			</div>
		</header>
	);
}

export default Header;
