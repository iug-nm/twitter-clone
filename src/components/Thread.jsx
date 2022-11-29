/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import Article from './Article';

import { randomId, sanitize, JSONfind, wrap } from '../global';
import TweetForm from './TweetForm';
import { current_user } from '../App';

import posts from '../data/posts.json';
import users from '../data/users.json';

export default function Thread() {

    const [tweets, setTweets] = useState(posts);
    const handleTweets = (content, media) => {
        const newTweet = {
            id: randomId(),
            created_on: Date(Date.now()),
            content: content,
            media: media,
            user: current_user.username,
            reactions: {
                comment: 0,
                retweet: 0,
                star: 0
            }
        }

        if (tweets.find(e => e === newTweet.id) !== undefined) {
            console.warn("Failed to produce a unique ID Key for the tweet");
            console.error(newTweet.id);
            newTweet.id = randomId();
        } else {
            setTweets((old) => {
            //https://stackoverflow.com/questions/33898512/spread-syntax-vs-rest-parameter-in-es2015-es6
                return [...old, newTweet];
            });
        }
    }
    return(
        <>
        <TweetForm 
            onSubmit = {handleTweets}
            user = {current_user}
        />
        {tweets.sort((a, b) => {
            return a.created_on < b.created_on
        }).map((tweet) => {
            let user = JSONfind(users, "username", tweet.user);
            return(
             <Article
             key = {tweet.id}
             id = {tweet.id}
             user = {user}
             posts = {tweet}
             content = {wrap(sanitize(tweet.content))}
             media = {tweet.media}
             controls = {tweet.reactions}
             />
            )
        })}
        </>
    );
}