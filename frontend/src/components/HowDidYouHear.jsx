import { useBookingStore } from "../store/BookCleaningStore";
import { useState, useEffect } from "react";

const HowDidYouHear = () => {
  const {
    selectedTier,
    frequency,
    rooms,
    extraStaff,
    hasRunningWater,
    getTotalPrice,
    referralSource,
    setReferralSource,
  } = useBookingStore();

  const [loading, setLoading] = useState(false);
  
  const [toggles, setToggles] = useState({
    whatsapp: false,
    linkedin: false,
    google: false,
    instagram: false,
    facebook: false,
    wordOfMouth: false,
  });

  useEffect(() => {
    const updatedReferralSource = Object.keys(toggles).filter((key) => toggles[key]).join(", ");
    setReferralSource(updatedReferralSource);
  
    console.log("Updated referralSource:", updatedReferralSource);
    console.log("Zustand Store Data:", JSON.stringify(useBookingStore.getState(), null, 2));
  }, [toggles]);

  const handleToggle = (id) => {
    setToggles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  
  const handleSubmit = async () => { 
    setLoading(true);

    // ✅ Get formData and make sure it's fully updated
    const { formData, totalPrice, setFormData } = useBookingStore.getState(); 

    // ✅ Ensure totalPrice is updated
    formData.totalPrice = getTotalPrice();

    // ✅ Ensure every field has the correct value before submission
    setFormData({
        ...formData,
        extraInfo: formData.extraInfo?.trim() || "N/A",
        preferredStartTime: formData.preferredStartTime?.trim() || "Not Specified",
        contactPreference: formData.contactPreference?.trim() || "Not Provided",
    });

    // ✅ Log full formData before sending
    console.log("📌 Full formData before sending:", JSON.stringify(formData, null, 2));

    const finalBookingData = {
        fullName: formData.fullName || "User Name",
        email: formData.email || "user@example.com",
        phone: formData.phone || "1234567890",
        address: formData.address || "User Address",
        landmark: formData.landmark || "N/A",  
        selectedTier: formData.selectedTier || "basic",  
        frequency: formData.frequency || "weekly",  
        rooms: formData.rooms || {},  
        extraStaff: formData.extraStaff ?? 0,  
        hasRunningWater: formData.hasRunningWater ?? false, 
        cleaningPlan: formData.cleaningPlan || "Not specified",
        preferredStartTime: formData.preferredStartTime,  
        totalPrice: formData.totalPrice,  
        extraInfo: formData.extraInfo,  
        hasCleaningEquipment: formData.hasCleaningEquipment ?? true,
        contactPreference: formData.contactPreference,  
        heardAboutUs: formData.heardAboutUs 
            ? formData.heardAboutUs.split(", ").map(source => source.trim()) 
            : []
    };

    console.log("🚀 Final Booking Data Being Sent:", JSON.stringify(finalBookingData, null, 2));

    try {
        const response = await fetch("http://localhost:5000/api/book-cleaning", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(finalBookingData),
        });

        if (response.ok) {
            alert("Booking successful! A confirmation email has been sent.");
        } else {
            const errorData = await response.json();
            console.error("Server Error:", errorData);
            alert(`Error: ${errorData.error || "Error submitting booking."}`);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred, please try again.");
    } finally {
        setLoading(false);
    }
};


    return (
    <div className="flex flex-col items-center justify-center w-full mx-auto gap-[3.5rem]">
      {[
        { id: "whatsapp", label: "WhatsApp" },
        { id: "linkedin", label: "LinkedIn" },
        { id: "google", label: "Google Search" },
        { id: "instagram", label: "Instagram" },
        { id: "facebook", label: "Facebook" },
        { id: "wordOfMouth", label: "Word of Mouth" },
      ].map(({ id, label }) => (
        <div key={id} className="flex items-center justify-between w-[50rem]">
          <span className="text-[1.4rem] font-semibold">{label}</span>
          <label htmlFor={`toggle-${id}`} className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id={`toggle-${id}`}
                className="sr-only peer"
                checked={toggles[id]}
                onChange={() => handleToggle(id)}
              />
              <div
                className={`block bg-gray-600 w-[5rem] h-[2.5rem] rounded-full transition duration-300 ${
                  toggles[id] ? "bg-sageDarkBlue" : ""
                }`}
              ></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-[2.1rem] h-[2.1rem] rounded-full transition-transform duration-300 ${
                  toggles[id] ? "translate-x-[2.5rem]" : ""
                }`}
              ></div>
            </div>
            <span className="text-[1.2rem] ml-4">{toggles[id] ? "Yes" : "No"}</span>
          </label>
        </div>
      ))}

      <div className="flex flex-col items-center gap-[1rem] justify-center mt-3">
        <span className="font-semibold text-[1.4rem]">Cost</span>
        <span className="font-bold text-[3.6rem] text-sageFormBlue">
          ₦{getTotalPrice().toLocaleString()}
        </span>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-3 bg-sageDarkBlue text-white text-[1.4rem] font-semibold rounded-lg hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Finish & Submit"}
      </button>
    </div>
  );
};

export default HowDidYouHear;


