import React, { useState } from "react";
import TweetButton from "./TweetButton";

export default function TweetForm({ submit, user }) {

    const [tweetValue, settweetValue] = useState('');
    const handleTweetValue = (e) => {
        settweetValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(tweetValue);
        settweetValue('');
    }

    return(
        <form 
            className="tweet-form"
            onSubmit={handleSubmit}>
            <div className="tweet-form-container">
                <a href='iug_nm' className='profile-nav'>
                    <img alt='' src={user.profile_img} className='profile-photo'/>
                    <h4>{user.name}</h4>
                    <h6>{user.username}</h6>
                </a>
                <textarea 
                    value={tweetValue}
                    onChange={handleTweetValue}
                    placeholder="What's happening ?"/>
            </div>
            <TweetButton 
                content = "Tweet"/>
        </form>
    )
}