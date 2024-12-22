import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
import Leaderboard from "./home-sub-components/Leaderboard";
import Spinner from "@/custom-components/Spinner";
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
 const howItWorks = [
   {
     title: "Post Items",
     description:
       "Auctioneers list items for bidding, providing detailed descriptions, images, and a starting bid price to attract potential bidders.",
   },
   {
     title: "Browse Auctions",
     description:
       "Bidders explore available auctions, reviewing item details and choosing what to bid on from a wide range of categories.",
   },
   {
     title: "Place Bids",
     description:
       "Bidders place competitive bids on listed items, with real-time updates ensuring an engaging auction experience.",
   },
   {
     title: "Win Notification",
     description:
       "The highest bidder is notified via email, receiving payment details and instructions for completing the purchase.",
   },
   {
     title: "Payment & Fees",
     description:
       "The winning bidder makes the payment, while the auctioneer submits a 5% platform fee for successful transactions.",
   },
   {
     title: "Repost or Resolve",
     description:
       "If the winning bidder fails to pay, the auctioneer can repost the item for free or resolve disputes with platform support.",
   },
 ];


  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
        <div>
          <h1
            className={`text-[#111] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
          >
            Samar<span className="text-[#4749e9]">Bid</span>
          </h1>
          <h1
            className={`text-[#111] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
          >
            Auction Platform
          </h1>
          <p
            className={`text-[#4749e9] text-xl text-bold mb-2 min-[480px]:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl`}
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
        <div className="flex flex-col gap-6">
          <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
            How it works
          </h3>
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap w-full">
            {howItWorks.map((element) => {
              return (
                <div
                  key={element.title}
                  className="bg-white flex flex-col gap-2 p-2 rounded-md h-auto justify-center md:w-[48%] lg:w-[47%] 2xl:w-[30%] hover:shadow-md transition-all duration-300"
                >
                  <h5 className="font-bold">{element.title}</h5>
                  <p>{element.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <UpcomingAuctions />
        <Leaderboard />
      </section>
    </>
  );
};

export default Home;
