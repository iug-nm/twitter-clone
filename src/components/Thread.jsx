/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import Article from './Article';

import { randomId, sanitize, JSONfind } from '../global';
import TweetForm from './TweetForm';
import { current_user } from '../App';

import posts from '../data/posts.json';
import users from '../data/users.json';

export default function Thread() {

    const href = (url, target) => {
        let res;
        if (!url) {
            res = target.replace('@', '');
        } else if (!/^(http|https):\/\/www./.test(target)) {
            res = 'https://'+target;
        } else {
            res = target;
        }
        return res;
    }

    const wrap = (content) => {
        let url = false;
        const reg = [
            /(?:^|[^a-zA-Z0-9_@])(@)(?!\.)([a-zA-Z0-9_.]{1,15})(?:\b(?!@)|$)/g, //@
            /[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi, //http / s
            /(^|\s)#(\w*[a-zA-Z]+\w{2,50})/g, //#
        ];

        reg.forEach((e) => {
            let res = content.match(e);
            if (res != null) {
                res.forEach((elem) => {
                    if (reg[1].test(elem)) {
                        url = true;
                    } else {
                        url = false;
                    }

                    content = content.split(elem);
                    content = content[0]
                                + " <a "
                                + (url ? "target='_blank'" : '')
                                + "href='" + href(url, elem)
                                + "' class='redirection " + ( url ? "link" : "mention" ) + "'>" 
                                + elem.replace(/^(http|https):\/\/www./, '')
                                + "</a>"
                                + content[1];
                });
            }
        });
        return (
            <div dangerouslySetInnerHTML={{__html:content}}></div>
        )
    }

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