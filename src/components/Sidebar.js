import React from 'react';

export default function Sidebar() {
    return(
        <div id="sidebar">
            <div id="searchbar">
                <input type="search" />
            </div>
            {/* <div id="trends">
                <div>EVO 2022</div>
                <div>MV</div>
                <div>Trackmania Cup</div>
                <div>Premier ministre</div>
                <div>Elections</div>
                <div>BrewMaster God</div>
                <div>DPS Andy</div>
                <div>LLoris</div>
                <div>LeFlambeau</div>
            </div>
            <div id="suggestions">
                <div>Gwen</div>
                <div>Christopher</div>
            </div> */}
            <div id="footer">
                <div>Terms of Services</div>
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