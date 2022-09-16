import Controls from './Controls';
import User from './User';

export default function Article(props) {

    return(
        <article className='post' id={props.id}>
           <User 
                user = {props.user}
                posts = {props.posts} 
            />
                <div className='post-content'>
                    {props.content}
                </div>
            <Controls controls = {props.controls} />
        </article>
    )
}