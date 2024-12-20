import React, { useState, useRef, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "./App.css";
import Intro from "./components/Intro";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import AkaTask from "./components/AkaTask";

function App() {
  const headerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const navigate = useNavigate();

  // const handleLinkClick = (section) => {
  //   const ref = { section1: section1Ref, section2: section2Ref, section3: section3Ref }[section];
  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  const handleLinkClickNew = useCallback((sectionId) => {
    if (sectionId === 'section0') {
      navigate('/akatask'); // Navigate to the akaTask page
    } else {
    const sectionRefs = { section1: section1Ref, section2: section2Ref, section3: section3Ref };
    const ref = sectionRefs[sectionId];
    if (ref.current) {
        const headerHeight = headerRef.current.offsetHeight; // Get the height of the header
        const elementPosition = ref.current.offsetTop;
        window.scrollTo({
            top: elementPosition - headerHeight, // Adjust the position
            behavior: 'smooth'
        });
    }
  }
}, [navigate]);

	return (
		<>
      <Header ref={headerRef} onLinkClick={handleLinkClickNew} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro ref={section1Ref} />
              <h1 className="how--it--works--header">How It Works</h1>
              <HowItWorks ref={section2Ref} />
             
            </>
          }
        />
        <Route path="/akatask" element={<AkaTask />} />
      </Routes>
      <Footer />
      {/* <Header ref={headerRef} onLinkClick={handleLinkClickNew} />
			<Intro ref={section1Ref}/> */}
      {/* <hr></hr> */}
			{/* <ValueProp ref={section2Ref}/> */}
			{/* <img className="banner" width="700px" src="./buy_banner.jpeg" alt="" /> */}
			{/* <ProductTutorial process="buying" ref={section3Ref}/> */}
			{/* <img className="banner" width="700px" src="./sell_banner.jpeg" alt="" /> */}
			{/* <ProductTutorial process="selling" /> */}
      {/* <h1 className="how--it--works--header">How It Works</h1>
      <HowItWorks ref={section2Ref}/>
			<Footer /> */}
		</>
	);
}

export default App;
