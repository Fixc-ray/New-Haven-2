import React, { useEffect, useState } from "react";
import Front from "../images/Front.jpg";
import Footer from "./Footer ";
import Navbar from "./Navbar";
import Preloader from "./Preloader"; 
import About from "./About";
import Gallery from "./Gallery"

function Home() {
  const [friendsText, setFriendsText] = useState("");
  const [familyText, setFamilyText] = useState("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timers = [];

    const spellFriends = () => {
      const friends = " Friends";
      for (let i = 0; i < friends.length; i++) {
        timers.push(setTimeout(() => {
          setFriendsText((prev) => prev + friends[i]);
          if (i === friends.length - 1) {
            timers.push(setTimeout(() => {
              deleteFriends();
            }, 3000));
          }
        }, i * 400));
      }
    };

    const deleteFriends = () => {
      const friends = " Friends";
      for (let i = friends.length - 1; i >= 0; i--) {
        timers.push(setTimeout(() => {
          setFriendsText((prev) => prev.slice(0, -1));
          if (i === 0) {
            timers.push(setTimeout(() => {
              spellFamily();
            }, 1000));
          }
        }, (friends.length - i) * 200));
      }
    };

    const spellFamily = () => {
      const family = " Family";
      for (let i = 0; i < family.length; i++) {
        timers.push(setTimeout(() => {
          setFamilyText((prev) => prev + family[i]);
          if (i === family.length - 1) {
            timers.push(setTimeout(() => {
              deleteFamily();
            }, 3000));
          }
        }, i * 500));
      }
    };

    const deleteFamily = () => {
      const family = " Family";
      for (let i = family.length - 1; i >= 0; i--) {
        timers.push(setTimeout(() => {
          setFamilyText((prev) => prev.slice(0, -1));
          if (i === 0) {
            timers.push(setTimeout(() => {
              spellFriends();
            }, 1000));
          }
        }, (family.length - i) * 200));
      }
    };

    spellFriends();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="home">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <div className="relative w-full h-[80vh]">
            <img className="w-full h-full object-cover" src={Front} alt="Front" />
            <div className="absolute inset-0 bg-black opacity-50"></div>

            
            <h1 className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-6xl font-bold mb-12 text-white">
              THE OAkBErry
            </h1>

            
            <h1 className="absolute top-[30%] left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl md:text-6xl font-bold mt-20 pt-6 text-center text-white">
              Dine With  
              <span className="text-orange-500">
                {friendsText}{familyText}
              </span>
            </h1>

            
            <h1 className="absolute top-[70%] left-1/2 transform -translate-x-1/2 text-2xl sm:text-4xl md:text-5xl mb-12 text-orange-500 text-center">
              DELICIoUS & DELIGHTFUL
            </h1>
          </div>
          <About />
          <Gallery />
          <Footer />
          
        </>
      )}
    </div>
  );
}

export default Home;
