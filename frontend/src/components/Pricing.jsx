import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import Button from './Button';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', selectedTier: '' });

  const handleToggleExpand = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/book-cleaning/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Booking successful!');
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section className="py-10 pb-5 bg-sageLightBlue px-4 lg:px-32" id="pricing">
      <div className="container mx-auto px-4 pb-2">
        <h2 className="text-[4rem] text-[#191A15] font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 space-x-10">
          {/* Pricing plans go here */}
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <select name="selectedTier" value={formData.selectedTier} onChange={handleChange} required>
            <option value="">Select a Plan</option>
            <option value="Deep Cleaning">Deep Cleaning</option>
            <option value="Standard Cleaning">Standard Cleaning</option>
            <option value="Post Construction">Post Construction</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};
<button
    type="submit"
    style={{
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        width: "100%",
    }}
>
    Submit Booking
</button>

export default Pricing;
