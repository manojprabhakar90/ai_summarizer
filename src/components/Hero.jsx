import React from 'react'
import { logo } from '../assets';


const Hero = () => {
  return (
    <header className="w-full flex
    justify-center items-center flex-col">
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt ="sumz_logo"
        className="w-28 object-contain" />
    <button
        type ="button"
        onClick={() => window.open("https://github.com/manojprabhakar90/")}
        className="black_btn"
        >
            GitHub
        </button>
    </nav>
    <h1 className='head_text'>
        Summarize Articles with <br className="max-md.hidden"/>
        <span className="blue_gradient"> Open AI GPT-3.5</span>
    </h1>
    <h2 className="desc">
        This app provides an option for you to summarize any article. This uses GPT behind the scenes
    </h2>
    </header>
  )
}

export default Hero