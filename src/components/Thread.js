import React from 'react';
import Article from './Article';

// TODO Si c'est un lien faire le style correspondant 
// TODO Si c'est une mention faire le style correspondant aussi 
// TODO Est-on obligé de mettre à chaque fois un const par valeurs que l'on veut passer 

export default function Thread() {
    const user = {
          name: 'h',
          img: 'https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:647022?quality=0.8&format=jpg&width=1440&height=810&.jpg',
          account_name: 'halsey',
          time: 2,
      }
    const content = 'I mean that\'s a very good opinion right here from @iug_nm';
    const controls = {
        comment: "905",
        retweet: "5.2k",
        star: "17.8k",
    }
    return(
        <div>
            <Article 
            user = {user} 
            content = {content}
            controls = {controls}
            />
        </div>
    )
}