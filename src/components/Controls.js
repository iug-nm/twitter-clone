import React, { useState } from 'react';
import { AiFillHeart, AiOutlineRetweet, AiOutlineComment } from 'react-icons/ai';

// https://react-icons.github.io/react-icons/icons?name=fa
export default function Controls(props) {
    const [likes, setLike] = useState(props.controls.star);
    const [liked, setLiked] = useState(false);
    const [likedColor, setColor] = useState("white");

    const [retweets, setRetweet] = useState(props.controls.retweet);
    const [retweeted, setRetweeted] = useState(false);
    const [retweetColor, setRetweetColor] = useState("white");

    const handleLikes = (liked) => {
        if (!liked) {
            setLike(likes + 1);
            setColor("#e11d48");
        } else {
            setLike(likes - 1);
            setColor("white");
        }
        setLiked(!liked);
    }

    const handleRetweets = (retweeted) => {
        if (!retweeted) {
            setRetweet(retweets + 1);
            setRetweetColor("#34d399")
        } else {
            setRetweet(retweets - 1);
            setRetweetColor("white");
        }
        setRetweeted(!retweeted);
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
            <span>{shorten(props.controls.comment)} <AiOutlineComment /></span>
            <span onClick={() => handleRetweets(retweeted)} style={{ color: retweetColor}}>{shorten(retweets)} <AiOutlineRetweet /></span>
            <span onClick={() => handleLikes(liked)} style={{ color: likedColor}}>{shorten(likes)} <AiFillHeart /></span>
        </div>
    )
}