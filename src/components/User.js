import React from 'react';

export default function User(props) {
    return(
            <div className='post-user-infos'>
                <img alt={props.user.name} src={props.user.img}/>
                <h4>{props.user.name}</h4>
                <h6>{props.user.account_name} - {props.user.time}m</h6>
            </div>
    )
}