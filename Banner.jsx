import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    title: "Spring Planting Festival",
    description:
      "Get expert tips and tricks to make your spring garden bloom beautifully.",
    buttonText: "Explore Tips",
    bgImage: "https://i.ibb.co/hpXYJKg/pexels-achim-bongard-87217-352096.jpg",
  },
  {
    id: 2,
    title: "Summer Garden Workshops",
    description:
      "Join our hands-on workshops to nurture your garden through the summer season.",
    buttonText: "Sign Up Now",

    bgImage:
      "https://i.ibb.co/wNsT1PM5/lesya-tyutrina-andrey-biyanov-V-5-Ds-Dvp-Df0-unsplash.jpg",
  },
  {
    id: 3,
    title: "Autumn Harvest Celebration",
    description:
      "Celebrate the fruits of your labor with fun activities and gardening advice.",
    buttonText: "Join the Event",
    bgImage:
      "https://i.ibb.co/bgv89J0T/novila-misastra-ek-WQ60-ORd-LI-unsplash-1.jpg",
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
      <Slider {...settings}>
        {slides.map(
          ({ id, title, description, buttonText, buttonLink, bgImage }) => (
            <div key={id}>
              <div
                className="h-[250px] sm:h-[300px] md:h-[400px] flex flex-col justify-center items-start px-6 sm:px-8 text-white rounded-lg"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 drop-shadow-lg">
                  {title}
                </h2>
                <p className="mb-4 sm:mb-6 max-w-full sm:max-w-lg drop-shadow-lg">
                  {description}
                </p>
                <a
                  href={buttonLink}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-5 py-2 rounded shadow-lg transition"
                >
                  {buttonText}
                </a>
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default Banner;
