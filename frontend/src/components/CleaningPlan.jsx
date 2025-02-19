import { useEffect } from 'react';
import { useBookingStore } from '@/store/BookCleaningStore';

const CleaningPlan = ({ formData, setFormData }) => {
  const {
    selectedTier,
    frequency,
    setTier,
    setFrequency,
    getTotalPrice
  } = useBookingStore();

  // Sync form data with store
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      cleaningPlan: selectedTier,
      cleaningFrequency: frequency
    }));
  }, [selectedTier, frequency, setFormData]);

  const handlePlanChange = (e) => {
    const value = e.target.value;
    setTier(value === 'basic-cleaning' ? 'basic' : 'deep');
  };

  const handleFrequencyChange = (e) => {
    const value = e.target.value;
    const frequencyMap = {
      weekly: 'onceAWeek',
      biweekly: 'twiceAWeek',
      monthly: 'everyday'
    };
    setFrequency(frequencyMap[value] || 'onceOff');
  };

  return (
    <form className="flex flex-col items-center justify-center space-y-[2rem]">
      <div className="w-[50rem]">
        <label className="text-[1.4rem] font-semibold block mb-[1rem]">
          What plan are you paying for:
        </label>
        <select
          name="cleaningPlan"
          value={selectedTier === 'basic' ? 'basic-cleaning' : 'deep-cleaning'}
          onChange={handlePlanChange}
          className="w-full px-[1rem] py-[0.7rem] border font-normal rounded-[0.4rem] border-sageForm bg-white text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue h-[5rem]"
        >
          <option value="">Select an option</option>
          <option value="basic-cleaning">Basic Cleaning</option>
          <option value="deep-cleaning">Deep Cleaning</option>
        </select>
      </div>

      <div className="w-[50rem]">
        <label className="text-[1.4rem] font-semibold block mb-[1rem]">
          Cleaning frequency:
        </label>
        <select
          name="cleaningFrequency"
          value={Object.entries({
            onceAWeek: 'weekly',
            twiceAWeek: 'biweekly',
            everyday: 'monthly'
          }).find(([key]) => key === frequency)?.[1] || ''}
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
          name="cleaningPlan"
          // value={selectedTier === 'basic' ? 'basic-cleaning' : 'deep-cleaning'}
          // onChange={handlePlanChange}
          className="w-full px-[1rem] py-[0.7rem] border font-normal rounded-[0.4rem] border-sageForm bg-white text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue h-[5rem]"
        >
          <option value="">Select an option</option>
          <option value="basic-cleaning">Morning</option>
          <option value="deep-cleaning">Afternoon</option>
          <option value="deep-cleaning">Evening</option>
        </select>
      </div>

      <div className="flex flex-col items-center gap-[1rem] justify-center mt-3">
        <span className="font-semibold text-[1.4rem]">Cost</span>
        <span className="font-bold text-[3.6rem] text-sageFormBlue">
          ₦{getTotalPrice().toLocaleString()}
        </span>
      </div>
    </form>
  );
};

export default CleaningPlan;