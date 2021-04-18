import React,{useState,useEffect} from 'react';
import './HeaderSection.css';
import '../App.css';
import video1 from "../videos/video-1.mp4";
import video2 from "../videos/video-2.mp4";

function HeaderSection(){
    const [video,setVideo] = useState(false);
    const showVideo=()=>{
        if(window.innerWidth <= 760){
            setVideo(false);
        }
        else{
            setVideo(true);
        }
    };
    useEffect(()=>{
        showVideo();
    },[]);
    
    window.addEventListener('resize', showVideo);
    return(
        <div className="hero-container">
            <video src={video?video2:video1} autoPlay loop muted />
            <h1>A Crazy Tourist</h1>
            <p>We make solo Trips Crazier than Crazier</p>
        </div>
    );
}

export default HeaderSection;