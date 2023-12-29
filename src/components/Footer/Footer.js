import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <div className="footer rounded">
                <div className="footericon text-center">
                    <a href="https://www.facebook.com/janam.sunuwar.79">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa fa-google-plus-square"></i>
                    </a>
                    <a href="https://www.instagram.com/janam_sunuwar_/">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="/">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="/">
                        <i className="fa fa-telegram"></i>
                    </a>
                </div>
            
         {/* Copyright  */}
            <div className="text-center p-3" >
                © 2023Copyright :
                <a class="text-white" href="https:janamdai.com/"> By Janam Sunuwar</a>
            </div>
          </div>
        </div>
    )
}
