import { useState } from 'react';
import basilArrowUpOutline from "./assets/basil_arrow-up-outline.svg";
import image1 from "./assets/image 1.png";
import './App.css';

function App() {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    setMessages(prev => [prev[0], { text: inputMessage, isUser: true }]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/receive_response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_input: inputMessage
        })
      });

      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      setMessages(prev => [...prev, { text: data.ai_response, isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { text: "Sorry, something went wrong. Please try again.", isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-window">
      <div className="div">
        <div className="overlap-group">
          <img className="image" alt="Image" src={image1} />
          <p className="text-wrapper">University of Modo Campus Assistant</p>
        </div>

        <div className="message-container">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`message-bubble ${message.isUser ? 'user-message' : 'bot-message'}`}
            >
              <p>{message.text}</p>
            </div>
          ))}
          
          {isLoading && (
            <div className="message-bubble bot-message">
              <p>Thinking...</p>
            </div>
          )}
        </div>

        <div className="input-container">
          <input
            type="text"
            className="text-input"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button
            className="send-button"
            onClick={sendMessage}
            disabled={isLoading}
          >
            <img
              className="send-icon"
              alt="Send"
              src={basilArrowUpOutline}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;