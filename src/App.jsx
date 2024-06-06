import { useState, useRef } from "react";
import "./App.css";
import Intro from "./components/Intro";
import ValueProp from "./components/ValueProp";
import ProductTutorial from "./components/ProductTutorial";
import { Footer } from "./components/Footer";
import Header from "./components/Header";

function App() {
	const [count, setCount] = useState(0);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const handleLinkClick = (section) => {
    const ref = { section1: section1Ref, section2: section2Ref, section3: section3Ref }[section];
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    console.log('clicked')
  };

	return (
		<>
      <Header onLinkClick={handleLinkClick} />
			<Intro ref={section1Ref}/>
			<ValueProp ref={section2Ref}/>
			{/* <img className="banner" width="700px" src="./buy_banner.jpeg" alt="" /> */}
			<ProductTutorial process="buying" ref={section3Ref}/>
			{/* <img className="banner" width="700px" src="./sell_banner.jpeg" alt="" /> */}
			<ProductTutorial process="selling" />
			<Footer />
		</>
	);
}

export default App;
