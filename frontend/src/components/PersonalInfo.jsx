import { useState } from "react";
import axios from "axios";

const PersonalInfo = ({ formData, setFormData }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/personal-info", formData);
      if (response.data.success) {
        setMessage("Your information has been submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          homeAddress: "",
          landmark: "",
        });
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col items-center justify-center space-y-4" onSubmit={handleSubmit}>
      {[
        { label: "Full Name", name: "fullName" },
        { label: "Email", name: "email", type: "email" },
        { label: "Phone Number", name: "phoneNumber", type: "tel" },
        { label: "Home Address", name: "homeAddress" },
        {
          label: "Landmark to lookout for when coming (e.g., a bus stop, junction, billboard, etc.)",
          name: "landmark",
        },
      ].map(({ label, name, type = "text" }) => (
        <div key={name} className="w-[50rem]">
          <label className="text-[1.4rem] font-semibold block mb-3">{label}:</label>
          <input
            type={type}
            name={name}
            value={formData[name] || ""}
            onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
            className="w-full px-2 h-[5rem] border rounded-[1rem] border-sageForm bg-sageMidWhite text-[1.4rem] outline-none focus:ring-1 focus:ring-sageDarkBlue"
            required
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-[50rem] h-[5rem] bg-sageDarkBlue text-white rounded-[1rem] text-[1.4rem] font-semibold mt-4"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {message && <p className="text-green-600 text-[1.4rem] mt-3">{message}</p>}
    </form>
  );
};

export default PersonalInfo;

