import React, { useState } from 'react';
import Style from './contact.module.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [verification, setVerification] = useState('');
    const [randomText, setRandomText] = useState(generateRandomText());
    const [verificationResult, setVerificationResult] = useState('');
    const [showSendMessageButton, setShowSendMessageButton] = useState(false);

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

        // Implement the logic to send the message
        console.log('Message sent:', { name, email, message });
        // Reset verification result after successful submission
        setVerificationResult('');
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            if (!showSendMessageButton) {
                handleVerificationSubmit();
            } else {
                handleSendMessage();
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
                        {/* Show error messages for message form inputs only when verification passes */}
                        {(!name && verificationResult && showSendMessageButton) && <p className={Style.errorMessage}>Please enter your name.</p>}
                        {/* Your Name */}
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={Style.inputField}
                        />

                        {(!email && verificationResult && showSendMessageButton) && <p className={Style.errorMessage}>Please enter your email.</p>}
                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={Style.inputField}
                        />

                        {(!message && verificationResult && showSendMessageButton) && <p className={Style.errorMessage}>Please enter your message.</p>}
                        {/* Message */}
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`${Style.inputField} ${Style.textarea}`}
                        />

                        {!showSendMessageButton && (
                            <div className={Style.verificationContainer}>
                                <p>Verify To Send Message</p>
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
                                {verificationResult && !showSendMessageButton && <p className={Style.errorMessage}>{verificationResult}</p>}
                            </div>
                        )}

                        {/* Send Message Button */}
                        {showSendMessageButton && (
                            <button type="button" onClick={handleSendMessage} className={Style.sendMessageButton}>
                                Send
                            </button>
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
