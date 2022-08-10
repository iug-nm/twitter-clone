import React from 'react';

export default function User(props) {

    // TODO Calculer la temps depuis lequel le tweet a été posté
    let current_time = new Date().getTime();
    let post_time = new Date(props.user.time);
    let time_diff = current_time - post_time;

    return(
            <div className='post-user-infos'>
                {/* 
                Rendre la photo de profil et le h6 cliquable pour accéder au panel des profils
                <a href='reactjs.org' target='_blank'><img alt={props.user.name} src = {props.user.img}/></a> 
                */}
                <img alt={props.user.name} src = {props.user.img}/>
                <h4>{props.user.name}</h4>
                <h6>{props.user.account_name} - {props.user.time}m</h6>
            </div>
    )
}