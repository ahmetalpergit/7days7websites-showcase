import React from 'react'

function Header() {
    return (
        <header className="header">
            <h1 className="header__heading heading--primary">7 Days 7 Websites Challenge</h1>
            <div className="header__descriptions">
                <p className="header__description description">Hello and welcome! I've decided to keep my HTML and CSS skills sharp during the pandemic and created a fun little challenge to recreate 7 websites in 7 days.</p>
                <p className="header__description description">SiteInspire was my go-to for inspiration on this one. Below you'll find the links to these websites and their original sources.</p>
            </div>
        </header>
    )
}

export default Header
