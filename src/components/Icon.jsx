import React from "react";
import { AiOutlineArrowLeft, AiOutlineTwitter } from 'react-icons/ai';
import { useLocation } from "react-router-dom";

export default function Icon() {
    let loc = useLocation();
    let res = '';
    if (loc.pathname === '/') {
        res = <a href='http://localhost:3000/'>
            <AiOutlineTwitter style={{
                height: "3rem",
                width: "3rem",
            }}
            />
            </a>
    } else {
        res = <a href='http://localhost:3000/'>
        <AiOutlineArrowLeft style={{
            height: "2rem",
            width: "2rem",
        }}
        />
        </a>
    }
    return(
        <>
        {res}
        </>
    )
}