import { useRef } from "react";
import "./App.css";
import Intro from "./components/Intro";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import ValueProp from "./components/ValueProp";
import ProductTutorial from "./components/ProductTutorial";
import AkaTask from "./components/AkaTask";

function App() {
	const introRef = useRef(null);
	const valuePropRef = useRef(null);
	const buyingRef = useRef(null);
	const sellingRef = useRef(null);
	const akaTaskRef = useRef(null);

	return (
		<div className="app">
			<Header />
			<div className="content-wrapper">
				<main>
					<Intro ref={introRef} />
					<ValueProp ref={valuePropRef} />
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
