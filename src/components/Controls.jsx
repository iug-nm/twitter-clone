import React, { useState } from 'react';
import { shorten } from '../global';
import { AiFillHeart, AiOutlineRetweet, AiOutlineComment } from 'react-icons/ai';

export default function Controls({ controls }) {
    
    const controls_base = "grey";
    const like_clicked = "#e11d48";
    const retweet_clicked = "#34d399";
    const reply_clicked = '#0067F0';

    const [likes, setLike] = useState(controls.star);
    const [liked, setLiked] = useState(false);
    const [likedColor, setColor] = useState(controls_base);
    const handleLikes = (liked) => {
        if (!liked) {
            setLike(likes + 1)
            setColor(like_clicked);
        } else {
            setLike(likes - 1);
            setColor(controls_base);
        }
        setLiked(!liked);
    }

    const [retweets, setRetweet] = useState(controls.retweet);
    const [retweeted, setRetweeted] = useState(false);
    const [retweetColor, setRetweetColor] = useState(controls_base);
    const handleRetweet = (retweeted) => {
        if (!retweeted) {
            setRetweet(retweets + 1);
            setRetweetColor(retweet_clicked);
        } else {
            setRetweet(retweets - 1);
            setRetweetColor(controls_base);
        }
        setRetweeted(!retweeted);
    }

    const [reply, setReply] = useState(controls.comment);
    const [replied, setReplied] = useState(false);
    const [replyColor, setReplyColor] = useState(controls_base);
    const handleReply = (replied) => {
        if (!replied) {
            setReply(reply + 1);
            setReplyColor(reply_clicked);
        } else {
            setReply(reply - 1);
            setReplyColor(controls_base);
        }
        setReplied(!replied)
    }

    return(
        <div className="post-controls">
            <span onClick={() => handleReply(replied)} style={{ color: replyColor }}>{shorten(reply)} <AiOutlineComment /></span>
            <span onClick={() => handleRetweet(retweeted)} style={{ color: retweetColor }}>{shorten(retweets)} <AiOutlineRetweet /></span>
            <span onClick={() => handleLikes(liked)} style={{ color: likedColor }}>{shorten(likes)} <AiFillHeart /></span>
        </div>
    )
}