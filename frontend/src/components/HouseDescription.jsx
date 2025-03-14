import { useBookingStore } from "@/store/BookCleaningStore";

const HouseDescription = () => {
  const {
    rooms,
    hasRunningWater,
    updateRoom,
    setWaterAvailability,
    getTotalPrice
  } = useBookingStore();

  // Room configuration
  const roomTypes = [
    { label: 'Rooms', key: 'bedrooms', affectsPrice: true },
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
                className={`w-full px-2 h-[5rem] border rounded-[1rem] border-sageForm ${room.affectsPrice ? 'bg-sageMidWhite' : 'bg-gray-100'
                  } text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue`}
                // disabled={!room.affectsPrice}
              />
              {/* {!room.affectsPrice && (
                <p className="text-[1.2rem] text-gray-500 mt-1">
                  (Informational only)
                </p>
              )} */}
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

      <div className="flex flex-col items-center gap-[1rem] justify-center mt-[2rem]">
        <span className="font-semibold text-[1.4rem]">Cost</span>
        <span className="font-bold text-[3.6rem] text-sageFormBlue">
          ₦{getTotalPrice().toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default HouseDescription;