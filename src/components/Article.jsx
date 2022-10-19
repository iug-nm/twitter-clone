import Controls from './Controls';
import User from './User';

export default function Article({ user, posts, content, controls }) {

    return(
        <article className='post'>
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