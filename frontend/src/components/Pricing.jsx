import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import Button from './Button';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const pricingPlans = [
    {
      id: 1,
      title: 'Deep Cleaning',
      items: [
        'Standard Cleaning',
        'Dusting of shelves & appliances',
        'Furniture & Upholstery Cleaning',
        'Appliance Maintenance',
        'Outdoor Maintenance',
        'Laundry',
        'Other Miscellaneous Tasks',
      ],
      pricing: [
        {
          title: 'One-Time Off',
          priceRange: '₦15,000 - ₦25,000',
        },
        {
          title: 'One-Week Off',
          priceRange: '₦15,000 - ₦25,000',
        },
      ],
    },
    {
      id: 2,
      title: 'Standard Cleaning',
      items: [
        'Sweeping & Mopping',
        'General Tidying',
        'Bathroom Maintenance',
        'Kitchen Maintenance',
        'Trash clean up',
      ],
      pricing: [
        {
          title: 'One-Time Off',
          priceRange: '₦7,000 - ₦10,000',
        },
        {
          title: 'Once a week',
          priceRange: '₦18,000 - ₦25,000',
        },
        {
          title: 'Twice a week',
          priceRange: '₦20,000 - ₦30,000',
        },
        {
          title: 'Thrice a week',
          priceRange: '₦50,000',
        },
        {
          title: 'Full time',
          priceRange: '₦90,000',
        },
      ],
    },
    {
      id: 3,
      title: 'Post Construction',
      items: [
        'Debris & Dust Removal',
        'Surface Cleaning',
        'Appliance & Fixture Cleaning',
        'Window & Glass Cleaning',
        'Final Inspection & Touchups',
      ],
      pricing: [
        {
          title: '',
          priceRange: '₦50,000 - ₦100,000',
        },
      ],
    },
  ];

  const handleToggleExpand = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <section className="py-10 pb-5 bg-sageLightBlue px-4 lg:px-32" id="pricing">
      <div className="container mx-auto px-4 pb-2">
        <h2 className="text-[4rem] text-[#191A15] font-bold text-center mb-8">
          Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 space-x-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className="flex flex-col px-10 transition-all duration-300"
            >
              <h3 className="text-[3rem] font-bold mb-4 text-center">
                {plan.title}
              </h3>
              <p className="text-center mb-4 text-[1.6rem]">What you can get</p>
              <ul className="text-gray-700 space-y-2 flex flex-col justify-self-center">
                {plan.items.map((item, id) => (
                  <li
                    key={id}
                    className="flex items-center px-5 text-[1.6rem] font-normal"
                  >
                    <div className="flex items-center justify-center w-[2.6rem] h-[2.6rem] bg-sageDarkGreen rounded-full mr-2">
                      <FaCheck className="text-sageOffWhite text-[1rem] ml-1" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div
                className="text-sageWhite font-medium bg-gradient-to-t from-sageGradientBottom via-sageGradientMiddle to-sageGradientTop py-5 px-7 rounded-b-2xl mt-3"
                onClick={() => handleToggleExpand(plan.id)}
              >
                <div
                  className={`items-center flex px-3 mt-2 ${
                    plan.pricing[0].title && plan.pricing[0].priceRange
                      ? 'justify-between'
                      : 'justify-center'
                  }`}
                >
                  {plan.pricing[0].title && (
                    <span className="font-bold text-[1.5rem] text-start">
                      {plan.pricing[0].title}
                    </span>
                  )}
                  {plan.pricing[0].priceRange && (
                    <span className="font-light text-[1.5rem]">
                      {plan.pricing[0].priceRange}
                    </span>
                  )}
                </div>
                <div
                  className={`transition-all flex flex-col gap-5 duration-300 overflow-hidden mt-5  ${
                    expandedCardId === plan.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  {plan.pricing.slice(1).map(({ title, priceRange }, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-3 py-2 text-[1.5rem]"
                    >
                      <span className="font-bold mr-2">{title}</span>
                      <span>{priceRange}</span>
                    </div>
                  ))}
                </div>
              </div>

              {index !== pricingPlans.length - 1 && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => handleToggleExpand(plan.id)}
                    className="flex items-center text-sageDarkBlue"
                  >
                    {/* Updated Image Paths */}
                    <img src="/assets/icons/leftarrow.svg" alt="Left Arrow" />
                    <span className="m-1 font-bold text-[1.6rem]">
                      click here
                    </span>
                    <img src="/assets/icons/rightarrow.svg" alt="Right Arrow" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link to="/cleaner">
          <div className="flex justify-center mt-12">
            <Button text="Book a Cleaner" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Pricing;
