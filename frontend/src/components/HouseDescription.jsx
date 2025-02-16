const HouseDescription = ({ totalPrice }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-[2rem]">
      <div className="w-[50rem] flex items-center gap-[1rem]">
        <div>
          <label className="text-[1.4rem] font-semibold block mb-[1rem]">
            How many sitting rooms:
          </label>
          <input
            type="text"
            className="px-2 h-[5rem] w-[24.5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
          />
        </div>
        <div>
          <label className="text-[1.4rem] font-semibold block mb-[1rem]">
            How many rooms:
          </label>
          <input
            type="text"
            className="px-2 h-[5rem] w-[24.5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
          />
        </div>
      </div>
      <div className="w-[50rem] flex items-center gap-[1rem]">
        <div>
          <label className="text-[1.4rem] font-semibold block mb-[1rem]">
            How many toilets/bathrooms:
          </label>
          <input
            type="text"
            className="px-2 h-[5rem] w-[24.5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
          />
        </div>
        <div>
          <label className="text-[1.4rem] font-semibold block mb-[1rem]">
            How many kitchens:
          </label>
          <input
            type="text"
            className="px-2 h-[5rem] w-[24.5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
          />
        </div>
      </div>
      <div className="w-[50rem] flex items-center gap-[1rem]">
        <div>
          <label className="text-[1.4rem] font-semibold block mb-[1rem]">
            How many Floors:
          </label>
          <input
            type="text"
            className="px-2 h-[5rem] w-[24.5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
          />
        </div>
        <div>
          <label className="text-[1.4rem] font-semibold block mb-[1rem]">
            How many balconies:
          </label>
          <input
            type="text"
            className="px-2 h-[5rem] w-[24.5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
          />
        </div>
      </div>
      <div className="w-[50rem] flex items-center gap-[1rem]">
        <div>
          <label className="text-[1.4rem] font-semibold block mb-[1rem]">
            How many Stores:
          </label>
          <input
            type="text"
            className="px-2 h-[5rem] w-[24.5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
          />
        </div>
        <div>
          <label className="text-[1.4rem] font-semibold block mb-[1rem]">
            Do you have running water:
          </label>
          <input
            type="text"
            className="px-2 h-[5rem] w-[24.5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-[1rem] justify-center mt-[2rem]">
        <span className="font-semibold text-[1.4rem]">Cost</span>
        <span className="font-bold text-[3.6rem] text-sageFormBlue">
          ₦{totalPrice}
        </span>
      </div>
    </div>
  );
};

export default HouseDescription;
