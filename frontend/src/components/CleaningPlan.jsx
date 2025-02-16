import { useState, useEffect } from 'react';

const CleaningPlan = ({ formData, setFormData, setTotalPrice, totalPrice }) => {
  const [selectedPrices, setSelectedPrices] = useState({
    cleaningPlan: 0,
    cleaningFrequency: 0,
    arrivalTime: 0,
  });

  useEffect(() => {
    const total = Object.values(selectedPrices).reduce(
      (acc, price) => acc + price,
      0
    );
    setTotalPrice(total);
  }, [selectedPrices, setTotalPrice]);

  const handleSelectChange = e => {
    const { name, value } = e.target;
    const price = parseFloat(e.target.selectedOptions[0].dataset.price);

    setFormData({
      ...formData,
      [name]: value,
    });

    setSelectedPrices(prevPrices => ({
      ...prevPrices,
      [name]: price,
    }));
  };

  return (
    <form className="flex flex-col items-center justify-center space-y-[2rem]">
      <div className="w-[50rem]">
        <label className="text-[1.4rem] font-semibold block mb-[1rem]">
          What plan are you paying for:
        </label>
        <select
          name="cleaningPlan"
          value={formData.cleaningPlan || ''}
          onChange={handleSelectChange}
          className="w-full px-[1rem] py-[0.7rem] border font-normal rounded-[0.4rem] border-sageForm bg-white text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue h-[5rem]"
        >
          <option value="" data-price="0">
            --select--
          </option>
          <option value="basic" data-price="50">
            Basic - ₦50
          </option>
          <option value="standard" data-price="75">
            Standard - ₦75
          </option>
          <option value="premium" data-price="100">
            Premium - ₦100
          </option>
        </select>
      </div>

      <div className="w-[50rem]">
        <label className="text-[1.4rem] font-semibold block mb-[1rem]">
          Cleaning frequency:
        </label>
        <select
          name="cleaningFrequency"
          value={formData.cleaningFrequency || ''}
          onChange={handleSelectChange}
          className="w-full px-[1rem] py-[0.7rem] border font-normal rounded-[0.4rem] border-sageForm bg-white text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue h-[5rem]"
        >
          <option value="" data-price="0">
            --select--
          </option>
          <option value="weekly" data-price="20">
            Weekly - ₦20
          </option>
          <option value="biweekly" data-price="35">
            Bi-weekly - ₦35
          </option>
          <option value="monthly" data-price="50">
            Monthly - ₦50
          </option>
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
          onChange={e =>
            setFormData({ ...formData, startDate: e.target.value })
          }
          className="w-full px-2 h-[5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
        />
      </div>

      <div className="w-[50rem]">
        <label className="text-[1.4rem] font-semibold block mb-2">
          Preferred time for cleaner to arrive each time:
        </label>
        <select
          name="arrivalTime"
          value={formData.arrivalTime || ''}
          onChange={handleSelectChange}
          className="w-full px-[1rem] py-[0.7rem] border font-normal rounded-[0.4rem] border-sageForm bg-white text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue h-[5rem]"
        >
          <option value="" data-price="0">
            --select--
          </option>
          <option value="morning" data-price="10">
            Morning - ₦10
          </option>
          <option value="afternoon" data-price="15">
            Afternoon - ₦15
          </option>
          <option value="evening" data-price="20">
            Evening - ₦20
          </option>
        </select>
      </div>

      <div className="flex flex-col items-center gap-[1rem] justify-center mt-3">
        <span className="font-semibold text-[1.4rem]">Cost</span>
        <span className="font-bold text-[3.6rem] text-sageFormBlue">
          ₦{totalPrice}
        </span>
      </div>
    </form>
  );
};

export default CleaningPlan;
