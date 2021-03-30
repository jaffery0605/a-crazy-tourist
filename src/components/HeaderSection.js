import React from 'react';
import './HeaderSection.css';
import '../App.css';
import video1 from "../videos/video-1.mp4";
import video2 from "../videos/video-2.mp4";

function HeaderSection(){
    return(
        <div className="hero-container">
            <video src={video2} autoPlay loop muted />
            <h1> Lets be A Crazy Tourist</h1>
            <p> Lets we plan your crazy tour</p>

        </div>
    );
}

export default HeaderSection;