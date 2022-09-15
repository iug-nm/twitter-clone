import React from 'react';
import Controls from './Controls';
import User from './User';

export default function Article(props) {

    const setAttributes = (element, attributes) => {
        for (let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }

    const urlCleaner = (url) => {
        let cleanURL = url.replace('https://www.', '');
        cleanURL = url.replace('@', '');
        return cleanURL;
    }

    const finder = (content) => {
        const reg = [
            /(?:^|[^a-zA-Z0-9_@])(@)(?!\.)([a-zA-Z0-9_\.]{1,15})(?:\b(?!@)|$)/g,
            /[-a-zA-Z0-9@:%_\+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
        ];

        reg.forEach((e) => {
            let res = content.match(e);
            let _content = content.split(res);
            let message = document.createElement('p');

            if (res != null) {
                res.forEach((elem) => {
                    let node = document.createElement('a');
                    node.innerHTML = elem;
                    setAttributes(node, {
                        'class': 'linked',
                        'href': urlCleaner(elem),
                    });
                    
                    message.innerHTML = _content[0] + '';
                    message.appendChild(node);
                    message.innerHTML += _content[1];
                });
                //BUG L'écran devient blanc lors d'un refresh F5
                document.querySelector("article > a[href='./profile/" + props.user.account_name + "'] + .post-content").appendChild(message);
            }
        });
    }


    return(
        <article className='post' id={props.id}>
           <User 
                user = {props.user}
                posts = {props.posts} 
            />
                <div className='post-content'>
                    {finder(props.content)}
                </div>
            <Controls controls = {props.controls} />
        </article>
    )
}