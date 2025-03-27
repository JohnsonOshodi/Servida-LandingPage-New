import { useEffect } from "react";
import { useBookingStore } from "../store/BookCleaningStore"; // ✅ Import Zustand store

const PersonalInfo = () => {
  const { formData, setFormData } = useBookingStore(); // ✅ Get state from Zustand

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`📝 Updating ${name}:`, value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("🆕 FormData Updated:", formData);
  }, [formData]);

  return (
    <form className="flex flex-col items-center justify-center space-y-4">
      {[
        { label: "Full Name", name: "fullName", type: "text" },
        { label: "Email", name: "email", type: "email" },
        { label: "Phone Number", name: "phone", type: "tel" },
        { label: "Home Address", name: "address", type: "text" },
        {
          label: "Landmark to lookout for when coming (e.g., a bus stop, junction, billboard, etc.)",
          name: "landmark",
          type: "text",
        },
      ].map(({ label, name, type }) => (
        <div key={name} className="w-[50rem]">
          <label htmlFor={name} className="text-[1.4rem] font-semibold block mb-3">
            {label}:
          </label>
          <input
            id={name}
            type={type}
            name={name}
            value={formData?.[name] || ""}
            onChange={handleChange}
            required
            className="w-full px-2 h-[5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
          />
        </div>
      ))}
    </form>
  );
};

export default PersonalInfo;


