import React, { forwardRef } from 'react';
import "./Header.css"

const Header = forwardRef(({ onLinkClick }, ref) => {
    return (
      <>
          

        <header className="header" ref={ref}>
            <img className="header--logo" src="./akaboo.png" width='200px' />
            <nav className="header--container">
                <button className="button" onClick={() => onLinkClick('section1')}>Join Waitlist</button>
                <button className="button" onClick={() => onLinkClick('section2')}>How It Works</button>
            </nav>
        </header>
      </>
    );
});

export default Header;