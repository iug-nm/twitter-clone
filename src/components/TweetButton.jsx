import React from "react";

export default function TweetButton({ content, submit }) {

    return(
        <button 
            onSubmit={submit}
            className="tweet-form-submit"
        >{content}</button>
    )
}