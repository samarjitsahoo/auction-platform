import React from "react";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
    },
    {
      id: 3,
      title: "Community",
      description:
        "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
    },
    {
      id: 4,
      title: "Customer Focus",
      description:
        "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
    },
  ];

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] gap-7 flex flex-col min-h-screen py-4 justify-center">
        <div>
          <h1
            className={`text-[#4749e9] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
          >
            About Us
          </h1>
          <p className="text-xl text-stone-600 text-justify mt-5">
            Welcome to SamarBid, the ultimate destination for online auctions
            and bidding excitement. Established in 2024, we aim to redefine the
            auction experience by providing a dynamic and user-friendly platform
            where buyers and sellers can come together to trade with confidence.
            Our platform is built on the pillars of security, transparency, and
            innovation, ensuring that every transaction is seamless and
            enjoyable. Whether you're here to find unique items, connect with a
            wider audience, or enjoy the excitement of competitive bidding,
            SamarBid is the place for you.
          </p>
        </div>
        <div>
          <h3
            className={`text-[#4749e9] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Our Mission
          </h3>
          <p className="text-xl text-stone-600 text-justify">
            At SamarBid, our mission is to revolutionize how people buy and sell
            online by creating a vibrant, inclusive, and secure marketplace. We
            are committed to empowering individuals and businesses to explore
            opportunities, make informed decisions, and uncover valuable
            products while enjoying the competitive thrill of auctions. Through
            cutting-edge technology and an unwavering focus on user
            satisfaction, we aim to foster a community where trust and
            innovation thrive.
          </p>
        </div>
        <div>
          <h3
            className={`text-[#4749e9] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Our Values
          </h3>
          <ul className="list-inside">
            {values.map((element) => {
              return (
                <li
                  className="text-xl text-stone-600 mb-2 text-justify"
                  key={element.id}
                >
                  <span className="text-stone-600">{element.title}</span>:{" "}
                  {element.description}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3
            className={`text-[#4749e9] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Our Story
          </h3>
          <p className="text-xl text-stone-600 text-justify">
            Founded by Samarjit, SamarBid was created from a deep-seated passion
            for connecting people to extraordinary items and experiences. With
            extensive knowledge of the auction industry and a vision to
            innovate, Samarjit set out to design a platform that simplifies the
            auction process while retaining its excitement and charm. Today,
            SamarBid stands as a testament to our dedication to excellence,
            offering users across the globe a platform that blends technology,
            accessibility, and community-driven values.
          </p>
        </div>
        <div>
          <h3
            className={`text-[#4749e9] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
          >
            Join Us
          </h3>
          <p className="text-xl text-stone-600 text-justify">
            Whether you're here to find exceptional items, expand your business
            reach, or simply explore a world of possibilities, SamarBid welcomes
            you to be part of our ever-growing community. Dive into the
            exhilarating world of online auctions, where every bid brings
            excitement, every sale opens new opportunities, and every user
            contributes to a thriving marketplace. Uncover hidden treasures,
            showcase your offerings, and experience the joy of winning your next
            incredible find.
          </p>
        </div>
        <div>
          <p className="text-[#4749e9] text-xl font-bold mb-3">
            Thank you for choosing SamarBid. We are honored to have you with us
            and look forward to supporting you on your auction journey!
          </p>
        </div>
      </section>
    </>
  );

};

export default About;
