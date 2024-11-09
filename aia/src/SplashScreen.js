import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css';

function Splash() {
    const [displayedText, setDisplayedText] = useState('');
    const phrase = "AIE! AI for Everyone!";
    const navigate = useNavigate();
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + phrase[index]);
        index += 1;
        if (index === phrase.length) {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/Home'); 
          }, 1000); 
        }
      }, 100);
  
      return () => clearInterval(interval); 
    }, [navigate]);
  
    return (
      <div className="splash-screen">
        <h1>{displayedText}</h1>
      </div>
    );
}
  
export default Splash;