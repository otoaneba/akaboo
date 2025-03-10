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
						ref={howItWorksRef}
						id="how-it-works"
						setModalOpen={setModalOpen}
					/>
					<AkaTask ref={akaTaskRef} id="resources" />
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default App;
