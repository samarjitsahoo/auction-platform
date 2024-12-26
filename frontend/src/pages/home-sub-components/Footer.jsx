import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "rgba(246, 244, 240, 1)" }}
      className="text-black py-8"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between border-t border-gray-700 pt-4">
        {/* About Section */}
        <div className="w-full md:w-1/3 mb-6">
          <h3 className="text-lg font-semibold text-[#4749e9] mb-4">
            About Us
          </h3>
          <p>
            Welcome to our Auction Platform, where buyers and sellers connect to
            exchange valuable items in a secure, reliable, and user-friendly
            environment.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/3 mb-6 pl-4">
          <h3 className="text-lg font-semibold text-[#4749e9] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-black hover:text-[#4749e9]">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works-info"
                className="text-black hover:text-[#4749e9]"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-black hover:text-[#4749e9]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold text-[#4749e9] mb-4">
            Contact Us
          </h3>
          <p>
            Email:{" "}
            <a
              href="mailto:support@auctionplatform.com"
              className="text-black hover:text-[#4749e9]"
            >
              samarjit9203@gmail.com
            </a>
          </p>
          <p>Phone: +1 (123) 456-7890</p>
          <p className="mt-2">Follow us on:</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://linkedin.com/in/samarjitsahoo"
              target="_blank"
              className="hover:text-[#4749e9]"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/samarjitsahoo"
              target="_blank"
              className="hover:text-[#4749e9]"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
        <p>
          &copy; 2024 SamarBid. All rights reserved. | Developed by{" "}
          <a
            href="https://samarjit.vercel.app"
            target="_blank"
            className="hover:text-[#4749e9]"
          >
            Samarjit
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
