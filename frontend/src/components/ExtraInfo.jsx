import { useState } from 'react';

const ExtraInfo = ({ formData, setFormData, totalPrice }) => {
  const [isChecked, setIsChecked] = useState(formData.hasDependents || false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    setFormData({ ...formData, hasDependents: !isChecked });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex items-center flex-col justify-center">
      <div className="flex items-center justify-center gap-[4rem]">
        <span className=" text-[1.4rem] font-semibold">
          Do you have kids, dependents or elderly around?
        </span>

        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggle"
              className="sr-only peer"
              checked={isChecked}
              onChange={handleToggle}
            />
            <div
              className={`block bg-gray-600 w-[5rem] h-[2.5rem] rounded-full transition duration-300 ${
                isChecked ? 'bg-sageDarkBlue' : ''
              }`}
            ></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-[2.1rem] h-[2.1rem] rounded-full transition-transform duration-300 ${
                isChecked ? 'translate-x-[2.5rem]' : ''
              }`}
            ></div>
          </div>
          <span className="text-[1.2rem] ml-4">{isChecked ? 'Yes' : 'No'}</span>
        </label>
      </div>

      <form className="flex flex-col items-center justify-center space-y-[1rem] mt-[2rem]">
        <div className="w-[50rem]">
          <label className="text-[1.4rem] font-semibold block mb-[1rem]">
            Do you have equipments for cleaning:
          </label>
          <select
            name="hasCleaningEquipment"
            value={formData.hasCleaningEquipment || ''}
            onChange={handleInputChange}
            className="w-full px-[1rem] py-[0.7rem] border font-normal rounded-[0.4rem] border-sageForm bg-white text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue h-[5rem]"
          >
            <option value="" data-price="0">
              --select--
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="w-[50rem]">
          <label className="text-[1.4rem] font-semibold block mb-[.5rem]">
            How would you want us to reach you:
          </label>
          <select
            name="contactPreference"
            value={formData.contactPreference || ''}
            onChange={handleInputChange}
            className="w-full px-[1rem] py-[0.7rem] border font-normal rounded-[0.4rem] border-sageForm bg-white text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue h-[5rem]"
          >
            <option value="" data-price="0">
              --select--
            </option>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
          </select>
        </div>

        <div className="w-[50rem]">
          <label className="text-[1.4rem] font-semibold block mb-[.5rem]">
            How many cleaners would you recommend for the job
          </label>
          <input
            type="number"
            name="numCleaners"
            value={formData.numCleaners || ''}
            onChange={handleInputChange}
            className="w-full px-2 h-[5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
          />
        </div>
        <div className="w-[50rem]">
          <label className="text-[1.4rem] font-semibold block mb-[.5rem]">
            Special note to take into consideration
          </label>
          <input
            type="text"
            name="specialNote"
            value={formData.specialNote || ''}
            onChange={handleInputChange}
            className="w-full px-2 h-[5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
          />
        </div>

        <div className="flex flex-col items-center gap-[1rem] justify-center mt-3">
          <span className="font-semibold text-[1.4rem]">Cost</span>
          <span className="font-bold text-[3.6rem] text-sageFormBlue">
            ₦{totalPrice}
          </span>
        </div>
      </form>
    </div>
  );
};

export default ExtraInfo;
