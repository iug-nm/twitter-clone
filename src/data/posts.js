export const posts = [
     // l'id de l'auteur est renseigné au moment où ce dernier crée un post
     // post_id = la date compacté à laquelle le post est créer 
     //+ d'autres informations evitant le dedoublement telles que le type de post etc
    {
        account_name: "halsey",
        post: {
            post_id: "0908202212245",
            post_time: "2022-08-11T14:16:00",
            post_content: "I mean that's a very good opinion right here from @iug_nm",
            reactions: {
                comment: 905,
                retweet: "5.2k",
                star: "17.8k",
            },
        },
    },
    {
        account_name: "joy_crookes",
        post: {
            post_id: "09082022132548",
            post_time: "2021-08-04T13:58:00",
            post_content: "Wish you were mine you here now https://www.youtube.com/watch/a9fea894e",
            reactions: {
                comment: 152,
                retweet: "456",
                star: "5.4k",
            },
        },
    },
    {
        account_name: "sjokz",
        post: {
            post_id: "09082022134915",
            post_time: "2022-08-04T20:55:30",
            post_content: "I mean that's a very good opinion right here from @iug_nm",
            reactions: {
                comment: 17,
                retweet: "24",
                star: "478",
            },
        },
    },
]