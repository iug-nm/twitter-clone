import React, { useState } from 'react';
import { AiFillHeart, AiOutlineRetweet, AiOutlineComment } from 'react-icons/ai';


// https://react-icons.github.io/react-icons/icons?name=fa
export default function Controls(props) {
    const [likes, setLike] = useState(props.controls.star);
    const [liked, setLiked] = useState(false);

    const handleLikes = (liked) => {
        //au clic: récupérer le string . le re-convertir en nombre et executer la suite
        if (!liked) {
            setLike(likes + 1);
        } else {
            setLike(likes - 1);
        }
        setLiked(!liked);
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
            {v: 1E12, s: "p"},
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
            <span>{shorten(props.controls.retweet)} <AiOutlineRetweet /></span>
            <span onClick={() => handleLikes(liked)}>{shorten(likes)} <AiFillHeart /></span>
        </div>
    )
}