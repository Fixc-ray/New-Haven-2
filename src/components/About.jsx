import React from "react";
import about from "../images/about.jpg";

function About() {
  return (
    <div>
      {/* Main container with responsive margin and padding */}
      <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-8 ml-4 mr-4 md:ml-8 md:mr-8 p-4 md:p-8">
        
        {/* Left section: Text content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-4 text-justify text-orange-500">
            ABOUT US
          </h1>
          <h2 className="text-xl md:text-2xl mb-4 text-justify">
            IT STARTED, QUITE SIMPLY, LIKE THIS....
          </h2>
          <p className="leading-relaxed text-justify">
            In the heart of a bustling city, a small group of passionate food
            enthusiasts came together with a shared dream of bringing authentic
            flavors and hospitality to their community.
            With a vision to create a dining experience that celebrates both
            culinary tradition and innovation, they embarked on a journey to
            establish their own restaurant. <br />
            Months of meticulous planning, from designing the menu to crafting
            the ambiance culminated in the grand opening of their establishment.
            From humble beginnings, the restaurant quickly gained popularity,
            attracting locals and tourists alike with its delectable dishes and
            welcoming atmosphere. <br />
            Through dedication, hard work, and a commitment to excellence, the
            restaurant flourished, becoming a beloved fixture in the culinary
            landscape, a testament to the power of passion and perseverance.
            That's how The OakBerry came into reality.
          </p>
        </div>
        
        {/* Right section: Image content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={about}
            alt="About"
            className="w-full h-auto rounded-full object-cover mt-8 md:mt-16 border-4 md:border-8 border-azure"
          />
        </div>
      </div>

      {/* Google Map iframe section */}
      <div className="p-4 mx-4 md:mx-10">
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=the%20oakberry%20+(The%20Oakberry)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>
    </div>
  );
}

export default About;
