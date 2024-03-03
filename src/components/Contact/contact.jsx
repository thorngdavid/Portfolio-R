import React, { useState } from 'react';
import Style from './contact.module.css';
import checkIcon from '../../assets/contact/check.png';
import emailjs from 'emailjs-com';



const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [verification, setVerification] = useState('');
    const [randomText, setRandomText] = useState(generateRandomText());
    const [verificationResult, setVerificationResult] = useState('');
    const [showSendMessageButton, setShowSendMessageButton] = useState(false);
    const [showVerificationPassed, setShowVerificationPassed] = useState(false);
    const [verificationPassedTimeout, setVerificationPassedTimeout] = useState(null);

    function generateRandomText() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomText = Array.from({ length: 6 }, () => characters[Math.floor(Math.random() * characters.length)]);
        return randomText.join('');
    }

    function handleVerificationSubmit() {
        const lowercaseVerification = verification.toLowerCase();
        const lowercaseRandomText = randomText.toLowerCase();

        if (lowercaseVerification === lowercaseRandomText) {
            setShowSendMessageButton(true);
            setVerificationResult('');
            setShowVerificationPassed(true);

            // Hide the "Verification Passed" message after 3 seconds
            const timeoutId = setTimeout(() => {
                setShowVerificationPassed(false);
            }, 3000);

            // Save the timeout ID
            setVerificationPassedTimeout(timeoutId);
        } else {
            setVerificationResult('Incorrect. Please try again.');
            setShowSendMessageButton(false);
            setRandomText(generateRandomText());
        }
    }

    function handleSendMessage() {
        // Check for missing required fields
        if (!name || !email || !message) {
            setVerificationResult('Please fill in all required fields.');
            return;
        }
    
        const serviceId = 'service_k7xonze';
        const templateId = 'template_8ofvssx';
        const userId = 'pOHqYb-FFSuogkusT';
    
        const templateParams = {
            user_name: name,
            user_email: email,
            message: message,
        };
    
        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((response) => {
                console.log('Email sent successfully:', response);
                setVerificationResult('');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setVerificationResult('Error sending email. Please try again later.');
            });
    }
    

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            if (!showSendMessageButton) {
                handleVerificationSubmit();
            }
        }
    }

    return (
        <div className={Style.contact}>
            <h1>Contact Me</h1>
            <hr className={Style.line} />
            <h3 className={Style.intro}>I like to create things with fun, open-minded. Feel free to say hello!</h3>
            <div className={Style.formContainer}>
                <div className={Style.Section1}>
                    <form onKeyDown={handleKeyDown}>
                        {(!name && verificationResult && showSendMessageButton) && <p className={Style.errorMessage}>Please enter your name.</p>}
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={Style.inputField}
                        />

                        {(!email && verificationResult && showSendMessageButton) && <p className={Style.errorMessage}>Please enter your email.</p>}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={Style.inputField}
                        />

                        {(!message && verificationResult && showSendMessageButton) && <p className={Style.errorMessage}>Please enter your message.</p>}
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`${Style.inputField} ${Style.textarea}`}
                        />

                        {!showSendMessageButton && (
                            <div className={Style.verificationContainer}>
                                <p>Verify If You're Not Robot 🤖</p>
                                <div className={Style.randomTextContainer}>
                                    {randomText.split('').map((letter, index) => (
                                        <span key={index}>{letter}</span>
                                    ))}
                                </div>
                                {(!verification && verificationResult) && <p className={Style.errorMessage}>Please enter the verification code.</p>}
                                <input
                                    type="text"
                                    placeholder="Type the letters"
                                    value={verification}
                                    onChange={(e) => setVerification(e.target.value)}
                                    className={Style.verifyinputField}
                                />
                                <button type="button" onClick={handleVerificationSubmit} className={Style.verifyButton}>
                                    Verify
                                </button>
                                {showVerificationPassed && (
                                    <div className={Style.verificationPassed}>
                                        <img src={checkIcon} alt="Verification Passed" />
                                    </div>
                                )}
                                {verificationResult && !showSendMessageButton && <p className={Style.errorMessage}>{verificationResult}</p>}
                            </div>
                        )}

                        {/* Send Message Button */}
                        {showSendMessageButton && (
                            <>
                                <button type="button" onClick={handleSendMessage} className={Style.sendMessageButton}>
                                    Send
                                </button>
                                {showVerificationPassed && (
                                    <div className={Style.verificationPassed}>
                                        <img src={checkIcon} alt="Verification Passed" />
                                    </div>
                                )}
                            </>
                        )}
                    </form>
                </div>
                <div className={Style.Section2}>
                    {/* Right section content goes here */}
                </div>
            </div>
        </div>
    );
};

export default Contact;
