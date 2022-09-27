import React from 'react';

export default function Profile(props) {
    return(
        <div>
            <img alt='' src={props.user.account_background}/>
            <div>
                <img alt='' src={props.user.img} />
                <h4>
                    {props.user.name}
                </h4>
                <p>
                    {props.user.account_name}
                </p>
                <span>
                    {props.user.account_description}
                </span>
            </div>
        </div>
    )
}