import React from 'react';
import Article from './Article';

// import { data } from "../data/data";
import { users } from '../data/users'
import { posts } from '../data/posts'

// TODO Si c'est un lien faire le style correspondant 
// TODO Si c'est une mention faire le style correspondant aussi 

export default function Thread() {
    return(
        <>
        {/* https://stackoverflow.com/questions/72515709/react-map-returning-value */}
        {/* https://stackoverflow.com/questions/41311322/how-can-i-map-over-two-arrays-at-the-same-time */}
        {users.map((users, index) => {
            let content = posts[index];
            return(
                <Article 
                key = {index}
                    user = {users.user}
                    content = {content.post.post_content}
                    controls = {content.post.reactions}
                />
            )
        })}
        </>
    );
};