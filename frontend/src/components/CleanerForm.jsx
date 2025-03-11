import React, { useState } from 'react';
import { useBookingStore } from "../store/BookCleaningStore";

const CleanerForm = () => {
  const {
    selectedTier,
    frequency,
    rooms,
    extraStaff,
    hasRunningWater,
    setTier,
    setFrequency,
    updateRoom,
    setExtraStaff,
    setWaterAvailability,
    getTotalPrice,
  } = useBookingStore();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMsg('');

    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      selectedTier,
      frequency,
      rooms,
      extraStaff,
      hasRunningWater,
    };

    try {
      const response = await fetch('http://localhost:5000/api/forms/cleaner-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Form submission failed');
      }

      setSuccessMsg('Booking submitted successfully! Check your email for confirmation.');
      setFormData({ name: '', email: '', phone: '' }); // Reset form fields
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Book a Cleaner</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Tier:
          <select value={selectedTier} onChange={(e) => setTier(e.target.value)}>
            <option value="basic">Basic</option>
            <option value="deep">Deep</option>
          </select>
        </label>

        <label>
          Bedrooms:
          <input
            type="number"
            value={rooms.bedrooms}
            onChange={(e) => updateRoom('bedrooms', Number(e.target.value))}
            min="1"
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Booking'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}

      <p>Total Price: {getTotalPrice()}</p>
    </div>
  );
};

export default CleanerForm;



