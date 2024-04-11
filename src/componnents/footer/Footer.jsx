import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets.js'
function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-content ">
                <div className="footer-left ">
                    <img src={assets.logo} alt="" style={{ hi: "25px" }} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, consectetur minus laudantium atque architecto expedita libero. Odit explicabo, doloremque beatae recusandae, doloribus aliquam corporis commodi accusamus, laudantium expedita libero adipisci?</p>
                    <div className='footer-icons'>
                        <span className='icon-twitter'></span>
                        <span className='icon-facebook'></span>
                        <span className='icon-instagram'></span>
                    </div>
                </div>
                <div className="footer-middle ">
                    <h2>Company</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">menu</a></li>
                        <li><a href="">contact</a></li>
                        <li><a href="">about</a></li>
                    </ul>
                </div>
                <div className="footer-right ">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li><a href="">+213 778633926</a></li>
                        <li><a href="">nordinebenidiri@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
