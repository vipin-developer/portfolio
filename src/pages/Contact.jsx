import React from "react";
import "./Contact.css";
import dev from "../animations/footer.json";
import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
function Contact(props) {
  const handleEmailClick = () => {
    const email = "vipinrajandcompany@gmail.com";
    const subject = "Contacting from portfolio";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="contact contact-main">
      <h1>Need Help?</h1>
      <h2>Feel free to contact me on social media.</h2>
      <div class="social-container">
        <a
          href="https://www.linkedin.com/in/vipin-kumar-00216a149/"
          className="linkdin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a href="https://twitter.com/vipin_tweets" className="twitter social">
          <FontAwesomeIcon icon={faXTwitter} size="3x" />
        </a>
        <a href="https://github.com/vipin-developer" className="github social">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
      </div>
      <button class="glowing-button" onClick={handleEmailClick}>Contact Me</button>
      <p className="dev-by">
        Developed with &nbsp;
        <FontAwesomeIcon className="heart" icon={faHeart} size="1x" /> &nbsp;by Vipin
        Kumar
      </p>

    
    </div>
  );
}

export default Contact;
