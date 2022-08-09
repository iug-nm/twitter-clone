import React from 'react';
import Article from './Article';

import { data } from "../data/data";
import { users } from '../data/users'
import { posts } from '../data/posts'
// TODO Si c'est un lien faire le style correspondant 
// TODO Si c'est une mention faire le style correspondant aussi 
// TODO Est-on obligé de mettre à chaque fois un const par valeurs que l'on veut passer 

export default function Thread() {
    return(
        <>
        {/* https://stackoverflow.com/questions/72515709/react-map-returning-value */}
        {data.map((data) => {
            return(
                <Article
                    user = {data.user}
                    content = {data.content}
                    controls = {data.controls}
                />
            );
        })}

        {/* {users.map((users) => {
            return(
                users.user
            );
        })}; */}
        </>
    );
};