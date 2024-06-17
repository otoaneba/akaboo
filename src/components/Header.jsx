import React, { forwardRef } from 'react';
import "./Header.css"

const Header = forwardRef(({ onLinkClick }, ref) => {
    return (
        <header className="header" ref={ref}>
            <nav className="header--container">
                <button className="button" onClick={() => onLinkClick('section1')}>Join Us</button>
                <button className="button" onClick={() => onLinkClick('section2')}>How It Works</button>
                {/* <button onClick={() => onLinkClick('section3')}>Section 3</button> */}
            </nav>
        </header>
    );
});

export default Header;