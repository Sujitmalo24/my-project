import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white flex items-center justify-center min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-white to-pink-100 opacity-60 -z-10" />
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl shadow-2xl p-8 md:p-16 border border-indigo-100">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center items-start space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-2 tracking-tight">Get in Touch</h2>
          <p className="text-gray-600 text-lg mb-4">We'd love to hear from you! Fill out the form or reach us directly.</p>
          <div className="space-y-2 w-full">
            <div className="flex items-center gap-3 text-indigo-700 font-semibold text-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 10-8 0v4m8 0v4a4 4 0 01-8 0v-4" /></svg>
             sujitmalo939@gmail.com
            </div>
            <div className="flex items-center gap-3 text-indigo-700 font-semibold text-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l1.4-7H6.6M7 13l-1.4 7h10.8L17 13M7 13V6a4 4 0 018 0v7" /></svg>
              0000000000
            </div>
            <div className="flex items-center gap-3 text-indigo-700 font-semibold text-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5" /></svg>
              E-Comarch ,India
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <form className="space-y-6 flex flex-col justify-center" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 md:flex-row">
            <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your Name" className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 transition shadow-sm" required />
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Your Email" className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 transition shadow-sm" required />
          </div>
          <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Subject" className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 transition shadow-sm" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="w-full px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 transition shadow-sm resize-none" rows={5} required />
          <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:from-indigo-700 hover:to-pink-600 transition-all text-lg tracking-wide">Send Message</button>
          {submitted && (
            <div className="mt-4 text-green-600 font-semibold animate-fade-in-up">Thank you! Your message has been sent.</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
