import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Contact()
{
    const navigate = useNavigate();
    return(
        <>
        <form>
            <label>
                <input type="text"  placeholder='First Name'/><input type="text"  placeholder='Last Name' style={{marginLeft: "1em"}}/>
            <br></br>
                <input type="text"  placeholder='Last Name' style={{marginTop: "2em", width: "26em"}}/>
            <br></br>
                <textarea placeholder='Your message here' style={{marginTop: "2em", width: "26em", height: "10em"}}/>
            <br></br>
                <button type='submit' onClick={() => navigate("/")}>Submit</button>
            </label>

        </form>
        </>
    );
}

export default Contact;