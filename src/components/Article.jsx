import Controls from './Controls';
import User from './User';

export default function Article({ id, user, posts, content, controls }) {

    return(
        <article className='post' id={id}>
           <User 
                user = {user}
                posts = {posts} 
            />
                <div className='post-content'>
                    {content}
                </div>
            <Controls controls = {controls} />
        </article>
    )
}