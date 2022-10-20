import React, { useState } from "react";
import TweetButton from "./TweetButton";

export default function TweetForm({ onSubmit, user }) {

    const [editorValue, setEditorValue] = useState('');

    const handleEditorValueChange = (e) => {
        setEditorValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(editorValue);
        setEditorValue('');
    }
    
    return(
        <form 
            onSubmit={handleSubmit}
            className="tweet-form">
            <div className="tweet-form-container">
                <a href='iug_nm' className='profile-nav'>
                    <img alt='' src={user.profile_img} className='profile-photo'/>
                </a>
                <textarea 
                    value={editorValue}
                    onChange={handleEditorValueChange}
                    placeholder="What's happening ?"/>
            </div>
            <TweetButton 
                content = "Tweet"/>
        </form>
    )
}