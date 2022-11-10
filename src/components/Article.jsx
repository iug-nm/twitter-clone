import Controls from './Controls';
import User from './User';

export default function Article({ id, user, posts, content, media, controls }) {

    return(
        <article className='post' id={id}>
           <User 
                user = {user}
                posts = {posts} 
            />
                <div className='post-content'>
                    {content}
                    {/* https://mathiasbynens.github.io/rel-noopener/#recommendations */}
                    {media.length > 0 ? <a href={media} target='_blank' rel="noreferrer"><img src={media} alt=''/></a> : <></>}
                </div>
            <Controls controls = {controls} />
        </article>
    )
}