import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔁 You can replace this with sending data to a backend or email service
    console.log("Contact form submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="bg-black text-white min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-8">
          Contact Us
        </h2>

        {submitted && (
          <div className="text-green-400 text-center font-semibold mb-6 animate-pulse">
            ✅ Your message has been sent!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="+20..."
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg w-full transition"
          >
            📤 Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
