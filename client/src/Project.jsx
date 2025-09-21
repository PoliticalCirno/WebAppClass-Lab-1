import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Logo from './assets/Logo.png'
import Logo2 from './assets/logo2.png'
import viteLogo from '/vite.svg'
import './App.css'

function Project()
{
    return(
        <>
            <h2 style={{marginTop: "0.3em"}}>My Projects</h2>
            <a href="https://github.com/PoliticalCirno/P2ND-Engine">
            <div style={{marginTop: "5em", marginLeft: "-15em", backgroundColor: "black", overflow: "hidden",backgroundSize: "cover", height: "10em", width: "135%", borderRadius: "5px 5px 5px 5px"}}>
                <img src={Logo} style={{transform: 'scale(0.3)', marginTop: "-34em"}}></img> 
            </div>
            <p style={{fontColor: "white"}}>My current project. An engine with a goal of providing <br></br> Open area/Open world framework for developers.</p>
            </a>
            <a href="https://github.com/PoliticalCirno/P2AssetCacher">
            <div style={{marginTop: "5em", marginLeft: "-15em", backgroundColor: "black", overflow: "hidden",backgroundSize: "cover", height: "10em", width: "135%", borderRadius: "5px 5px 5px 5px"}}>
                <img src={Logo2} style={{transform: 'scale(0.4)', marginTop: "-10em", marginLeft: "-8em"}}></img> 
            </div>
            <p style={{fontColor: "white"}}>Also my current project that I'm ping ponging to, <br></br> File Cacher for multi-purpose realtime unpacking.</p>
            </a>
            <a href="https://github.com/PoliticalCirno/DndHBot">
            <div style={{marginTop: "5em", marginLeft: "-15em", backgroundColor: "black", overflow: "hidden",backgroundSize: "cover", height: "10em", width: "135%", borderRadius: "5px 5px 5px 5px"}}>
               <h1 style={{Color: "white"}}>DND HOOK BOT</h1>
            </div>
            <p style={{fontColor: "white"}}>DND Scorecounter Bot. <br></br> Made with friends in mind.</p>
            </a>
        </>
    );
}

export default Project;