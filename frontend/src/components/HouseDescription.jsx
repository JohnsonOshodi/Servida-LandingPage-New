import { useState } from "react";
import { useBookingStore } from "@/store/BookCleaningStore";
import axios from "axios";

const HouseDescription = () => {
  const {
    rooms,
    hasRunningWater,
    updateRoom,
    setWaterAvailability,
    getTotalPrice
  } = useBookingStore();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [savedPrice, setSavedPrice] = useState(null);

  const roomTypes = [
    { label: 'Rooms', key: 'rooms', affectsPrice: true }, // Changed from "bedrooms" to "rooms"
    { label: 'Sitting Rooms', key: 'sittingRooms', affectsPrice: false },
    { label: 'Toilets/Bathrooms', key: 'bathrooms', affectsPrice: false },
    { label: 'Kitchens', key: 'kitchens', affectsPrice: false },
    { label: 'Floors', key: 'floors', affectsPrice: false },
    { label: 'Balconies', key: 'balconies', affectsPrice: false },
    { label: 'Stores', key: 'stores', affectsPrice: false }
  ];

  const handleRoomChange = (type) => (e) => {
    const value = Math.max(0, parseInt(e.target.value, 10) || 0);
    updateRoom(type, value);
  };

  const handleWaterChange = (e) => {
    setWaterAvailability(e.target.value === 'yes');
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/house/add", {
        ...rooms,
        runningWater: hasRunningWater,
      });

      console.log("House description saved:", response.data);
      setSavedPrice(response.data.data.totalPrice); // Save the updated price
    } catch (err) {
      setError("Failed to save house description. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-[2rem]">
      <div className="w-[50rem]">
        <div className="grid grid-cols-2 gap-[1rem]">
          {roomTypes.map((room) => (
            <div key={room.key}>
              <label className="text-[1.4rem] font-semibold block mb-[1rem]">
                How many {room.label.toLowerCase()}:
              </label>
              <input
                type="number"
                min="0"
                value={rooms[room.key] || 0}
                onChange={handleRoomChange(room.key)}
                className={`w-full px-2 h-[5rem] border rounded-[1rem] border-sageForm ${
                  room.affectsPrice ? 'bg-sageMidWhite' : 'bg-gray-100'
                } text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue`}
              />
            </div>
          ))}
          <div className="w-full">
            <label className="text-[1.4rem] font-semibold block mb-[1rem]">
              Do you have running water?
            </label>
            <select
              value={hasRunningWater ? 'yes' : 'no'}
              onChange={handleWaterChange}
              className="w-full px-[1rem] py-[0.7rem] border font-normal rounded-[1rem] border-sageForm bg-transparent text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue h-[5rem]"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </div>

      {/* Display total price */}
      <div className="flex flex-col items-center gap-[1rem] justify-center mt-[2rem]">
        <span className="font-semibold text-[1.4rem]">Cost</span>
        <span className="font-bold text-[3.6rem] text-sageFormBlue">
          ₦{savedPrice !== null ? savedPrice.toLocaleString() : getTotalPrice().toLocaleString()}
        </span>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-2"
        disabled={loading}
      >
        {loading ? "Saving..." : "Submit"}
      </button>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default HouseDescription;
