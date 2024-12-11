import React from 'react'
import './Home.css'
import bg from '../../assets/eduardo.png'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <section id="home">
      <div className="homeContent">
        <span className="hello">Hello,</span>
        <span className="homeText">
          I'm <span className="homeName">Eduardo</span> <br />
          Full-Stack Developer
        </span>
        <p className="homeParagraph">
          I am a Junior Full-Stack Developer with experience with <br />
          React, NodeJS, Javascript, Typescript and more...
        </p>
        {/* <Link>
          <button className="homeBtn">Hire me!</button>
        </Link> */}
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Home
