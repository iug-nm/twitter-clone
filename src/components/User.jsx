import React from 'react';
import { timeformat } from '../global';

export default function User({ user, posts }) {

    return(
            <a href={user.username} className='profile-nav'>
                <img className='profile-photo' alt='' src={user.profile_img}/>
                <h4>{user.name}</h4>
                <h6>{user.username} - {timeformat(posts.created_on)}</h6>
            </a>
    )
}