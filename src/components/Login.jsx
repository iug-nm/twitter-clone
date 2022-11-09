import React, { useState } from 'react';

export default function Login() {

    const [image, setImage] = useState(null);
    const[previewURL, setPreviewURL] = useState("");

    const handleFile = file => {
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
        console.log(image);
    }

    return(
        // <div id="login">
        //     <form className='login-form'>
        //         <input type='text' required></input>
        //         <input type='password' required></input>
        //         <input type='submit'></input>
        //     </form>
        // </div>
        <div
            className='drop_zone'
            onDragOver={handleDrag}
            onDrop={handleDrop}
        >
            <p>drag your images here ..</p>
            {previewURL && <img src={previewURL} alt='' />}
        </div>

        
    );
};