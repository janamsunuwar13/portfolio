import React from 'react'
import "./Resume.css"
export default function Resume() {
    return (
        <div>
        <div className='resume text-center '> 
                <h1 style={{ color: 'black', fontWeight:'bold' }}>Resume</h1>
               <span>My Formal Bio Details</span>
        </div>
                <div className="progressHead ">
            <div className="container resumeBody rounded ">
                    <h3>
                        Education
                    </h3>
                    <h6>
                        TRITON INTERNATIONL COLLEGE<br/>
                        School leaving certificate +2 in computer science <br/>
                        From : 2018-2020<br/>
                    </h6>
                    <p>
                    I had passed my +2 in Triton international college 
                    in computer science. It is located in Tinkune, Kathmandu.
                    </p>
                
                    <h6>
                    UNIVERSITY OF TRIBHUVAN<br/>
                    Bachelor of Computer Application<br/>
                    From : 2021-Present<br/>
                    
                    </h6>
                    <p>
                    I am currently studying bachelor of 
                    computer application Sixth semester in Triton International College .
                    </p>
                    <h3>
                        Skills
                    </h3>
                    <h6>JavaScript</h6>
                    <div className="progressLine">
                        <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-success" style={{ width: "90%" }}>Expert</div>
                        </div>
                    </div>
                    <h6>React</h6>
                    <div className="progressLine">
                        <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-success" style={{ width: "88%" }}>Intermediate</div>
                        </div>
                    </div>
                    <h6>NodeJs</h6>
                    <div className="progressLine">
                        <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-success" style={{ width: "78%" }}>VeryGood</div>
                        </div>
                    </div>
                    <h6>WordPress</h6>
                    <div className="progressLine">
                        <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-success" style={{ width: "99%" }}>Expert</div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
