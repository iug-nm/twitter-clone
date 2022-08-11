import React from 'react';
import Controls from './Controls';
import User from './User';

export default function Article(props) {
    return(
        <article className='post'>
           <User 
                user = {props.user}
                posts = {props.posts} />
                <div className='post-content'>
                    <p>{props.content}</p>
                </div>
            <Controls controls = {props.controls} />
        </article>
    )
}