import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import Freebook from '../components/Freebook.jsx';
import Chatbot from '../components/Chatbot.jsx'; // Import the Chatbot

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
      <Chatbot /> {/* Add the Chatbot component here */}
    </div>
  );
}

export default Home;