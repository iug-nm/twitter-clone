import React from 'react';

export default function Controls(props) {
    return(
        <div className="post-controls">
            <span>{props.controls.comment} 💬</span>
            <span>{props.controls.retweet} ♻</span>
            <span>{props.controls.star} ⭐</span>
        </div>
    )
}