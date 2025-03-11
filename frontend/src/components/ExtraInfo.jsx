import { useBookingStore } from "@/store/BookCleaningStore";
import { useEffect, useState } from "react";
import axios from "axios";

const ExtraInfo = ({ formData, setFormData }) => {
  const { extraStaff, setExtraStaff, getTotalPrice } = useBookingStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      extraStaff,
    }));
  }, [extraStaff, setFormData]);

  const handleStaffChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value, 10) || 0);
    setExtraStaff(value);
  };

  // Function to submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("http://localhost:5000/api/extra-info", {
        email: formData.email, // Include email in the request
        hasDependents: formData.hasDependents,
        hasCleaningEquipment: formData.hasCleaningEquipment,
        contactPreference: formData.contactPreference,
        numCleaners: extraStaff,
        specialNote: formData.specialNote,
      });

      setSuccess("Form submitted successfully!");
      console.log("Response:", response.data);
    } catch (err) {
      setError("Failed to submit. Please try again.");
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center flex-col justify-center">
      <form className="flex flex-col items-center justify-center space-y-4 mt-6" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center gap-16">
          <span className="text-lg font-semibold">
            Do you have kids, dependents, or elderly around?
          </span>
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id="toggle"
                className="sr-only peer"
                checked={formData.hasDependents || false}
                onChange={(e) => setFormData({ ...formData, hasDependents: e.target.checked })}
              />
              <div className={`block w-20 h-10 rounded-full transition duration-300 ${formData.hasDependents ? "bg-blue-600" : "bg-gray-600"}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-8 h-8 rounded-full transition-transform duration-300 ${formData.hasDependents ? "translate-x-10" : ""}`}></div>
            </div>
            <span className="text-lg ml-4">{formData.hasDependents ? "Yes" : "No"}</span>
          </label>
        </div>

        <div className="w-96">
          <label className="text-lg font-semibold block mb-2">Do you have equipment for cleaning?</label>
          <select
            name="hasCleaningEquipment"
            value={formData.hasCleaningEquipment || ""}
            onChange={(e) => setFormData({ ...formData, hasCleaningEquipment: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg bg-white text-lg focus:ring-1 focus:ring-blue-600 h-12"
          >
            <option value="">--select--</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="w-96">
          <label className="text-lg font-semibold block mb-2">How would you like us to reach you?</label>
          <select
            name="contactPreference"
            value={formData.contactPreference || ""}
            onChange={(e) => setFormData({ ...formData, contactPreference: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg bg-white text-lg focus:ring-1 focus:ring-blue-600 h-12"
          >
            <option value="">--select--</option>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
          </select>
        </div>

        <div className="w-96">
          <label className="text-lg font-semibold block mb-2">How many cleaners would you recommend for the job?</label>
          <input
            type="number"
            name="numCleaners"
            min="0"
            value={extraStaff}
            onChange={handleStaffChange}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-lg focus:ring-1 focus:ring-blue-600 h-12"
          />
        </div>

        <div className="w-96">
          <label className="text-lg font-semibold block mb-2">Special notes to take into consideration:</label>
          <input
            type="text"
            name="specialNote"
            value={formData.specialNote || ""}
            onChange={(e) => setFormData({ ...formData, specialNote: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-lg focus:ring-1 focus:ring-blue-600 h-12"
          />
        </div>

        <div className="flex flex-col items-center gap-2 mt-3">
          <span className="font-semibold text-lg">Cost</span>
          <span className="font-bold text-3xl text-blue-600">₦{getTotalPrice().toLocaleString()}</span>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md mt-4" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {success && <p className="text-green-500">{success}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default ExtraInfo;

