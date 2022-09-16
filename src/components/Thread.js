import React from 'react';
import Article from './Article';

// import { data } from "../data/data";
import { users } from '../data/users'
import { posts } from '../data/posts'

export default function Thread() {

    const clean = (content) => {
        return content.replace(/^(http|https):\/\/www./, '');
    }

    const content_format = (content) => {
        const reg = [
            /(?:^|[^a-zA-Z0-9_@])(@)(?!\.)([a-zA-Z0-9_.]{1,15})(?:\b(?!@)|$)/g,
            /[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
        ];

        reg.forEach((e) => {
            let res = content.match(e);
            if (res != null) {
                res.forEach((elem) => {
                    content = content.split(elem);
                    content = content[0] + " <a href='" + elem.replace('@', '') + "' class='link'>" + clean(elem) + "</a>" + content[1];
                });
            }
        });
        // let p = document.createElement('p');
        // p.innerHTML = content
        return content;
    }

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
                    content = {content_format(content.post.post_content)}
                    controls = {content.post.reactions}
                />
            )
        })}
        </>
    );
};