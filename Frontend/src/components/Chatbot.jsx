import React, { useState, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  // Add welcome message when component mounts
  useEffect(() => {
    setConversation([{
      user: "",
      bot: "Welcome to BookNook! I'm Litbot, your literary assistant. How can I help you today? Try asking about books, genres, or recommendations!"
    }]);
  }, []);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return; // Don't send empty messages

    let response = '';

    if (message.toLowerCase().includes('store')) {
      response = "Thank you for your interest! We currently operate exclusively online and do not have a physical store. However, you can browse our entire collection and make purchases through our website.";
    } else if (message.toLowerCase().includes('contact')) {
      response = "You can contact support at booknook@gmail.com.";
    } else if (message.toLowerCase().includes('genres')) {
      response = "We offer genres like Fiction, Non-Fiction, Mystery, Science Fiction, and more.";
    } else if (message.toLowerCase().includes('classic')) {
      response = "I recommend 'Pride and Prejudice' by Jane Austen. This classic novel explores themes of love, society, and personal growth through the story of Elizabeth Bennet and her interactions with the enigmatic Mr. Darcy.";
    } else if (message.toLowerCase().includes('book')) {
      response = "I suggest '1984' by George Orwell. This dystopian novel explores themes of totalitarianism, surveillance, and individuality in a chilling future society.";
    } else if (message.toLowerCase().includes('book summary for')) {
      const bookTitle = message.split('book summary for')[1].trim();
      response = `Here's a brief summary of ${bookTitle}: [Insert summary here based on your data].`;
    } else if (message.toLowerCase().includes('famous world literature books')) {
      response = "One famous world literature book is 'One Hundred Years of Solitude' by Gabriel García Márquez. This magical realism novel tells the multi-generational story of the Buendía family in the fictional town of Macondo.";
    } else {
      response = "I'm sorry, I don't understand that. Can you ask something else?";
    }

    setConversation(prev => [...prev, { user: message, bot: response }]);
    setMessage('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        className={`flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 text-white shadow-lg transition-all duration-300 ${isOpen ? 'hidden' : 'flex'}`}
        onClick={toggleChatbot}
      >
        💬
      </button>
      {isOpen && (
        <div className="flex flex-col absolute bottom-16 right-0 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-pink-500 text-white rounded-t-lg p-3 flex justify-between items-center">
            <h2 className="text-lg font-semibold">LitBot</h2>
            <button className="text-white" onClick={toggleChatbot}>✖</button>
          </div>
          <div className="p-4 flex-grow overflow-y-auto">
            {conversation.map((msg, index) => (
              <div key={index} className="mb-4">
                {msg.user && (
                  <>
                    <div className="font-bold text-sm mb-1">You:</div>
                    <div className="bg-blue-500 p-2 rounded-md text-white text-sm mb-2">{msg.user}</div>
                  </>
                )}
                <div className="font-bold text-sm mb-1">LitBot:</div>
                <div className="bg-pink-500 p-2 rounded-md text-white text-sm">{msg.bot}</div>
              </div>
            ))}
          </div>
          <div className="flex p-2 border-t border-gray-300">
            <input
              type="text"
              className="flex-grow border border-gray-300 rounded-l-lg px-2 py-1 text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              className="bg-pink-500 text-white rounded-r-lg px-4 py-1 text-sm"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;