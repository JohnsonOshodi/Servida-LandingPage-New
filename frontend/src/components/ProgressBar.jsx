import React from 'react';

const ProgressBar = ({ step, totalSteps }) => {
  return (
    <div className="flex justify-center mx-auto items-center mt-4 w-1/2">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`h-2 flex-grow rounded mx-1 ${
            index <= step ? 'bg-sageProgressBar' : 'bg-sageProgressBG'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
