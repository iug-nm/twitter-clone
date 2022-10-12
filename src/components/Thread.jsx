/* eslint-disable no-useless-escape */
import React from 'react';
import Article from './Article';

import { users } from '../data/users'
import { posts } from '../data/posts'

export default function Thread() {

    const sanitize = (input) => {
        let regex = '';
        const xss = [
            //escape the / character for later in the regex
            '<script>',
            '<Script>',
            '<iframe>',
            '<Iframe>',
            '<img>',
            '<Img>',
            '<img',
            '<Img',
            '<a>',
            '<A>',
            'onError=',
            'onerror=',
            'onError =',
            'onerror =',
            '</script>',
            '</Script>',
            '</iframe>',
            '</Iframe>',
            '</img>',
            '</Img>',
            '</a>',
            '</A>',
            '/>',
        ]
        
        xss.forEach((e, i) => {
                regex += e;
                if (i !== xss.length - 1) {
                    regex += '|';
                }
        });

        regex = new RegExp('/'+regex+'/', "gi");
        return input.replace(regex, '$E4F2');
    }

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
            /(?:^|[^a-zA-Z0-9_@])(@)(?!\.)([a-zA-Z0-9_.]{1,15})(?:\b(?!@)|$)/g, //@
            /[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi, //http / s
            /(^|\s)#(\w*[a-zA-Z]+\w{2,50})/g, //#
        ];

        reg.forEach((e) => {
            let res = content.match(e);
            if (res != null) {
                res.forEach((elem) => {
                    if (reg[1].test(elem)) {
                        url = true;
                    } else {
                        url = false;
                    }

                    content = content.split(elem);
                    content = content[0]
                                + " <a "
                                + ( url ? "target='_blank'" : '')
                                + "href='" + href(url, elem)
                                + "' class='redirection " + ( url ? "link" : "mention" ) + "'>" 
                                //if it's an url apply a link class, else a tag class
                                + elem.replace(/^(http|https):\/\/www./, '')
                                + "</a>"
                                + content[1];
                });
            }
        });
        return (
            <div dangerouslySetInnerHTML={{__html:content}}></div>
        )
    }

    return(
        <>
        {posts.map((posts) => {
            let user = users.find(e => e.account_name === posts.account_name);

            return(
                <Article
                    key = {posts.post.post_time+user.name}
                    id = {posts.post.post_time}
                    user = {user}
                    posts = {posts.post.post_time}
                    content = {wrap(sanitize(posts.post.post_content))}
                    controls = {posts.post.reactions}
                />
            )
        })}
        </>
    );
}