import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Aboutme from './About.jsx'
import  Project from './Project.jsx'
import  Contact from './Contact.jsx'
import  Service from './Service.jsx'
import  Oozora from './assets/sixpence.png'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>

    {/*Background Layer*/}
    {/*Content Layer*/}
    <img src={Oozora} style={{transform: 'scale(1.0)', width: "20em", height: "20em"}}></img> 
    <div className='slide-up'>
        <nav style={{height: "50px", width: "110%", backgroundColor: "black", marginLeft: "-3.5em",borderRadius: "15px 50px 30px 90px"}}>
          <Link to="/Aboutme" onClick={() => setCount(count + 1)} style={{fontSize: "2em"}}>About Me  </Link>
          <Link to="/Project" onClick={() => setCount(count + 1)} style={{fontSize: "2em", marginLeft: "5em"}}>Projects  </Link>
          <Link to="/Service" onClick={() => setCount(count + 1)} style={{fontSize: "2em", marginLeft: "5em"}}>Service  </Link>
          <Link to="/Contact" onClick={() => setCount(count + 1)} style={{fontSize: "2em", marginLeft: "5em"}}>Contact  </Link>
        </nav>
        <div className="scrolling_text">
        <div className="text">
         <span>WHERE AM I?</span>
         <span>＼(゜ロ゜)ココハドコ? (゜ロ゜)／アタシハダアレ?</span>
         <span>QUE ESO ES??????</span>
         <span>LIEBER GOTT!!!</span>
          <span>여긴어디... 나는 누구....? ㅇㅅㅇ</span>
       </div>
        <div className="text">
         <span>WHERE AM I?</span>
         <span>(゜ロ゜)ココハドコ? (゜ロ゜)アタシハダアレ?</span>
         <span>QUE ESO ES??????</span>
         <span>LIEBER GOTT!!!</span>
          <span>여긴어디... 나는 누구....? ㅇㅅㅇ</span>
        </div>
      </div>
    </div>

    <Routes>
      <Route path="/Aboutme" element={<Aboutme />}/> 
      <Route path="/Project" element={<Project />}/> 
      <Route path="/Contact" element={<Contact />}/> 
      <Route path="/Service" element={<Service />}/> 
    </Routes>
    </>
  )
}

export default App
