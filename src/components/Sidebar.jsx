import React from 'react';

export default function Sidebar() {
    return(
        <div id="sidebar">
            <div id="searchbar">
                <input type="search" />
            </div>
            <div id="footer">
                <div><a href='terms'>Terms of Services</a></div>
                <div><a href='privacy'>Privacy Policy</a></div>
                <div><a href='cookies'>Cookie Policy</a></div>
                <div><a href='accessibility'>Accessibility</a></div>
                <div><a href='ads'>Ads info</a></div>
                <div><a href='more'>More</a></div>
                <div><a href='me'>@2022 Gui, Inc.</a></div>
            </div>
        </div>
    )
}