"use client";
import { useState } from "react";

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    businessName: "",
    promotion: "",
    budget: "",
    timeSlot: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card rounded-2xl p-8 md:p-10 glow-border">
          <h2 className="font-gotham text-3xl md:text-4xl text-center text-white mb-4">
            Let&apos;s Run Your Next Ad
          </h2>
          <p className="text-xl text-center text-gray-300 mb-8">
            Fill this form and I&apos;ll get back to you ASAP
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="businessName"
                className="block text-gray-300 mb-2"
              >
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="promotion" className="block text-gray-300 mb-2">
                What You&apos;re Promoting
              </label>
              <input
                type="text"
                id="promotion"
                name="promotion"
                value={formData.promotion}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-gray-300 mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select budget</option>
                <option value="2000-5000">₦2,000 - ₦5,000</option>
                <option value="5000-10000">₦5,000 - ₦10,000</option>
                <option value="10000+">₦10,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="timeSlot" className="block text-gray-300 mb-2">
                Preferred Time Slot
              </label>
              <select
                id="timeSlot"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select time slot</option>
                <option value="morning">Morning (8am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 4pm)</option>
                <option value="evening">Evening (4pm - 8pm)</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full hover-glow transition-all duration-300"
            >
              Submit & Chat on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
