import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"

export default function Profile() {
  return (
      <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
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
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text">Janam</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Janam Sunuwar ",
                                2000,
                                "Web Developer🧑‍💻 ",
                                2000,
                                "Designer",
                                1000,
                                "ReactJS",
                                1000,

                                   ]}
                                />
                        </h1>
                        <span className='profile-role-tagline'>
                                   Building web and mobile application by reactjs, wordpress and android studio.
                        </span>
                    </span>
                </div>
            <div className="profile-options">
                <button className='btn primary-btn'>
                    Hire Me{""}
                </button>
                <a href="cv.pdf" download="janam cv.pdf">
                    <button className='btn highlighted-btn'>Get Resume</button>
                </a>
            </div>
            </div>
        </div>
        <div className="profile-picture">
            <div className = "profile-picture-background">

            </div>
        </div>
      </div>
  )
}
