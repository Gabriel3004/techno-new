import Technotools from "./Bilder/Technotools.png";
import  instagram  from "./Bilder/instagram.png";
import  facebook  from "./Bilder/facebook.png";
import  youtube  from "./Bilder/youtube.png";
import  twitter  from "./Bilder/twitter.png";
import map from "./Bilder/map.png";

import './myfooter.css'

function MyFooter () {
    
    return (
        <>
        
        <section className='container-foot'>
            <div className="Acount">
                <div className="newsletter">
                <h2>Newsletter Signup</h2>
                <br />
                <p>Signup to get the latest news...</p>
                </div>

                <div className="sendme" >
                    <form action="email"
                    onSubmit={() => alert("You will receive 10% on your first purchase")}>
                    <input type="email" placeholder="Your Email Addresse" />
                    <button className='ok'
                    
                    >OK</button></form>
                </div>
            </div>

            <div id="Logo">
            <img width= "350px" height="250px" src={Technotools} alt="Logo" />
            </div>

            <div className="contact">
                <h2>Contact Us</h2> 
                <br/>

                    <div className="info">                     
                        <div className="contact-me">
                        <img src="" alt="" />
                        <p>2701 RIVERSIDE DR SUITE N0813 <br /> OTTAWA</p>
                        </div>

                        <div className="contact-me">
                        <a href="https://www.google.com/maps/place/Canada+Post/@45.3759359,-75.7286555,14z/data=!4m10!1m2!2m1!1s2701+RIVERSIDE+DR+SUITE+N0813+OTTAWA!3m6!1s0x4cc91acfbfdfb215:0x763a8bbe7cdf1bea!8m2!3d45.3759359!4d-75.6898986!15sCiQyNzAxIFJJVkVSU0lERSBEUiBTVUlURSBOMDgxMyBPVFRBV0FaJiIkMjcwMSByaXZlcnNpZGUgZHIgc3VpdGUgbjA4MTMgb3R0YXdhkgELcG9zdF9vZmZpY2WaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUmhlRXBQUWpkM1JSQULgAQA!16s%2Fg%2F1tl0wzf7?entry=ttu"><img src={map} alt="map" className="map" /></a>
                           
                        </div>

                        <div className="contact-me">
                        <img src="" alt="" />
                        <p>+971005555150
                                <br />
                                +97116699898
                            
                            <br />
                            info@technotools.com</p>
                        </div>
                        
                    </div>
            </div>

        <div className="socialmedia">
            <a href="https://www.instagram.com/"><img src= {instagram} alt="instagram" className="socialntw" /></a>
            <a href="https://www.facebook.com/"><img src= {facebook} alt="facebook" className="socialntw"/></a>
            <a href="https://www.youtube.com/"><img src={youtube} alt="youtube" className="socialntw"/></a>
            <a href="https://twitter.com/TwitterDE"><img src={twitter} alt="twitter" className="socialntw"/></a>
        </div>

        <div id="copy">
            <p>&copy; Copyright 2023 All Rights Reserved.</p>
        </div>

    
        </section>

        </>
    )
}

export default MyFooter