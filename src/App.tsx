import React, { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  // const [data, setData] = useState('')
  // const [name, setName] = useState('Edu')
  // const [repositories, setRepositories] = useState(0)
  // const [memberSince, setMemberSince] = useState('')

  // useEffect(() => {
  //   fetch('https://api.github.com/users/eduazevedo2000')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data)
  //       setName(data.name)
  //       setRepositories(data.public_repos)
  //       setMemberSince(data.created_at)
  //     })
  // })

  // const parsedDate = memberSince ? parseISO(memberSince) : null

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
