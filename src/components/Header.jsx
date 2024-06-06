import React, { forwardRef } from 'react';
import "./Header.css"

const Header = forwardRef(({ onLinkClick }, ref) => {
    return (
        <header className="header" ref={ref}>
            <nav className="header--container">
                <button onClick={() => onLinkClick('section1')}>Section 1</button>
                <button onClick={() => onLinkClick('section2')}>Section 2</button>
                <button onClick={() => onLinkClick('section3')}>Section 3</button>
            </nav>
        </header>
    );
});

export default Header;