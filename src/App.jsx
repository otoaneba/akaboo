import { useRef, useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import ProductTutorial from "./components/ProductTutorial";
import AkaTask from "./components/AkaTask";

function App() {
	const introRef = useRef(null);
	const howItWorksRef = useRef(null);
	const featuresRef = useRef(null);
	const akaTaskRef = useRef(null);

	const [modalOpen, setModalOpen] = useState(false);
	const openModal = () => setModalOpen(true);

	return (
		<div className="app">
			<Header openModal={openModal} />
			<div className="content-wrapper">
				<main>
					<Intro
						ref={introRef}
						modalOpen={modalOpen}
						setModalOpen={setModalOpen}
					/>
					<ProductTutorial
						process="selling"
						ref={howItWorksRef}
						id="how-it-works"
						title="How It Works"
					/>
					<ProductTutorial
						process="features"
						ref={featuresRef}
						id="features"
						title="Features"
					/>
					<AkaTask ref={akaTaskRef} id="resources" />
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default App;
