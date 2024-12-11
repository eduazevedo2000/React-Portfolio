import { useRef } from 'react'
import './Contact.css'
// import LinkedInIcon from '../../assets/linkedinIcon.png'
// import GithubIcon from '../../assets/githubIcon.png'
// import InstagramIcon from '../../assets/instagramIcon.png'
// import TwitterIcon from '../../assets/twitterIcon.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_9mskm0c', 'template_dsyu3mc', form.current!, {
        publicKey: 'vK3VacF8MzLTgOFZE',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          alert('Email Sent')
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <section id="contactPage">
      <h2 className="contactTitle">Contact Me</h2>
      <span className="contactDesc">
        Please fill out the form bellow to discuss any topic!{' '}
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="from_email"
        />
        <textarea
          className="message"
          name="message"
          rows={5}
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="Send" className="contactBtn">
          Submit
        </button>
        {/* <div className="links">
          <img src={LinkedInIcon} alt="LinkeIn" className="link" />
          <img src={InstagramIcon} alt="Instagram" className="link" />
          <img src={TwitterIcon} alt="Twitter" className="link" />
          <img src={GithubIcon} alt="Github" className="link" />
        </div> */}
      </form>
    </section>
  )
}

export default Contact
