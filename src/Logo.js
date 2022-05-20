import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function Logo() {
    const [imageFile, setImageFile] = useState(logo);
    const fileRef = useRef();
    
    function handleChange(){
        const image = fileRef.current.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', ()=>{
            setImageFile(reader.result);
        });

        reader.readAsDataURL(image);
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={imageFile} className="App-logo" alt="logo" />
        <p>
          My name is Kevin.
        </p>
        <p>This page is for icon change</p>
        <input
            ref={fileRef}
            type="file"
            placeholder='gambar'
            onChange={handleChange}>
        </input>
      </header>
    </div>
  );
};

export default Logo;