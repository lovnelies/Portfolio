import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Hubo un error al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error al conectar con el servidor.');
    }
  };

  return (
    <section className="py-12 bg-[#f6e2b3] px-6 font-poppins text-[#ff8daa]">
      <div className="max-w-2xl mx-auto  rounded-xl shadow-md p-8">
        <h2 className="text-4xl font-bold mb-6 text-center text-[#ff8daa]">Contact Me 💌</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            name="message"
            placeholder="Your text here"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-3 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="bg-[#b49982] hover:bg-[#fdaeae] text-white font-semibold py-2 px-6 rounded-md transition"
          >
            Send ✉️
          </button>
          {status && <p className="text-center mt-2 text-sm text-pink-700">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
