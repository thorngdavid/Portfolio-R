import React, { useEffect, useRef } from 'react';

const TextScramble = () => {
  const textRef = useRef(null);
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  let frameRequest;
  let frame = 0;
  let queue = [];
  let resolve;

  const setText = (newText) => {
    const oldText = textRef.current.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((_resolve) => (resolve = _resolve));

    queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(frameRequest);
    frame = 0;
    update();
    return promise;
  };

  const update = () => {
    let output = '';
    let complete = 0;

    for (let i = 0, n = queue.length; i < n; i++) {
      let { from, to, start, end, char } = queue[i];

      if (frame >= end) {
        complete++;
        output += to;
      } else if (frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar();
          queue[i].char = char;
        }
        output += `<span className="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    textRef.current.innerHTML = output;

    if (complete === queue.length) {
      resolve();
    } else {
      frameRequest = requestAnimationFrame(update);
      frame++;
    }
  };

  const randomChar = () => {
    return chars[Math.floor(Math.random() * chars.length)];
  };

  useEffect(() => {
    const phrases = [
      'THORNGDAVID | TD',
      'FRONTEND DEVELOPER',
      'BACKEND DEVELOPER',
      'UI DESIGNER',
    ];

    let counter = 0;

    const next = () => {
      setText(phrases[counter]).then(() => {
        setTimeout(next, 2500);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();

    // Clean up frameRequest on unmount
    return () => cancelAnimationFrame(frameRequest);
  }, []); // Empty dependency array to ensure the effect runs only once

  return <div className="text" ref={textRef}></div>;
};

export default TextScramble;
