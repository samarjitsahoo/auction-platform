import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const { leaderboard } = useSelector((state) => state.user);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    if (leaderboard && leaderboard.length > 0) {
      setIsContentReady(true);
    }
  }, [leaderboard]);

  return (
    <>
      <section className="my-8">
        <div className="flex flex-col min-[340px]:flex-row min-[340px]:gap-2">
          <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
            Top 10
          </h3>
          <h3 className="text-[#4749e9] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
            Bidders Leaderboard
          </h3>
        </div>

        {/* Loading effect */}
        {!isContentReady ? (
          <div className="flex justify-center items-center h-48">
            <svg
              className="animate-spin h-16 w-16 text-[#4749e9]"
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
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border my-5 border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left">Profile Pic</th>
                  <th className="py-2 px-4 text-left">Username</th>
                  <th className="py-2 px-4 text-left">Bid Expenditure</th>
                  <th className="py-2 px-4 text-left">Auctions Won</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {leaderboard.slice(0, 10).map((element, index) => {
                  return (
                    <tr key={element._id} className="border-b border-gray-300">
                      <td className="flex gap-2 items-center py-2 px-4">
                        <span className="text-stone-400 font-semibold text-xl w-7 hidden sm:block">
                          {index + 1}
                        </span>
                        <span>
                          <img
                            src={element.profileImage?.url}
                            alt={element.username}
                            className="h-12 w-12 object-cover rounded-full"
                          />
                        </span>
                      </td>
                      <td className="py-2 px-4">{element.userName}</td>
                      <td className="py-2 px-4">{element.moneySpent}</td>
                      <td className="py-2 px-4">{element.auctionsWon}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <Link
          to={"/leaderboard"}
          className="border-2 border-stone-200 font-bold text-xl w-full py-2 flex justify-center rounded-md hover:border-stone-500 transition-all duration-300"
        >
          Go to Leaderboard
        </Link>
      </section>
    </>
  );
};

export default Leaderboard;
