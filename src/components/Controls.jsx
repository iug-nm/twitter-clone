import React, { useState } from 'react';
import { AiFillHeart, AiOutlineRetweet, AiOutlineComment } from 'react-icons/ai';

// https://react-icons.github.io/react-icons/icons?name=fa
export default function Controls(props) {
    
    const controls_base = "grey";
    const like_clicked = "#e11d48";
    const retweet_clicked = "#34d399";
    const reply_clicked = '#0067F0';

    const [likes, setLike] = useState(props.controls.star);
    const [liked, setLiked] = useState(false);
    const [likedColor, setColor] = useState(controls_base);

    const [retweets, setRetweet] = useState(props.controls.retweet);
    const [retweeted, setRetweeted] = useState(false);
    const [retweetColor, setRetweetColor] = useState(controls_base);

    const [reply, setReply] = useState(props.controls.comment);
    const [replied, setReplied] = useState(false);
    const [replyColor, setReplyColor] = useState(controls_base);

    const handleLikes = (liked) => {
        if (!liked) {
            setLike((e) => {
                console.log('oui');
                console.log(e + 1);
                return likes + 1;
            });
            setColor(like_clicked);
        } else {
            setLike(likes - 1);
            setColor(controls_base);
        }
        setLiked(!liked);
    }

    const handleRetweets = (retweeted) => {
        if (!retweeted) {
            setRetweet(retweets + 1);
            setRetweetColor(retweet_clicked)
        } else {
            setRetweet(retweets - 1);
            setRetweetColor(controls_base);
        }
        setRetweeted(!retweeted);
    }

    const handleReplies = (replied) => {
        if (!replied) {
            setReply(reply + 1);
            setReplyColor(reply_clicked);
        } else {
            setReply(reply - 1);
            setReplyColor(controls_base);
        }
        setReplied(!replied);
    }

    const shorten = (number) => {
        number = number.toString().replace(/[^0-9.]/g, '');
        if (number < 1000) {
            return number;
        }

        let si = [
            {v: 1E3, s: "k"},
            {v: 1E6, s: "m"},
            {v: 1E9, s: "b"},
        ];
        
        let index;
        for (index = si.length - 1; index > 0; index--) {
            if (number >= si[index].v) {
                break;
            }
        }
        return (number / si[index].v).toFixed(1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
    }

    return(
        <div className="post-controls">
            <span onClick={() => handleReplies(replied)} style={{ color: replyColor}}>{shorten(reply)} <AiOutlineComment /></span>
            <span onClick={() => handleRetweets(retweeted)} style={{ color: retweetColor}}>{shorten(retweets)} <AiOutlineRetweet /></span>
            <span onClick={() => handleLikes(liked)} style={{ color: likedColor}}>{shorten(likes)} <AiFillHeart /></span>
        </div>
    )
}