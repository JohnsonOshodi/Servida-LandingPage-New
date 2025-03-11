import axios from 'axios';
import { useBookingStore } from '@/store/BookCleaningStore';
import { useState } from 'react';

const HowDidYouHear = () => {
  const { getTotalPrice } = useBookingStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [toggles, setToggles] = useState({
    whatsapp: false,
    linkedin: false,
    google: false,
    instagram: false,
    facebook: false,
    wordOfMouth: false,
  });

  const handleToggle = id => {
    setToggles({ ...toggles, [id]: !toggles[id] });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Get selected method
    const selectedMethods = Object.keys(toggles).filter(key => toggles[key]);
    if (selectedMethods.length === 0) {
      setError("Please select at least one option.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/how-did-you-hear", {
        method: selectedMethods.join(", "), // Store multiple selections as comma-separated values
        totalPrice: getTotalPrice(),
      });

      console.log("Response saved:", response.data);
      setSuccess(true);
    } catch (err) {
      setError("Failed to save response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto gap-[3.5rem]">
      {[
        { id: 'whatsapp', label: 'WhatsApp' },
        { id: 'linkedin', label: 'LinkedIn' },
        { id: 'google', label: 'Google Search' },
        { id: 'instagram', label: 'Instagram' },
        { id: 'facebook', label: 'Facebook' },
        { id: 'wordOfMouth', label: 'Word of Mouth' },
      ].map(({ id, label }) => (
        <div key={id} className="flex items-center justify-between w-[50rem]">
          <span className="text-[1.4rem] font-semibold">{label}</span>

          <label htmlFor={`toggle-${id}`} className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id={`toggle-${id}`}
                className="sr-only peer"
                checked={toggles[id]}
                onChange={() => handleToggle(id)}
              />
              <div className={`block bg-gray-600 w-[5rem] h-[2.5rem] rounded-full transition duration-300 ${toggles[id] ? 'bg-sageDarkBlue' : ''}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-[2.1rem] h-[2.1rem] rounded-full transition-transform duration-300 ${toggles[id] ? 'translate-x-[2.5rem]' : ''}`}></div>
            </div>
            <span className="text-[1.2rem] ml-4">
              {toggles[id] ? 'Yes' : 'No'}
            </span>
          </label>
        </div>
      ))}

      <div className="flex flex-col items-center gap-[1rem] justify-center mt-3">
        <span className="font-semibold text-[1.4rem]">Cost</span>
        <span className="font-bold text-[3.6rem] text-sageFormBlue">
          ₦{getTotalPrice().toLocaleString()}
        </span>
      </div>

      {/* Error & Success Messages */}
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Response saved successfully!</p>}

      {/* Submit Button */}
      <button onClick={handleSubmit} className="px-6 py-3 bg-blue-500 text-white rounded-lg mt-4" disabled={loading}>
        {loading ? "Saving..." : "Submit"}
      </button>
    </div>
  );
};

export default HowDidYouHear;
