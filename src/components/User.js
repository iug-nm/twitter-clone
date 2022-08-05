import React from 'react';

export default function User(props) {
    return(
        <div>
            <div className='post-user-infos'>
                <img alt={props.user.name} src={props.user.img}/>
                <h4>{props.user.name}</h4>
                <h6>{props.user.account_name} - {props.time}m</h6>
            </div>
        </div>
    )
}