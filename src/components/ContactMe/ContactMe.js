import React from 'react'
import './ContactMe.css'
import image from "./bg.jpg"

export default function ContactMe() {
    return (
        <div>
            <div className="contactMe text-center">
            <h1 style={{ color: 'black', fontWeight:'bold' }}>Contact Me</h1>
               <span>Lets Keep In Touch</span>
            </div>

            <div className="container rounded border">
                <div className="containerBody">
                <div className="text">
                <h1>Get In Touch emoji</h1>
                </div>
              
                <div className="contacticons">
                    <div className="contacticon">
                    <a href ="https://www.facebook.com/janam.sunuwar.79">
                    <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href ="/">
                        <i className="fa fa-google-plus-square"></i>
                    </a>
                    <a href ="https://www.instagram.com/janam_sunuwar_/">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href ="/">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href ="/">
                        <i className="fa fa-telegram"></i>
                    </a>
                   </div>
                </div>
                <div className="image rounded">
                <img src={image} class="img-fluid rounded" alt="NoImage"></img>
                </div>
            <div className='janam rounded'>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="janam" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="janam@gmail.com" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Message</label>
                    <textarea type="text" className="form-control" id="formGroupExampleInput2" placeholder="i wanna hire you" />
                </div>
            </div>
        </div>
               
     </div>
 </div>

    )
}
