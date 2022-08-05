import React from 'react';
import Controls from './Controls';
import User from './User';

export default function Article(props) {
    return(
        <article className='post'>
            <User user={props.test.user}/>
                <span>
                    <p>{props.test.content}</p>
                </span>
            <Controls controls={props.test.controls} />
        </article>
    )
}