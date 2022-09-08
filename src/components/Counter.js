import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Counter() {
    const [likes, setLike] = useState(34);
    const [liked, setLiked] = useState(false);

    const handleLikes = (liked) => {
        if (!liked) {
            setLike(likes + 1)
        } else {
            setLike(likes - 1);
        }
        setLiked(!liked);
    }

    return (
        <>
        {likes}
        <button
            type='button'
            onClick={() => handleLikes(liked)}><FaHeart />
        </button>       
        </>
    )
}