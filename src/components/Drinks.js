import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

function Drinks({ Menu }) {
  const Beer = "https://new-haven-backend.vercel.app/beers";
  const [beerItems, setBeerItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const fetchBeers = async () => {
    setLoading(true);
    try {
      const response = await fetch(Beer);
      const data = await response.json();
      setBeerItems(data);
    } catch (error) {
      console.error("Error fetching beers:", error);
    } finally {
      setLoading(false);
    }
  };

  const Ciggarates = "https://new-haven-backend.vercel.app/cigarettes";
  const [cigarItems, setcigarItems] = useState([]);

  const fetchCigars = async () => {
    setLoading(true);
    try {
      const response = await fetch(Ciggarates);
      const data = await response.json();
      setcigarItems(data);
    } catch (error) {
      console.error("Error fetching cigarettes:", error);
    } finally {
      setLoading(false);
    }
  };

  const menuItems = [
    {
      name: "Beers",
      image:
        "https://images.unsplash.com/photo-1689888393526-35563a50550e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZXJzfGVufDB8fDB8fHww",
      onClick: fetchBeers,
    },
    {
      name: "Cigarettes",
      image:
        "https://images.unsplash.com/photo-1627449543657-ab677b2105cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2lnYXJldHRlJTIwcGFja3xlbnwwfHwwfHx8MA%3D%3D",
      onClick: fetchCigars,
    },
    {
      name: "Whiskeys",
      image:
        "https://images.unsplash.com/photo-1598934475091-f1c4467c4a53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdoaXNrZXlzfGVufDB8fDB8fHww",
      onClick: fetchCigars,
    },
    {
      name: "Cognac",
      image:
        "https://bodegaslacatedral.com/cdn/shop/files/DescripcionCognacHennessyVerySpecial_bodegaslacatedral.jpg?v=1708361988&width=1600",
      onClick: fetchCigars,
    },
    {
      name: "Wines",
      image:
        "https://www.baccoestate.co.za/wp-content/uploads/2023/06/bacco-family-of-wines-1024x683.jpg",
      onClick: fetchCigars,
    },
    {
      name: "Gins",
      image:
        "https://www.oaks.delivery/wp-content/uploads/gordons-lemon-gallery.jpg",
      onClick: fetchCigars,
    },
    {
      name: "Vodka",
      image:
        "https://images.unsplash.com/photo-1618412046321-f8127c4589ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9ka2F8ZW58MHx8MHx8fDA%3D",
      onClick: fetchCigars,
    },
    {
      name: "Tequila",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOG8Cya2t-fLW4Re5X4oZhqauiGppjjOOfeQ&s",
      onClick: fetchCigars,
    },
    {
      name: "Rum",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajetfiQ-vVrPOkbD3bvOLr81YKGOdBwBkfw&s",
      onClick: fetchCigars,
    },
    {
      name: "Liqueur",
      image: "https://drinksworld.com/wp-content/uploads/liqueur-02.jpg",
      onClick: fetchCigars,
    },
    {
      name: "Soft Drinks",
      image:
        "https://images.unsplash.com/photo-1627243939602-6456a5ab231c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jYWNvbGF8ZW58MHx8MHx8fDA%3D",
      onClick: fetchCigars,
    },
    {
      name: "Mocktails",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uJ8hiQYklrdRwyO_gJMK537-UVVK8zhGXg&s",
      onClick: fetchCigars,
    },
    {
      name: "Cocktails",
      image:
        "https://images.unsplash.com/photo-1601925088924-aad72e86b894?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ja3RhaWxzfGVufDB8fDB8fHww",
        onClick: fetchCigars,
    },
  ];

  const redirectToHome = () => {
    navigate("/"); 
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
  
      <section
        id="home"
        className="bg-cover bg-center h-96 sm:h-72"
        style={{ backgroundImage: "url('/path-to-bar-image.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl sm:text-3xl font-bold text-center">
            Enjoy Our Drinks Section
          </h2>
          <button
            onClick={redirectToHome}
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
          >
            View Our Menu
          </button>
        </div>
      </section>

      <div className="bg-gray-900 text-white min-h-screen">
        {/* Menu Section */}
        <section id="menu" className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center">Our Menu</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-12 rounded-lg flex items-center justify-center text-center relative overflow-hidden cursor-pointer"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onClick={item.onClick}
                >
                  <div className="bg-black bg-opacity-50 p-4 rounded">
                    <h4 className="text-xl font-bold text-white">
                      {item.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {beerItems.length > 0 && (
          <section id="beers" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Beers</h3>
              {loading ? (
                <p className="text-center">Loading beers...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {beerItems.map((beer) => (
                    <div
                      key={beer.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{beer.name}</h4>
                      <img
                        src={beer.image}
                        alt={beer.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>{beer.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {cigarItems.length > 0 && (
          <section id="cigarattes" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">
                Cigarettes
              </h3>
              {loading ? (
                <p className="text-center">Loading Cigarettes...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {cigarItems.map((Ciggarates) => (
                    <div
                      key={Ciggarates.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{Ciggarates.name}</h4>
                      <img
                        src={Ciggarates.image}
                        alt={Ciggarates.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>{Ciggarates.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Drinks;
