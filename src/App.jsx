import { useRef, useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import ProductTutorial from "./components/ProductTutorial";
import AkaTask from "./components/AkaTask";

function App() {
	const introRef = useRef(null);
	const buyingRef = useRef(null);
	const sellingRef = useRef(null);
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
					<div className="tutorials-section">
						<ProductTutorial process="buying" ref={buyingRef} />
						<ProductTutorial process="selling" ref={sellingRef} />
					</div>
					<AkaTask ref={akaTaskRef} id="akatask" />
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default App;
