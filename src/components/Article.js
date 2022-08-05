import React from 'react';
import Controls from './Controls';
import User from './User';

export default function Article(props) {
    return(
        <article className='post'>
           <User user = {props.user} />
                <span>
                    <p>{props.content}</p>
                </span>
            <Controls controls = {props.controls} />
        </article>
    )
}