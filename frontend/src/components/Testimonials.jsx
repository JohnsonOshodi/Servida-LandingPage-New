//import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      text: '"Quick response and very on time with delivery"',
      author: 'Abimbola Adebayo',
    },
    {
      text: '"Quick response and very on time with delivery"',
      author: 'Abimbola Adebayo',
    },
    {
      text: '"Quick response and very on time with delivery"',
      author: 'Abimbola Adebayo',
    },
    {
      text: '"Quick response and very on time with delivery"',
      author: 'Abimbola Adebayo',
    },
  ];

  return (
    <div className="bg-sageLightBlue mb-8 py-16 lg:px-20 px-4 flex flex-col items-center ">
      <h2 className="text-[4rem] text-[#191A15] font-bold mb-10 self-start md:ml-[7rem] text-center">
        What are our customers saying
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-16 mb-14">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-sageMidWhite p-4 rounded-md max-w-[25rem]"
          >
            <p className="text-sageMidBlack mb-4 text-[1.4rem]">
              {testimonial.text}
            </p>
            <p className="font-bold text-[1.6rem] text-sageBlack">
              {testimonial.author}
            </p>
          </div>
        ))}
      </div>

      <Link to="/cleaner">
        <Button text="Book a Cleaner" />
      </Link>
    </div>
  );
};

export default Testimonials;
