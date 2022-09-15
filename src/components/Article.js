import Controls from './Controls';
import User from './User';

export default function Article(props) {

    const setAttributes = (element, attributes) => {
        for (let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }

    // const finder = (content) => {

    //     let temp_content = content
    //     var message = document.createElement('p');
    //     const reg = [
    //         /(?:^|[^a-zA-Z0-9_@])(@)(?!\.)([a-zA-Z0-9_\.]{1,15})(?:\b(?!@)|$)/g,
    //         /[-a-zA-Z0-9@:%_\+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
    //     ];

    //     reg.forEach((e) => {
    //         let res = temp_content.match(e);
    //         let _content = temp_content.split(res);
    //         console.log(_content);
    //         console.log(res);
    //         if (res != null) {
    //             res.forEach((elem) => {
    //                 let node = document.createElement('a');
    //                 node.innerHTML = elem;
    //                 setAttributes(node, {
    //                     'class': 'linked',
    //                     //'href': urlCleaner(elem),
    //                 });
    //                 message.innerHTML = _content[0] + '';
    //                 message.appendChild(node);
    //                 message.innerHTML += _content[1];
    //             });
    //         } 
    //     }); 
    //     //BUG L'écran devient blanc lorsque je veux mount le component une deuxième fois ??!
    //     //FIXME Ne retourner me message en entier que lorsque l'on a formatté toutes les occurences de ce dernier
    //     //document.querySelector("article > a[href='./profile/" + props.user.account_name + "'] + .post-content").appendChild(message);
    // }

    const finder = (content) => {
        const reg = [
            /(?:^|[^a-zA-Z0-9_@])(@)(?!\.)([a-zA-Z0-9_.]{1,15})(?:\b(?!@)|$)/g,
            /[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
        ];

        reg.forEach((e) => {
            let res = content.match(e);
            if (res != null) {
                res.forEach((elem) => {
                    content = content.split(elem);
                    content = content[0] + " <a href='" + elem.replace('@', '') + "' class='link'>" + elem + "</a>" + content[1];
                });
            }
        });
        let p = document.createElement('p');
        p.innerHTML = content
        document.querySelector("article > a[href='./profile/" + props.user.account_name + "'] + .post-content").appendChild(p);
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