import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Service()
{
    return(
        <>
            <h2 style={{marginTop: "0.3em"}}>Services I offer</h2>
           
            <div style={{marginTop: "5em", color: "white", marginLeft: "-15em", backgroundColor: "black", overflow: "hidden",backgroundSize: "cover", height: "10em", width: "135%", borderRadius: "5px 5px 5px 5px"}}>
               <h1 style={{Color: "white"}}>Programming</h1>
            </div>
            <p style={{fontColor: "white"}}>I offer Programming services for C/C++, C#, and CirnoScript<br></br> (If its something simple, no payment needed. if longterm, Contract needed.)</p>
          

            <div style={{marginTop: "5em", color: "white", marginLeft: "-15em", backgroundColor: "black", overflow: "hidden",backgroundSize: "cover", height: "10em", width: "135%", borderRadius: "5px 5px 5px 5px"}}>
               <h1 style={{Color: "white"}}>3D Modelling</h1>
            </div>
            <p style={{fontColor: "white"}}>I offer 3D modelling services for all kinds of style <br></br> (Requests and Prices are made on per-commission requests)</p>
          
        </>
    );
}

export default Service;