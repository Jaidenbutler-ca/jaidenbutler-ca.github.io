import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section id="contact" className="bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact Me</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border rounded border-gray-300" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Your Email" className="w-full p-3 border rounded border-gray-300" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Your Message" className="w-full p-3 border rounded border-gray-300 h-32"></textarea>
              </div>
              <button type="submit" className="bg-primary py-2 px-6 rounded hover:bg-accent transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </section>
      );
}

export default ContactForm;