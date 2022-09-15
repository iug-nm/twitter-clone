import React from 'react';
import Article from './Article';

// import { data } from "../data/data";
import { users } from '../data/users'
import { posts } from '../data/posts'

export default function Thread() {

    return(
        <>
        {/* https://stackoverflow.com/questions/41311322/how-can-i-map-over-two-arrays-at-the-same-time */}
        {users.map((users, index) => {
            let content = posts[index];
            
            return(
                <Article 
                    key = {index}
                    id = {content.post.post_time+'-'+index}
                    user = {users.user}
                    posts = {content.post.post_time}
                    content = {content.post.post_content}
                    controls = {content.post.reactions}
                />
            )
        })}
        </>
    );
};