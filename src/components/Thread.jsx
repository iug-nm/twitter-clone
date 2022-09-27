import React from 'react';
import Article from './Article';

import { users } from '../data/users'
import { posts } from '../data/posts'

export default function Thread() {

    const linkWrap = (content) => {
        let url = false;
        const reg = [
            /(?:^|[^a-zA-Z0-9_@])(@)(?!\.)([a-zA-Z0-9_.]{1,15})(?:\b(?!@)|$)/g, //regex des mentions
            /[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi //regex des liens
        ];

        reg.forEach((e) => {
            let res = content.match(e);
            if (res != null) {
                res.forEach((elem) => {
                    content = content.split(elem);
                    content = content[0] + " <a " + ( url ? "target='_blank'" : '') + "href='" + elem.replace('@', '') + "' class='link'>" + elem.replace(/^(http|https):\/\/www./, '') + "</a>" + content[1];
                });
            }
            url = true;
        });
        let p = document.createElement('p');
        p.innerHTML = content;
    }

    return(
        <>
        {users.map((user, index) => {
            let content = posts[index];
            return(
                <Article 
                    key = {index}
                    id = {content.post.post_time+'-'+index}
                    user = {user}
                    posts = {content.post.post_time}
                    content = {content.post.post_content}
                    controls = {content.post.reactions}
                />
            )
        })}

        {console.log(users.map((user, key) => {
            return (
                <>
                    {user.account_password}
                </>
            )
        }))}


    {/* {users.forEach((e) => {
            posts.forEach((el) => {
                if (e.account_name === el.account_name) {
                    return <Article 
                                user = {el.account_name}
                                posts = {el.post.post_time}
                                content = {el.post.post_content}
                                controls = {el.post.reactions}
                            />
                } else {
                    console.log('ça n\'as pas marché');
                }
            });
        })} */}
        </>
    );
};