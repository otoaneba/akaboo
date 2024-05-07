import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import ValueProp from "./components/ValueProp";
import ProductTutorial from "./components/ProductTutorial";
import { Footer } from "./components/Footer";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Intro />
			<ValueProp />
			{/* <img className="banner" width="700px" src="./buy_banner.jpeg" alt="" /> */}
			<ProductTutorial process="buying" />
			{/* <img className="banner" width="700px" src="./sell_banner.jpeg" alt="" /> */}
			<ProductTutorial process="selling" />
			<Footer />
		</>
	);
}

export default App;
