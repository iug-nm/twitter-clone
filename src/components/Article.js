import React from 'react';
import Controls from './Controls';
import User from './User';

export default function Article(props) {

    const wrap = (content, target, wrap, tagged) => {
        let _content = content.split(target);
        return _content[0] + "<" + wrap + " href='" + target + "' class='" + tagged + "'>" + target + "</" + wrap + ">" + _content[1];
    }

    const highlight = (content, regex, replace, tagged) => {
        let result = content.match(regex);

        if (result != null) {

            for (let i = 0; i < result.length; i++) {
                console.log(result[i]);
                result = result.toString().replace(result[i], wrap(content, result[i], replace, tagged));
            }
        }
        return result;
    }
    

    return(
        <article className='post' id={props.id}>
           <User 
                user = {props.user}
                posts = {props.posts} 
            />
                <div className='post-content'>
                    <p>{highlight(props.content, /(?:^|[^a-zA-Z0-9_@])(@)(?!\.)([a-zA-Z0-9_\.]{1,15})(?:\b(?!@)|$)/g, "a", "mention")}</p>
                </div>
            <Controls controls = {props.controls} />
        </article>
    )
}