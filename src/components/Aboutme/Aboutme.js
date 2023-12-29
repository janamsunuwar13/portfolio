import React from 'react'
import image from "./janam.jpg"
import "./Aboutme.css"

export default function Aboutme() {
    
    return (
        <div>
            <div id='AboutMe' className='aboutme'>
                <h1 style={{ color: "black",fontWeight:"bold"}}>About Me</h1>
                <div className="subHead">
               <h7>Why Choose me ?</h7> 
                </div>
                </div>
            <div className="container rounded ">
                <div className="Text">
                    {/* <img src={image} alt="janamdai"/> */}
                    <img src={image} class="img-fluid" alt="NoImage"></img>

                    <p>
                      Full stack web and mobile developer with background<br/>
                      knowledge of MERN stacks with redux, along with a <br/>
                      of building applications with utmost efficiency.<br/> 
                      Strong professional with a BCA willing to be as<br/>
                      asset for an orginazation.
                   <br/>
                   <br/>
                   <br/>
                     <h3> Here are few Highlights:<br/></h3>
                      🟠React<br/>
                      🟠JavaScript<br/>
                      🟠Interactive Front End as per the design<br/>
                      🟠Full Stack web and mobile Application<br/>
                
                        <div className="profile-options">
                            <button className='btn primary-btn'>
                                Hire Me{""}
                            </button>
                            <a href="cv.pdf" download="janam cv.pdf">
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>

                    </p>

                </div>
            </div>
        </div>
    )
}
