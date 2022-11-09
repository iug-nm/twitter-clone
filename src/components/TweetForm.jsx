import React, { useState } from "react";
import TweetButton from "./TweetButton";

export default function TweetForm({ onSubmit, user }) {

    const [editorValue, setEditorValue] = useState('');
    const [previewURL, setPreviewURL] = useState('');
    const [image, setImage] = useState(null);

    const deleteImage = () => {
        // TODO Create my own styled modal instead of the browser one
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Do you really want to delete the media from the tweet ?')) {
            setPreviewURL('');
            throw image;
        }
    }

    const previewImage = (e) => {
        console.log(e.target);
    }

    const handleEditorValueChange = (e) => {
        setEditorValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editorValue.length > 0 || previewURL.length > 0) {
            onSubmit(editorValue, previewURL);
            setEditorValue('');
            setPreviewURL('');
        }
    }

    const handleFile = (file) => {
        setImage(file);
        setPreviewURL(URL.createObjectURL(file));
    }

    const handleDrag = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        let imageFile = e.dataTransfer.files[0];
        handleFile(imageFile);
    }

    return(
        <form 
            onSubmit={handleSubmit}
            className="tweet-form">

            <div className="tweet-form-container">
                <a href='iug_nm' className='profile-nav'>
                    <img alt='' src={user.profile_img} className='profile-photo'/>
                </a>
                <div 
                className="tweet-input"
                onDragOver={handleDrag}
                onDrop={handleDrop}>
                    <textarea 
                        value={editorValue}
                        onChange={handleEditorValueChange}
                        placeholder="What's happening ?"
                    />
                    {previewURL && <><span onClick={deleteImage}></span><img onClick={previewImage} src={previewURL} alt='Tweet Media Content'/></>}
                </div>
            </div>
            <TweetButton 
                content = "Tweet"/>
        </form>
    )
}