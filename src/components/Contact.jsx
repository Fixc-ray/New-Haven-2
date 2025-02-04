import React from "react";
import { useNavigate } from "react-router-dom";
import table from "../images/slide.jpg";
import review from "../images/slide2.jpg";
import Navbar from "./Navbar";

function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="mt-20"></div>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 m-6">
        
        <div
          className="relative bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer w-full md:w-1/2"
          onClick={() => navigate("/reservation")}
        >
          <img
            src={table}
            alt="Book a Table"
            className="rounded-lg w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <h2 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white z-10">
            Book A Table
          </h2>
        </div>

        <a
          href="https://www.google.com/search?q=new+haven+restaurant&sca_esv=5791a0164e19b13c&sxsrf=AHTn8zrHDEkhyhfaoSRGUnYE2heH9pj5dA%3A1737643132846&ei=fFSSZ8acM-LX7M8P55LlyQQ&oq=&gs_lp=Egxnd3Mtd2l6LXNlcnAiACoCCAMyDRAuGMcBGCcY6gIYrwEyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyChAjGPAFGCcY6gIyBxAjGCcY6gIyFBAAGIAEGJECGLQCGIoFGOoC2AEBMhQQABiABBiRAhi0AhiKBRjqAtgBATIUEAAYgAQYkQIYtAIYigUY6gLYAQEyFBAAGIAEGJECGLQCGIoFGOoC2AEBMhQQABiABBiRAhi0AhiKBRjqAtgBATIQEAAYAxi0AhjqAhiPAdgBATIQEAAYAxi0AhjqAhiPAdgBATIQEAAYAxi0AhjqAhiPAdgBATIQEAAYAxi0AhjqAhiPAdgBATIQEAAYAxi0AhjqAhiPAdgBAUjmGVAAWLMGcAF4AJABAJgByAKgAcgCqgEDMy0xuAEByAEA-AEBmAICoALwAqgCFMICChAjGIAEGCcYigXCAgQQIxgnwgILEAAYgAQYkQIYigXCAhEQLhiABBiRAhjHARiKBRivAcICERAuGIAEGLEDGNEDGMcBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QABiABBixAxiDARiKBZgDF_EF5iiHfBYFqMW6BgYIARABGAGSBwUxLjMtMaAH8BA&sclient=gws-wiz-serp#lrd=0x182f11b6b4384267:0x1f4b32ff6e0944db,1,,,,"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer w-full md:w-1/2"
        >
          <img
            src={review}
            alt="Leave a Review"
            className="rounded-lg w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <h2 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white z-10">
            Leave a Review
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
