import React,{useState,useEffect} from "react";
import "./Home.css";
import Lottie from "lottie-react";
import dev from "../animations/dev.json";

function Home(props) {
  const developerQuotes = [
    " I turn caffeine into code and ideas into interactive experiences.",
    "I take responsibility to craft a good user experience using modern frontend architecture.",
    "I convert inspiration into lines of code, making the digital universe come to life.",
    "I'm a passionate Engineer who's focused on building scalable and performant apps.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentQuote, setCurrentQuote] = useState('');
  const [quoteLength, setQuoteLength] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (quoteLength < developerQuotes[currentQuoteIndex].length) {
        setQuoteLength(quoteLength + 1);
        setCurrentQuote(developerQuotes[currentQuoteIndex].slice(0, quoteLength + 1));
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentQuote('');
          setQuoteLength(0);
          setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % developerQuotes.length);
        }, 2000); // Wait for 2 seconds before moving to the next quote
      }
    }, 100); // Type one character every 100 milliseconds

    return () => clearInterval(interval);
  }, [quoteLength, currentQuoteIndex]);

  return (
    <div className="home">
      <div className="intro">
        <h4>Hi, My Name is</h4>
        <h1>Vipin Kumar</h1>
        <h2> {currentQuote}</h2>
        <button class="glowing-button">Download Resume</button>
      </div>
      <div>
        <Lottie animationData={dev} className="dev-animation" loop={true} />
      </div>
    </div>
  );
}

export default Home;
