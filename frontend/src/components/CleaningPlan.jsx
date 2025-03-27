import { useEffect } from 'react';
import { useBookingStore } from '../store/BookCleaningStore';

const CleaningPlan = ({ formData, setFormData }) => {
  const {
    selectedTier,
    frequency,
    setTier,
    setFrequency,
    getTotalPrice
  } = useBookingStore();

  // Sync form data with store and update price dynamically
  useEffect(() => { 
    const newTotalPrice = getTotalPrice(); 

    setFormData(prev => ({
      ...prev,
      cleaningPlan: selectedTier,
      cleaningFrequency: frequency,
      totalPrice: newTotalPrice
    }));

    console.log("🛠 Updated Cleaning Plan:", selectedTier);
    console.log("🛠 Updated Frequency:", frequency);
    console.log("💰 Updated Total Price:", newTotalPrice);
  }, [selectedTier, frequency]); // Removed setFormData from dependencies

  const handlePlanChange = (event) => {
    const selectedPlan = event.target.value;
    console.log(`🎯 User Selected Plan: ${selectedPlan}`);
    setTier(selectedPlan);  
  };

  const handleFrequencyChange = (event) => {
    const selectedFrequency = event.target.value;
    console.log(`🎯 User Selected Frequency: ${selectedFrequency}`);
    setFrequency(selectedFrequency);  
  };

  return (
    <form className="flex flex-col items-center justify-center space-y-[2rem]">
      <div className="w-[50rem]">
        <label className="text-[1.4rem] font-semibold block mb-[1rem]">
          What plan are you paying for:
        </label>
        <select
          name="cleaningPlan"
          value={selectedTier}
          onChange={handlePlanChange}
          className="w-full px-[1rem] py-[0.7rem] border font-normal rounded-[0.4rem] border-sageForm bg-white text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue h-[5rem]"
        >
          <option value="">Select an option</option>
          <option value="basic">Basic Cleaning</option>
          <option value="deep">Deep Cleaning</option>
        </select>
      </div>

      <div className="w-[50rem]">
        <label className="text-[1.4rem] font-semibold block mb-[1rem]">
          Cleaning frequency:
        </label>
        <select
          name="cleaningFrequency"
          value={frequency}
          onChange={handleFrequencyChange}
          className="w-full px-[1rem] py-[0.7rem] border font-normal rounded-[0.4rem] border-sageForm bg-white text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue h-[5rem]"
        >
          <option value="">Select an option</option>
          <option value="weekly">Weekly</option>
          <option value="biweekly">Bi-weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div className="w-[50rem]">
        <label className="text-[1.4rem] font-semibold block mb-[1rem]">
          Preferred date to begin:
        </label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate || ''}
          onChange={e => setFormData({ ...formData, startDate: e.target.value })}
          className="w-full px-2 h-[5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
        />
      </div>

      <div className="w-[50rem]">
  <label className="text-[1.4rem] font-semibold block mb-[1rem]">
    Preferred time for cleaner to start each time
  </label>
  <select
    name="preferredStartTime" 
    value={formData.preferredStartTime || ""}
    onChange={e => setFormData({ ...formData, preferredStartTime: e.target.value })} 
    className="w-full px-[1rem] py-[0.7rem] border font-normal rounded-[0.4rem] border-sageForm bg-white text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue h-[5rem]"
  >
    <option value="">Select an option</option>
    <option value="morning">Morning</option>
    <option value="afternoon">Afternoon</option>
    <option value="evening">Evening</option>
  </select>
</div>


      <div className="flex flex-col items-center gap-[1rem] justify-center mt-3">
        <span className="font-semibold text-[1.4rem]">Cost</span>
        <span className="font-bold text-[3.6rem] text-sageFormBlue">
          ₦{(formData.totalPrice || 0).toLocaleString()}
        </span>
      </div>
    </form>
  );
};

export default CleaningPlan;
