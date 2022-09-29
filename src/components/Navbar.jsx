import React from 'react';

export default function Navbar() {
    return(
        <div id="navbar">
            <div id="site-logo">
                <a href='http://localhost:3000/'><img alt='logo' src='https://clipartcraft.com/images/white-twitter-logo-icon-8.png' /></a>
            </div>
            <div id="site-menu">
                <nav>
                    <a href='#a'>Notifications</a>
                    <a href='#a'>Messages</a>
                    <a href='#a'>Profile</a>
                    <a href='#a'>Settings</a>
                </nav>
            </div>
            <div className='navbar-account'>
                <img alt='' src='https://cdn.pixabay.com/photo/2020/11/25/14/38/girl-5775940_960_720.jpg'/>
                <div className='navbar-account-details'>
                    <h3>Julius in the Coolius</h3>
                    <h6>iug_nm</h6>
                </div>
            </div>
        </div>
    )
}