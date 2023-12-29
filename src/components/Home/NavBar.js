import React from 'react'
// import {useRef} from 'react'

export default function NavBar() {
  // const AboutMe = useRef(null);
  // const Resume = useRef(null);
  // const ContactMe = useRef(null);

  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offSetTop,
  //     behavior: 'smooth'
  //   })
  // }
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ">
    <a className="navbar-brand mx-2" style={{color:"orange" ,fontSize:"40px"}} href="/">Janam Sunuwar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a  className="nav-link active text-orange mx-4" style={{color:"orange" ,fontSize:"20px"}}aria-current="page" href="/" >Home</a>
        </li>
        <li className="nav-item" >
          <a  className="nav-link active mx-4" style={{color:"orange" ,fontSize:"20px"}}aria-current="page" href="Aboutme"  >AboutMe</a>
        </li>
        
        <li className="nav-item">
          <a  className="nav-link active mx-4" style={{color:"orange" ,fontSize:"20px"}} aria-current="page" href="Resume">Resume</a>
        </li>
        <li className="nav-item">
          <a  className="nav-link active mx-4" style={{color:"orange" ,fontSize:"20px"}} aria-current="page" href="ContactMe">ContactMe</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>

   
  )
}
