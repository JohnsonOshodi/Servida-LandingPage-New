import { useEffect } from "react";
import { useBookingStore } from "../store/BookCleaningStore";
import { useNavigate } from "react-router-dom";

const HouseDescription = () => {
  const {
    formData,
    updateRooms,
    toggleWater,
    getTotalPrice, // ✅ Use getTotalPrice instead of calculateTotalPrice
    setFormData,
  } = useBookingStore();

  const navigate = useNavigate();

  const roomTypes = [
    { label: "Bedrooms", key: "bedrooms" },
    { label: "Sitting Rooms", key: "sittingRooms" },
    { label: "Toilets/Bathrooms", key: "bathrooms", extraCost: 5000 },
    { label: "Kitchens", key: "kitchens", extraCost: 5000 },
    { label: "Floors", key: "floors", extraCost: 5000 },
    { label: "Balconies", key: "balconies", extraCost: 5000 },
    { label: "Stores", key: "stores", extraCost: 5000 },
  ];

  const handleRoomChange = (key, extraCost) => (e) => {
    const numericValue = Math.max(1, parseInt(e.target.value, 10) || 1);
    updateRooms(key, numericValue, extraCost);
  };

  const handleWaterChange = (e) => {
    toggleWater(e.target.value === "no");
  };

  useEffect(() => {
    getTotalPrice(); // ✅ Ensure total price updates dynamically
  }, [formData]);

  const handleNext = () => {
    navigate("/extrainfo"); // Ensure the route is correct
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-[2rem]">
      <div className="w-[50rem] grid grid-cols-2 gap-[1rem]">
        {roomTypes.map(({ label, key, extraCost }) => (
          <div key={key}>
            <label className="text-[1.4rem] font-semibold block mb-[1rem]">
              How many {label.toLowerCase()}:
            </label>
            <input
              type="number"
              value={formData.rooms[key] || ""}
              onChange={handleRoomChange(key, extraCost)}
              min="1"
              className="border rounded px-2 py-1 w-20"
            />
          </div>
        ))}

        <div className="w-full">
          <label className="text-[1.4rem] font-semibold block mb-[1rem]">
            Do you have running water?
          </label>
          <select
            value={formData.hasRunningWater ? "yes" : "no"}
            onChange={handleWaterChange}
            className="w-full px-[1rem] py-[0.7rem] border rounded-[1rem] border-sageForm bg-white text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue h-[5rem]"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[1rem] justify-center mt-[2rem]">
        <span className="font-semibold text-[1.4rem]">Cost</span>
        <span className="font-bold text-[3.6rem] text-sageFormBlue">
          ₦{getTotalPrice().toLocaleString()}
        </span>
      </div>

      <button
        onClick={handleNext}
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
      >
        Next
      </button>
    </div>
  );
};

export default HouseDescription;





