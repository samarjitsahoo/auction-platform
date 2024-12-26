import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
import Leaderboard from "./home-sub-components/Leaderboard";
import Testimonials from './../pages/home-sub-components/Testimonials'
import Footer, {} from './../pages/home-sub-components/Footer'
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Bid on Unique Items",
        "Experience Fair Auctions",
        "Win with Transparency",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
        <div>
          <h1
            className={`text-[#111] text-4xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
          >
            Samar<span className="text-[#4749e9]">Bid</span>
          </h1>
          <h1
            className={`text-[#111] text-4xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
          >
            Auction Platform
          </h1>
          <p
            className={`text-[#4749e9] text-3xl text-bold mb-2 min-[480px]:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl`}
          >
            <span ref={typedRef} className="typed-text"></span>
          </p>
          <div className="flex gap-4 my-8">
            {!isAuthenticated && (
              <>
                <Link
                  to="/sign-up"
                  className="bg-[#4749e9] font-semibold hover:bg-[#2e2f9c] rounded-md px-8 flex items-center py-2 text-white  transition-all duration-300"
                >
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="text-black bg-transparent border-2 border-black hover:bg-[#fffefd] hover:text-[#4749e9] hover:border-[#4749e9] font-bold text-xl  rounded-md px-8 flex items-center py-2 transition-all duration-300"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
        <FeaturedAuctions />
        <UpcomingAuctions />
        <Leaderboard />
        <Testimonials />
        <Footer />
      </section>
    </>
  );
};

export default Home;
