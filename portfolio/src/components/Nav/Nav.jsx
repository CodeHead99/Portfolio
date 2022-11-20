import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser}from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
    const [activeNow, setActiveNow] = useState('#')
  return (
    <nav>
        <a href="#" className={activeNow==='#'?'active':''}><AiOutlineHome/></a>
        <a href="#about" onClick={()=> setActiveNow('#about')} className={activeNow==='#about'?'active':''}><AiOutlineUser/></a>
        <a href="#experience" onClick={()=> setActiveNow('#experience')} className={activeNow==='#experience'?'active':''}><BiBook/></a>
        <a href="#services"  onClick={()=> setActiveNow('#services')} className={activeNow==='#services'?'active':''}><RiServiceLine/></a>
        <a href="#contact" onClick={()=> setActiveNow('#contact')} className={activeNow==='#contact'?'active':''}><BiMessageSquareDetail/></a>


    </nav>
  )
}

export default Nav