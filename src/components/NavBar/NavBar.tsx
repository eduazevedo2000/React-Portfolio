import './NavBar.css'
import logo from '../../assets/logotipo.png'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contactPage"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Contacts
        </Link>
      </div>
      <button
        className="navbarBtn"
        onClick={() => {
          document
            .getElementById('contactPage')
            ?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        Contact Me
      </button>
    </nav>
  )
}

export default NavBar
