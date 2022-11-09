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
                    {media.length > 0 ? <img src={media} alt=''/> : <></>}
                </div>
            <Controls controls = {controls} />
        </article>
    )
}