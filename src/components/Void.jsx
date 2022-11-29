import React from "react";
import Button from "./Button";

export default function Void() {
    return(
        <div id="void">
            <pre>
                Error, the page you tried to reach doesn't exists or you don't have permissions to access it ..
            </pre>
            <Button 
                target = 'http://localhost:3000'
                class = 'button'
                text = 'Go Back ..'
                />
        </div>
    )
}