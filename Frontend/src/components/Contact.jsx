import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('http://localhost:4001/msg/message', formData);
      
      if (response.data.success) {
        toast.success(response.data.message || 'Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        toast.error(response.data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(
        error.response?.data?.message || 
        error.message || 
        'Error sending message'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-136px)] flex items-center justify-center p-4">
      <div className="max-w-md w-full mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl text-center text-pink-600 font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className='block text-black text-sm font-semibold mb-2'>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Elizabeth Bennet"
              className='w-full px-3 py-2 border rounded-lg focus:border-pink-500 focus:outline-none'
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className='block text-black text-sm font-semibold mb-2'>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="elizabethabc@gmail.com"
              className='w-full px-3 py-2 border rounded-lg focus:border-pink-500 focus:outline-none'
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className='block text-black text-sm font-semibold mb-2'>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message here..."
              className='w-full px-3 py-2 border rounded-lg focus:border-pink-500 focus:outline-none'
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-pink-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;