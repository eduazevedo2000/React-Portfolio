import React from 'react'
import './About.css'
import bootstrapImg from '../../assets/bootstrap.png'
import cssImg from '../../assets/css.png'
import htmlImg from '../../assets/html.png'
import javacriptImg from '../../assets/javascript.png'
import mongodbImg from '../../assets/mongodb.png'
import nodeImg from '../../assets/node.png'
import postgresqlImg from '../../assets/postgresql.png'
import reactImg from '../../assets/react.png'
import gitImg from '../../assets/gitImg.png'

const About = () => {
  return (
    <section id="about">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I'm a Junior Full-Stack Developer with experience in creating functional
        websites, with a good UI/UX. Below are some of my skills
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={reactImg} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React</h2>
            <p>
              I've created some projects with the React Library, like this
              Portfolio website you're navigating 😃
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={bootstrapImg} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Bootstrap</h2>
            <p>This Toolkit allows me to develop great UI designs</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={nodeImg} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>NodeJS</h2>
            <p>
              Developing Back-End with NodeJs allows me to continue to develop
              my server-side coding with Javascript
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={gitImg} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Git</h2>
            <p>Used Git to version control all my development process</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
