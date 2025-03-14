import { useState, useEffect } from 'react';

const Logo = "/assets/images/logo.svg";  

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          onComplete();
        }
        return newProgress;
      });
    }, 300); 

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-[29.9rem] w-[42rem] p-[1rem] rounded-[1rem] bg-sageMidWhite shadow-md mb-[10rem]">
      <div className="flex items-center">
        <img src={Logo} height={70} width={68} alt="SageHub Logo" />
        <span className="text-[2.38rem] text-sageHeavyBlue font-[800]">
          SageHub
        </span>
      </div>

      <div className="w-[20rem] h-[.5rem] bg-gray-200 rounded-[1rem] overflow-hidden mt-[1.5rem]">
        <div
          className="h-full bg-blue-500 transition-width duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Loader;
