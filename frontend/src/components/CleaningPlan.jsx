import { useEffect, useState } from 'react';
import axios from 'axios';
import { useBookingStore } from '@/store/BookCleaningStore';

const CleaningPlan = ({ formData, setFormData }) => {
  const { selectedTier, frequency, setTier, setFrequency, getTotalPrice } = useBookingStore();
  const [arrivalTime, setArrivalTime] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      cleaningPlan: selectedTier,
      cleaningFrequency: frequency,
      arrivalTime,
    }));
  }, [selectedTier, frequency, arrivalTime, setFormData]);

  const handleSubmit = async () => {
    if (!formData.cleaningPlan || !formData.cleaningFrequency || !formData.startDate || !arrivalTime) {
      setError('All fields are required.');
      return;
    }
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/forms/cleaning-plan-submit', {
        ...formData,
        arrivalTime,
        totalPrice: getTotalPrice(),
      });
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Submission error:', error.response?.data || error.message);
      setError('Failed to submit. Try again.');
    }
  };

  return (
    <form className="space-y-6">
      <label>Cleaning Plan:</label>
      <select onChange={e => setTier(e.target.value)} value={selectedTier}>
        <option value="basic">Basic Cleaning</option>
        <option value="deep">Deep Cleaning</option>
      </select>
      
      <label>Cleaning Frequency:</label>
      <select onChange={e => setFrequency(e.target.value)} value={frequency}>
        <option value="onceAWeek">Weekly</option>
        <option value="twiceAWeek">Bi-weekly</option>
        <option value="everyday">Monthly</option>
      </select>
      
      <label>Start Date:</label>
      <input type="date" onChange={e => setFormData({ ...formData, startDate: e.target.value })} value={formData.startDate || ''} />
      
      <label>Preferred Time:</label>
      <select onChange={e => setArrivalTime(e.target.value)} value={arrivalTime}>
        <option value="">Select a time</option>
        <option value="morning">Morning</option>
        <option value="afternoon">Afternoon</option>
        <option value="evening">Evening</option>
      </select>
      
      {error && <p className="text-red-500">{error}</p>}
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default CleaningPlan;
