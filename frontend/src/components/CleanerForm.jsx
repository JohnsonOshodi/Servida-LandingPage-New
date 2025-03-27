import { useState } from "react";
import ProgressBar from "./ProgressBar";
import PersonalInfo from "./PersonalInfo";
import CleaningPlan from "./CleaningPlan";
import HouseDescription from "./HouseDescription";
import HowDidYouHear from "./HowDidYouHear";
import ExtraInfo from "./ExtraInfo";
import Loader from "./Loader";
import ThankYou from "./ThankYou";

const CleanerForm = () => {
const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    landmark: "",
    rooms: {},
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const FormTitles = [
    "Personal Information",
    "Cleaning Plan",
    "House Description",
    "Extra Information",
    "How Did You Hear About Us?",
  ];

  const PageDisplay = () => {
    if (isLoading) return <Loader onComplete={handleComplete} />;
    if (isSubmitted) return <ThankYou onRestart={restartForm} />;

    switch (page) {
      case 0:
        return <PersonalInfo formData={formData} setFormData={setFormData} />;
      case 1:
        return <CleaningPlan formData={formData} setFormData={setFormData} />;
      case 2:
        return <HouseDescription formData={formData} setFormData={setFormData} />;
      case 3:
        return <ExtraInfo formData={formData} setFormData={setFormData} />;
      case 4:
        return <HowDidYouHear formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  const handleSubmit = async () => {
    setIsValid(true);

    // Ensure latest state is used
    setFormData((prev) => ({ ...prev }));

    setTimeout(async () => {
      console.log("🚀 Final Form Data Being Sent:", JSON.stringify(formData, null, 2));
      
      if (page === FormTitles.length - 1) {
        setIsLoading(true);
        setShowForm(false);

        try {
          const response = await fetch("http://localhost:5000/api/bookings", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            console.log("✅ Booking successfully sent!");
            setIsSubmitted(true);
          } else {
            console.error("❌ Error submitting booking:", response.statusText);
          }
        } catch (error) {
          console.error("❌ Network error:", error);
        }
      } else {
        setPage((currPage) => currPage + 1);
      }
    }, 100); // Ensure state updates before sending data
  };

  return (
    <div className="bg-white h-[125vh] w-full flex items-center justify-center">
      {showForm && (
        <div className="bg-sageMidWhite p-8 h-[67.4rem] w-[58.8rem] rounded-[2rem] shadow-md flex flex-col">
          <ProgressBar step={page} totalSteps={FormTitles.length} />

          <div className="text-center mt-4 mb-[2rem]">
            <h2 className="font-bold text-[2.4rem] text-sageFormBlue ">
              {FormTitles[page]}
            </h2>
          </div>

          <div className="mt-4 flex-grow">{PageDisplay()}</div>

          <div className="flex justify-between mt-4 px-10">
            {page > 0 && (
              <button
                className="text-[1.6rem] text-sageDarkBlue"
                onClick={() => setPage((currPage) => currPage - 1)}
              >
                Previous
              </button>
            )}
            <button
              className="bg-sageDarkBlue text-white text-[1.6rem] py-[1rem] px-[4rem] rounded-[1rem] ml-auto"
              onClick={handleSubmit}
            >
              {page === FormTitles.length - 1 ? "Finish" : "Next"}
            </button>
          </div>

          {!isValid && <div className="text-red-500 text-center mt-4">{errorMessage}</div>}
        </div>
      )}
      {!showForm && isLoading && (
        <div className="flex justify-center items-center w-full h-[125vh]">
          <Loader onComplete={handleComplete} />
        </div>
      )}
      {isSubmitted && <ThankYou onRestart={restartForm} />}
    </div>
  );
};

export default CleanerForm;

