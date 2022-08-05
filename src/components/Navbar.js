import React from 'react';

export default function Navbar() {
    return(
        <div id="navbar">
            <div id="site-logo">
                <a><img alt='logo' src='https://clipartcraft.com/images/white-twitter-logo-icon-8.png' /></a>
            </div>
            <div id="site-menu">
                <nav>
                    <a>Home</a>
                    <a>Notifications</a>
                    <a>Messages</a>
                    <a>Profile</a>
                    <a>Settings</a>
                </nav>
            </div>
            <div>
                <a>Tweet</a>
            </div>
            <div className='navbar-account'>
                <a>Julius in the Coolius</a>
                <h6>iug_nm</h6>
            </div>
        </div>
    )
}