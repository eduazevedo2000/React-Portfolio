import './Projects.css'
import project1 from '../../assets/Project1.png'
import project2 from '../../assets/Project2.png'
import project3 from '../../assets/Project3.jpeg'
import project4 from '../../assets/Project4.jpeg'

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">My Portfolio</h2>
      <span className="projectsDesc">
        These are some of the projects that I've developed so far... <br /> Feel
        free to see them in detail in my Github page
      </span>
      <div className="projectsImgs">
        <img src={project1} alt="E-Commerce" className="projectsImg" />
        <img src={project2} alt="Reddit Clone" className="projectsImg" />
        <img src={project3} alt="Listify" className="projectsImg" />
        <img src={project4} alt="Vintage" className="projectsImg" />
      </div>
      <button
        className="projectsBtn"
        onClick={() => {
          window.open('https://github.com/eduazevedo2000', '_blank')
        }}
      >
        See More
      </button>
    </section>
  )
}

export default Projects
