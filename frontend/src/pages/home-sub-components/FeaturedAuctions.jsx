import Card from "@/custom-components/Card";
import React from "react";
import { useSelector } from "react-redux";

const FeaturedAuctions = () => {
  const { allAuctions, loading } = useSelector((state) => state.auction);

  return (
    <>
      <section className="my-8">
        <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
          Featured Auctions
        </h3>
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <svg
              className="animate-spin h-8 w-8 text-[#4749e9]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {allAuctions.slice(0, 8).map((element) => {
              return (
                <Card
                  title={element.title}
                  imgSrc={element.image?.url}
                  startTime={element.startTime}
                  endTime={element.endTime}
                  startingBid={element.startingBid}
                  id={element._id}
                  key={element._id}
                />
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default FeaturedAuctions;
