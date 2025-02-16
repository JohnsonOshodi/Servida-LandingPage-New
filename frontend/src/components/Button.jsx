import { useState } from 'react';

const Button = ({ text, className, bgColor }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 400); // Match the duration of the animation
  };

  return (
    <button
      className={`text-white text-[1.6rem] lg:text-[1.6rem] md:text-[1.3rem] py-[1rem] px-[2rem] transition-all duration-300 rounded-xl font-normal bg-sageDarkBlue ${className} ${bgColor} ${
        isPressed ? 'press-animation' : ''
      }`}
      onClick={handlePress}
    >
      {text}
    </button>
  );
};

export default Button;
