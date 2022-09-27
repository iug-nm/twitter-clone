import React from 'react';

export default function Sidebar() {
    return(
        <div id="sidebar">
            <div id="searchbar">
                <input type="search" />
            </div>
            <div id="footer">
                <div><a href='terms'>Terms of Services</a></div>
                <div>Privacy Policy</div>
                <div>Cookie Policy</div>
                <div>Accessibility</div>
                <div>Ads info</div>
                <div>More</div>
                <div>@2022 Gui, Inc.</div>
            </div>
        </div>
    )
}