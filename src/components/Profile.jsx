import React from 'react';

export default function Profile(props) {
    return(
        <div id='profile'>
            <img className='profile-background' alt='' src={props.user.account_background}/>
            <div className='profile-informations'>
                <img className='profile-picture' alt='' src={props.user.img} />
                <h4>
                    {props.user.name}
                </h4>
                <p>
                    {props.user.account_name}
                </p>
            </div>
            <span>
                {props.user.account_description}
            </span>
        </div>
    )
}