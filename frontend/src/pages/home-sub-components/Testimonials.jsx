import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Karolina Protsenko",
      role: "Frequent Buyer",
      text: "This auction platform is fantastic! The interface is user-friendly, and I have found some incredible deals here.",
      image:
        "https://res.cloudinary.com/dry07iyvo/image/upload/v1734777201/auction-platform/xfca51xsuyuuraa86aoj.jpg",
    },
    {
      name: "Jane Smith",
      role: "Seller",
      text: "I was able to sell my items quickly and hassle-free. Highly recommend this platform for anyone looking to sell.",
      image:
        "https://res.cloudinary.com/dry07iyvo/image/upload/v1734925896/auction-platform/ndmioq4hbbvxu3dpqzn3.jpg",
    },
    //     },
    {
      name: "Lisa Sen",
      role: "Collector",
      text: "The variety of items available is amazing. I have added so many rare pieces to my collection. A+ experience!",
      image:
        "https://res.cloudinary.com/dry07iyvo/image/upload/v1734926038/auction-platform/ptsocwakaromsxo6doar.jpg",
    },
  ];

  return (
    <section
      style={{ backgroundColor: "rgba(246, 244, 240, 1)" }}
      className="text-white py-12"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className=" text-black text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
          Our <span className="text-[#4749e9]">Testimonials</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}`}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-medium text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{testimonial.role}</p>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
