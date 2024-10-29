import React from "react";
import phoneImage from "./assets/visuals.png";
import backgroundImage from "./assets/1146880.jpg";

const HeroSection = () => {
  return (
    <section
      className="bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 flex justify-center items-center min-h-screen p-10 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative bg-white bg-opacity-90 rounded-lg shadow-lg flex flex-col lg:flex-row gap-10 p-10 w-full max-w-6xl">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-5 leading-snug">
            Google <span className="text-red-500">Developers</span> Group –
            SIMATS
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Organizers of Google Developer Groups are passionate leaders in
            their community who are dedicated to helping others learn and
            connect. GDG organizers plan and host meetup events on a wide range
            of technical topics typically on a monthly basis in a location near
            them.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-600 text-white py-3 px-6 rounded-full text-lg transition-all duration-300 ease-in-out hover:bg-green-700 flex items-center">
              <i className="fas fa-rocket mr-2"></i> Join Now
            </button>
            <button className="border-2 border-green-600 text-green-600 py-3 px-6 rounded-full text-lg transition-all duration-300 ease-in-out hover:bg-green-600 hover:text-white">
              Events
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={phoneImage} alt="Phone Mockup" className="w-96 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
