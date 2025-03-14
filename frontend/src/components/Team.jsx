import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Carousel = () => {
  const images = [
    { photo: '/assets/images/bowo.png', name: 'Oyedele Bowofoluwa', position: 'Designer' },
    { photo: '/assets/images/chidi.png', name: 'Achukwu Chidi', position: 'CMO/Co-Founder' },
    { photo: '/assets/images/daniel.png', name: 'Daniel Gbuji', position: 'Backend Engineer' },
    { photo: '/assets/images/martin.png', name: 'Martins Ifeanyi', position: 'Frontend Developer' },
    {
      photo: '/assets/images/pelumi.png',
      name: 'Akande Oluwapelumi',
      position: 'Secretary/Product Marketer',
    },
    { photo: '/assets/images/praise.png', name: 'Praise Echem', position: 'CEO/Co-Founder' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-gradient-to-b from-sageOffWhite via-sageLightBlue to-sageLowBlue pt-20 pb-20 ">
      <h1 className="text-sageBlack font-aftika text-center font-bold text-[4.8rem] sm:text-4xl md:text-5xl mb-10">
        Our Team
      </h1>
      <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/2 mx-auto">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-5">
                <img
                  src={img.photo}
                  alt={img.name}
                  className="w-3/4 sm:w-2/3 md:w-1/2 h-auto rounded-lg"
                />
              </div>
              <div>
                <p className="text-2xl lg:text-4xl sm:text-xl md:text-[2.4rem] font-semibold mb-2 text-sageBlack font-aftika">
                  {img.name}
                </p>
                <p className="text-lg sm:text-base md:text-[1.6rem] text-gray-700 font-aftika">
                  {img.position}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowRight className="text-sageDarkBlue text-xl sm:text-2xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowLeft className="text-sageDarkBlue text-xl sm:text-2xl" />
  </div>
);

export default Carousel;

// //import React from "react";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import Bowo from '../assets/images/bowo.png';
// import Chidi from '../assets/images/chidi.png';
// import Daniel from '../assets/images/daniel.png';
// import Martin from '../assets/images/martin.png';
// import Pelumi from '../assets/images/pelumi.png';
// import Praise from '../assets/images/praise.png';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

// const Carousel = () => {
//   const images = [
//     { photo: Bowo, name: 'Oyedele Bowofoluwa', position: 'Designer' },
//     { photo: Chidi, name: 'Achukwu Chidi', position: 'CMO/Co-Founder' },
//     { photo: Daniel, name: 'Daniel Gbuji', position: 'Backend Engineer' },
//     { photo: Martin, name: 'Martins Ifeanyi', position: 'Frontend Developer' },
//     {
//       photo: Pelumi,
//       name: 'Akande Oluwapelumi',
//       position: 'Secetary/Product Marketer',
//     },
//     { photo: Praise, name: 'Praise Echem', position: 'CEO/Co-Founder' },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <div className="bg-gradient-to-b from-sageOffWhite via-sageLightBlue to-sageLowBlue pt-20 pb-20 ">
//       <h1 className="text-sageBlack font-aftika text-center font-bold text-[4.5rem] mb-10">
//         Our Team
//       </h1>
//       <div className="w-1/2 mx-auto mb-20">
//         <Slider {...settings}>
//           {images.map((img, index) => (
//             <div key={index} className="relative text-center">
//               <div className="flex justify-center mb-10">
//                 <img
//                   src={img.photo}
//                   alt={img.name}
//                   className="w-1/2 h-auto rounded-lg"
//                 />
//               </div>
//               <div className="text-center">
//                 <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded text-4.5rem] text-center text-3xl flex justify-center align-middle mb-10">
//                   {img.name}
//                 </p>
//                 <p className="text-black text-2xl"> {img.position} </p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer"
//     onClick={onClick}
//   >
//     <FaArrowRight className="text-sageDarkBlue" />
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer"
//     onClick={onClick}
//   >
//     <FaArrowLeft className="text-sageDarkBlue" />
//   </div>
// );

// export default Carousel;

// // -----------------------------------------------------------------------------------------------------------------

//import React from "react";
