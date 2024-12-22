import React from "react";
import {
  FaUser,
  FaGavel,
  FaEnvelope,
  FaDollarSign,
  FaFileInvoice,
  FaRedo,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUser />,
      title: "User Registration",
      description:
        "Users must register or log in to access the platform's features. Registration involves providing essential information such as name, email, and password, ensuring secure access. Once registered, users can perform operations such as posting auction items, placing bids, managing their profile, and submitting payment proofs for transactions. This step establishes a personalized account for seamless participation.",
    },
    {
      icon: <FaGavel />,
      title: "Role Selection",
      description:
        'During registration, users must choose a role: either a "Bidder" or an "Auctioneer." This role determines their functionality on the platform. Bidders can explore listed items, place competitive bids, and track their bidding history. Auctioneers, on the other hand, can post items for auction, set starting bids, and monitor the bidding progress. This separation ensures clarity and streamlined interactions.',
    },
    {
      icon: <FaEnvelope />,
      title: "Winning Bid Notification",
      description:
        "When an auction ends, the platform identifies the highest bidder and sends an automated notification email. The email includes details about the item won and payment method instructions provided by the Auctioneer. Payment options may include bank transfer, Easypaisa, PayPal, or other supported services. This ensures timely communication and initiates the transaction process between the Bidder and Auctioneer.",
    },
    {
      icon: <FaDollarSign />,
      title: "Commission Payment",
      description:
        "The platform operates with a 5% commission on successful bids, which Auctioneers are required to pay. This commission is deducted from the payment made by the Bidder. Auctioneers who fail to pay the commission are restricted from posting new items until the dues are cleared. Persistent non-payment leads to the issuance of legal notices, emphasizing the importance of compliance with platform rules.",
    },
    {
      icon: <FaFileInvoice />,
      title: "Proof of Payment",
      description:
        "To complete a transaction, Auctioneer must provide proof of payment in the form of a screenshot and the total amount sent. This proof is reviewed by the Administrator for validation. Once approved, the transaction status is updated, and the Auctioneer's unpaid commissions are adjusted accordingly. This ensures transparency and trust in financial transactions between users.",
    },
    {
      icon: <FaRedo />,
      title: "Reposting Items",
      description:
        "In cases where a Bidder fails to make the payment within the stipulated time, the Auctioneer has the option to relist the item. This process is free of charge and allows the Auctioneer to attract new Bidders, ensuring that unsold items have another opportunity to be auctioned. This feature mitigates losses and maintains the platform's fairness.",
    },
  ];

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
        <h1
          className={`text-[#4749e9] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
        >
          How it works
        </h1>
        <div className="flex flex-col gap-4 my-5">
          {steps.map((element, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-md p-2 lg:p-5 flex flex-col gap-2 group hover:bg-[#f4f3f3] transition-all duration-300"
              >
                <div className="bg-[#4749e9] text-white p-3 text-xl rounded-full w-fit">
                  {element.icon}
                </div>
                <h3
                  className={`text-[#4749e9] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
                >
                  {element.title}
                </h3>
                <p className="text-xl text-stone-700 text-justify">{element.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
