import React from 'react';

const Header = ({ onLinkClick }) => {
    return (
        <header>
            <nav>
                <button onClick={() => onLinkClick('section1')}>Section 1</button>
                <button onClick={() => onLinkClick('section2')}>Section 2</button>
                <button onClick={() => onLinkClick('section3')}>Section 3</button>
            </nav>
        </header>
    );
};

export default Header;