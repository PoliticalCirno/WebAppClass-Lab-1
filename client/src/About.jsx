import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Aboutme()
{
    return(
        <>
        <h2>ABOUT ME</h2>
        <p>My name is Seungju Lee, with a 2 pseudo-name I go by in two mediums(BlueMyulee, PoliticalCirno)<br></br>
        I currently hold an NCS (National Competancy Standard) Certification in C# Programming and Unity. <br></br>
        I currently am studying in Canada's Centennial College to get a more globally recognized certification.<br></br>
        My ultimate goal in my career is to make my dream game.<br></br>
        (then again, what game developer doesn't have the same dream.)
        </p>

        <h4 style={{marginTop: "10em"}}>Check out my Resume below!</h4>
        <div style={{marginTop: "2em", backgroundColor: "black", height: "3em", width: "8em", marginLeft: "45.5%", borderRadius: "15px 50px 30px 90px", justifyContent: "center", textAlign: "center"}}>
            <a href="https://drive.google.com/file/d/1qFQp6aYWRV11be6iy9fzSgzQyr2KIphL/view?usp=sharing" style={{color: "white"}}>Resume.pdf</a>
        </div>
        </>
    );
}

export default Aboutme;