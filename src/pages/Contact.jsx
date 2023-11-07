import React from 'react';
import './Contact.css';
import dev from '../animations/footer.json'
import Lottie from 'lottie-react';
function Contact(props) {
    return (
        <div className='contact contact-main'>
            <h1>Need Help?</h1>
            <button class="glowing-button">Contact Me</button>
            <Lottie animationData={dev} className="footer-animation" loop={true} />
        </div>
    );
}

export default Contact;