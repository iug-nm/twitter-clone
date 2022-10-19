import React from 'react';

export default function Profile({ user }) {
    return(
        <div id='profile'>
            <img className='profile-background' alt='' src={user.background_img}/>
            <div className='profile-informations'>
                <img className='profile-picture' alt='' src={user.profile_img} />
                <h4>
                    {user.name}
                </h4>
                <p>
                    {user.username}
                </p>
            </div>
            <span>
                {user.description}
            </span>
        </div>
    )
}