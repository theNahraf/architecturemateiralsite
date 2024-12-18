import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Dynamically create the script tag to load the chatbot
    const script = document.createElement('script');
    script.src = 'https://aichatbot.sendbird.com/index.js';
    script.type = 'module';
    script.defer = true;

    // Add chatbot config as window property
    window.chatbotConfig = [
      '1AD0DFF1-C208-44AC-AD37-D054ED9DFA4F', // Your unique identifier
      'p3zYuVk4sGjPe07Gw-jiq', // Your unique secret
      {
        apiHost: 'https://api-cf-ap-5.sendbird.com',
      },
    ];

    // Append the script to the body of the page
    document.body.appendChild(script);

    // Create and append the div with the chatbot id
    const div = document.createElement('div');
    div.id = 'aichatbot';
    document.body.appendChild(div);

    // Cleanup function to remove the script and div when the component unmounts
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(div);
    };
  }, []);

  return null; // The component doesn't render anything itself
};

export default Chatbot;
