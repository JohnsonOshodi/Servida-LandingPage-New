import { useState } from 'react';
import ProgressBar from './ProgressBar';
import PersonalInfo from './PersonalInfo';
import CleaningPlan from './CleaningPlan';
import HouseDescription from './HouseDescription';
import HowDidYouHear from './HowDidYouHear';
import ExtraInfo from './ExtraInfo';
import Loader from './Loader';
import ThankYou from './ThankYou'; // Create a ThankYou component

const CleanerForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted
  const [showForm, setShowForm] = useState(true); // Manage form visibility
  const [isValid, setIsValid] = useState(true); // Track form validity
  const [errorMessage, setErrorMessage] = useState(''); // Track error messages

  const FormTitles = [
    'Personal Information',
    'Cleaning Plan',
    'House Description',
    'Extra Information',
    'How Did You Hear About Us?',
  ];

  const requiredFields = {
    0: ['fullName', 'email', 'phoneNumber', 'homeAddress', 'landmark'],
    // Add required fields for other pages if needed
  };

  const validatePage = () => {
    const fields = requiredFields[page];
    if (fields) {
      for (let field of fields) {
        if (!formData[field]) {
          setErrorMessage(
            `Please fill out the ${field
              .replace(/([A-Z])/g, ' $1')
              .toLowerCase()} field.`
          );
          return false;
        }
      }
    }
    setErrorMessage('');
    return true;
  };

  const PageDisplay = () => {
    if (isLoading) {
      return <Loader onComplete={handleComplete} />;
    }

    if (isSubmitted) {
      return <ThankYou onRestart={restartForm} />;
    }

    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <CleaningPlan
          formData={formData}
          setFormData={setFormData}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
        />
      );
    } else if (page === 2) {
      return (
        <HouseDescription
          formData={formData}
          setFormData={setFormData}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
        />
      );
    } else if (page === 3) {
      return (
        <ExtraInfo
          formData={formData}
          setFormData={setFormData}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
        />
      );
    } else {
      return (
        <HowDidYouHear
          formData={formData}
          setFormData={setFormData}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
        />
      );
    }
  };

  const handleSubmit = () => {
    if (!validatePage()) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    if (page === FormTitles.length - 1) {
      // Form submission logic here, show loader
      setIsLoading(true);
      setShowForm(false); // Hide the form when submitting
    } else {
      setPage(currPage => currPage + 1);
    }
    console.log(formData);
  };

  const handleComplete = () => {
    setIsLoading(false);
    setIsSubmitted(true); // Show the ThankYou component
  };

  const restartForm = () => {
    setPage(0);
    setFormData({});
    setTotalPrice(0);
    setIsSubmitted(false); // Reset the form state
    setShowForm(true); // Show the form again
  };

  return (
    <div className="bg-white h-[125vh] w-full flex items-center justify-center">
      {showForm && (
        <div className="bg-sageMidWhite p-8 h-[67.4rem] w-[58.8rem] rounded-[2rem] shadow-md flex flex-col">
          {showForm && (
            <ProgressBar step={page} totalSteps={FormTitles.length} />
          )}

          <div className="text-center mt-4 mb-[2rem]">
            {showForm && (
              <h2 className="font-bold text-[2.4rem] text-sageFormBlue ">
                {FormTitles[page]}
              </h2>
            )}
          </div>

          <div className="mt-4 flex-grow">{PageDisplay()}</div>

          {!isSubmitted && showForm && (
            <div className="flex justify-between mt-4 px-10">
              {page > 0 && (
                <button
                  className="text-[1.6rem] text-sageDarkBlue"
                  onClick={() => setPage(currPage => currPage - 1)}
                >
                  Previous
                </button>
              )}
              <button
                className={`bg-sageDarkBlue text-white text-[1.6rem] py-[1rem] px-[4rem] rounded-[1rem] ml-auto ${
                  page === 0 ? 'mx-auto' : ''
                }`}
                onClick={handleSubmit}
              >
                {page === FormTitles.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          )}

          {!isValid && (
            <div className="text-red-500 text-center mt-4">{errorMessage}</div>
          )}
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
