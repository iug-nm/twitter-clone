import React from 'react';
import Article from './Article';

import { users } from '../data/users'
import { posts } from '../data/posts'

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
            /(?:^|[^a-zA-Z0-9_@])(@)(?!\.)([a-zA-Z0-9_.]{1,15})(?:\b(?!@)|$)/g,
            /[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
        ];
        reg.forEach((e) => {
            let res = content.match(e);
            if (res != null) {
                res.forEach((elem) => {
                    content = content.split(elem);
                    content = content[0]
                                + " <a "
                                + ( url ? "target='_blank'" : '')
                                + "href='" + href(url, elem)
                                + "' class='link'>"
                                + elem.replace(/^(http|https):\/\/www./, '')
                                + "</a>"
                                + content[1];
                });
            }
            url = true;
        });
        return (
            <div dangerouslySetInnerHTML={{__html:content}}></div>
        )
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
                    content = {wrap(content.post.post_content)}
                    controls = {content.post.reactions}
                />
            )
        })}
        </>
    );
};