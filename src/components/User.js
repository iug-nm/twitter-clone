import React from 'react';

export default function User(props) {

    function timeformat(time) {
        let current_time = new Date();
        let post_time = new Date(Date.parse(time));
        let difference = current_time - post_time
        var res;

        if (difference > 1000 && difference < 60000) { //second
            res = Math.floor(difference / 1000) + 's';
        } else if (difference < 3600000) { //minute
            res = Math.floor(difference / 1000 / 60) + 'm';
        } else if (difference < 86400000) { //hour
            res = Math.floor(difference / 1000 / 60 / 60) + 'h';
        } else if (difference < 2592000000) { //day
            res = Math.floor(difference / 1000 / 60 / 60 / 24) + 'j';
        } else if (difference > 31104000000) { //year
            res = Math.floor(difference / 1000 / 60 / 60 / 24 / 365) + 'a';
        }
        // console.log(Math.floor((current_time - post_time) / 1000 / 60 / 60 / 24));
        return res;
    }

    return(
            <div className='post-user-infos'>
                {/* 
                Rendre la photo de profil et le h6 cliquable pour accéder au panel des profils
                <a href='reactjs.org' target='_blank'><img alt={props.user.name} src = {props.user.img}/></a> 
                */}
                <img className='profile-photo' alt='' src={props.user.img}/>
                <h4>{props.user.name}</h4>
                <h6>{props.user.account_name} - {timeformat(props.posts)}</h6>
            </div>
    )
}