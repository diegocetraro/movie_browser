import React from "react";
import { Link } from 'react-router-dom'
import facebook from '../images/fb.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import youtube from '../images/yt.png'

class Footer extends React.Component{

    render(){
        return(
            <div className="footer-container">
                <div className="container-items">
                    <h1 className="container-title">LINKS</h1>
                    <Link to="" className="footer-link">Home</Link>
                    <Link to="" className="footer-link">About Us</Link>
                    <Link to="" className="footer-link">On Maintainence</Link>
                </div>
                <div className="container-items">
                    <h1 className="container-title">CONTACT ME!</h1>
                    <p className="footer-text">Email me: diego.aranda0708@gmail.com</p>
                </div>
                <div className="container-items">
                    <h1 className="container-title">HOURS</h1>
                    <p className="footer-text">Monday - Friday</p>
                    <p className="footer-text">9pm - 5pm</p>
                    <p className="footer-text">Saturdays and Sundays are sacred!</p>
                </div>
                <div className="container-items">
                    <h1 className="container-title">SOCIALS</h1>
                    <div className="social-link">
                        <a href="#">
                            <img className="socials" src={facebook} alt="facebook" />
                        </a>
                        <a href="#">
                            <img className="socials" src={twitter} alt="twitter" />
                        </a>
                        <a href="#">
                            <img className="socials" src={instagram} alt="instagram" />
                        </a>
                        <a href="#">
                            <img className="socials" src={youtube} alt="youtube" />
                        </a>
                    </div>
                    <p className="footer-text">&copy; 2021 JDA All Rights Reserved.</p>
                </div>
            </div>
        )
    }
}

export default Footer;