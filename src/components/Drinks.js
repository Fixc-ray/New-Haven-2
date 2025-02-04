import React, { useState, useRef } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

function Drinks({ Menu }) {
  const Beer = "https://new-haven-backend2.vercel.app/beers";
  const [beerItems, setBeerItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const beerSectionRef = useRef(null);

  const fetchBeers = async () => {
    setLoading(true);
    try {
      const response = await fetch(Beer);
      const data = await response.json();
      setBeerItems(data);
      setTimeout(() => {
        beerSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching beers:", error);
    } finally {
      setLoading(false);
    }
  };

  const Ciggarates = "https://new-haven-backend2.vercel.app/cigarettes";
  const [cigarItems, setcigarItems] = useState([]);

  const CigarSectionRef = useRef(null);

  const fetchCigars = async () => {
    setLoading(true);
    try {
      const response = await fetch(Ciggarates);
      const data = await response.json();
      setcigarItems(data);
      setTimeout(() => {
        CigarSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cigarettes:", error);
    } finally {
      setLoading(false);
    }
  };
  const Whiskys = "https://new-haven-backend2.vercel.app/whiskys";
  const [Whisky, setWhiskyItems] = useState([]);

  const WhiskySectionRef = useRef(null);

  const fetchWhisky = async () => {
    setLoading(true);
    try {
      const response = await fetch(Whiskys);
      const data = await response.json();
      setWhiskyItems(data);
      setTimeout(() => {
        WhiskySectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cigarettes:", error);
    } finally {
      setLoading(false);
    }
  };
  const Cognacs = "https://new-haven-backend2.vercel.app/cognacs";
  const [cognacs, setCognacsItems] = useState([]);

  const CognacSectionRef = useRef(null);

  const fetchCognacs = async () => {
    setLoading(true);
    try {
      const response = await fetch(Cognacs);
      const data = await response.json();
      setCognacsItems(data);
      setTimeout(() => {
        CognacSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cigarettes:", error);
    } finally {
      setLoading(false);
    }
  };
  const Wines = "https://new-haven-backend2.vercel.app/wines";
  const [wines, setWinesItems] = useState([]);

  const WinesSectionRef = useRef(null);

  const fetchWines = async () => {
    setLoading(true);
    try {
      const response = await fetch(Wines);
      const data = await response.json();
      setWinesItems(data);
      setTimeout(() => {
        WinesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cigarettes:", error);
    } finally {
      setLoading(false);
    }
  };
  const Gins = "https://new-haven-backend2.vercel.app/gins";
  const [gins, setGinsItems] = useState([]);

  const GinsSectionRef = useRef(null);

  const fetchGins = async () => {
    setLoading(true);
    try {
      const response = await fetch(Gins);
      const data = await response.json();
      setGinsItems(data);
      setTimeout(() => {
        GinsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cigarettes:", error);
    } finally {
      setLoading(false);
    }
  };
  const Vodka = "https://new-haven-backend2.vercel.app/vodka";
  const [vodka, setVodkaItems] = useState([]);

  const VodkaSectionRef = useRef(null);

  const fetchVodka = async () => {
    setLoading(true);
    try {
      const response = await fetch(Vodka);
      const data = await response.json();
      setVodkaItems(data);
      setTimeout(() => {
        VodkaSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cigarettes:", error);
    } finally {
      setLoading(false);
    }
  };
  const Tequila = "https://new-haven-backend2.vercel.app/tequila";
  const [tequila, setTequilaItems] = useState([]);

  const TequilaSectionRef = useRef(null);

  const fetchTequila = async () => {
    setLoading(true);
    try {
      const response = await fetch(Tequila);
      const data = await response.json();
      setTequilaItems(data);
      setTimeout(() => {
        TequilaSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cigarettes:", error);
    } finally {
      setLoading(false);
    }
  };
  const Rum = "https://new-haven-backend2.vercel.app/rum";
  const [rum, setRumItems] = useState([]);

  const RumSectionRef = useRef(null);

  const fetchRum = async () => {
    setLoading(true);
    try {
      const response = await fetch(Rum);
      const data = await response.json();
      setRumItems(data);
      setTimeout(() => {
        RumSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cigarettes:", error);
    } finally {
      setLoading(false);
    }
  };
  const Liqueur = "https://new-haven-backend2.vercel.app/liqueur";
  const [liqueur, setliqueurItems] = useState([]);

  const liqueurSectionRef = useRef(null);

  const fetchLiqueur = async () => {
    setLoading(true);
    try {
      const response = await fetch(Liqueur);
      const data = await response.json();
      setliqueurItems(data);
      setTimeout(() => {
        liqueurSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cigarettes:", error);
    } finally {
      setLoading(false);
    }
  };
  const SoftDrinks = "https://new-haven-backend2.vercel.app/softDrinks";
  const [soft, setSoftItems] = useState([]);

  const softDrinksSectionRef = useRef(null);

  const fetchSoft = async () => {
    setLoading(true);
    try {
      const response = await fetch(SoftDrinks);
      const data = await response.json();
      setSoftItems(data);
      setTimeout(() => {
        softDrinksSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cigarettes:", error);
    } finally {
      setLoading(false);
    }
  };
  const Mocktails = "https://new-haven-backend2.vercel.app/mocktails";
  const [mocktails, setMocktailItems] = useState([]);

  const MocktailSectionRef = useRef(null);

  const fetchMocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(Mocktails);
      const data = await response.json();
      setMocktailItems(data);
      setTimeout(() => {
        MocktailSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cigarettes:", error);
    } finally {
      setLoading(false);
    }
  };
  const Cocktails = "https://new-haven-backend2.vercel.app/cocktails";
  const [cocktails, setCocktailItems] = useState([]);

  const CocktailSectionRef = useRef(null);

  const fetchCocktails = async () => {
    setLoading(true);
    try {
      const response = await fetch(Cocktails);
      const data = await response.json();
      setCocktailItems(data);
      setTimeout(() => {
        CocktailSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
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
      onClick: fetchWhisky,
    },
    {
      name: "Cognac",
      image:
        "https://bodegaslacatedral.com/cdn/shop/files/DescripcionCognacHennessyVerySpecial_bodegaslacatedral.jpg?v=1708361988&width=1600",
      onClick: fetchCognacs,
    },
    {
      name: "Wines",
      image:
        "https://www.baccoestate.co.za/wp-content/uploads/2023/06/bacco-family-of-wines-1024x683.jpg",
      onClick: fetchWines,
    },
    {
      name: "Gins",
      image:
        "https://www.oaks.delivery/wp-content/uploads/gordons-lemon-gallery.jpg",
      onClick: fetchGins,
    },
    {
      name: "Vodka",
      image:
        "https://images.unsplash.com/photo-1618412046321-f8127c4589ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9ka2F8ZW58MHx8MHx8fDA%3D",
      onClick: fetchVodka,
    },
    {
      name: "Tequila",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOG8Cya2t-fLW4Re5X4oZhqauiGppjjOOfeQ&s",
      onClick: fetchTequila,
    },
    {
      name: "Rum",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajetfiQ-vVrPOkbD3bvOLr81YKGOdBwBkfw&s",
      onClick: fetchRum,
    },
    {
      name: "Liqueur",
      image: "https://drinksworld.com/wp-content/uploads/liqueur-02.jpg",
      onClick: fetchLiqueur,
    },
    {
      name: "Soft Drinks",
      image:
        "https://images.unsplash.com/photo-1627243939602-6456a5ab231c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jYWNvbGF8ZW58MHx8MHx8fDA%3D",
      onClick: fetchSoft,
    },
    {
      name: "Mocktails",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uJ8hiQYklrdRwyO_gJMK537-UVVK8zhGXg&s",
      onClick: fetchMocktail,
    },
    {
      name: "Cocktails",
      image:
        "https://images.unsplash.com/photo-1601925088924-aad72e86b894?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ja3RhaWxzfGVufDB8fDB8fHww",
      onClick: fetchCocktails,
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
          <section ref={beerSectionRef} id="beers" className="py-16">
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
          <section ref={CigarSectionRef} id="cigarattes" className="py-16">
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
        {Whisky.length > 0 && (
          <section ref={WhiskySectionRef} id="Whisky" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">whiskys</h3>
              {loading ? (
                <p className="text-center">Loading Whyiskys...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {Whisky.map((Whisky) => (
                    <div
                      key={Whisky.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{Whisky.name}</h4>
                      <img
                        src={Whisky.image}
                        alt={Whisky.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>{Whisky.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        {cognacs.length > 0 && (
          <section ref={CognacSectionRef} id="cognacs" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Cognacs</h3>
              {loading ? (
                <p className="text-center">Loading Cognacs...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {cognacs.map((cognac) => (
                    <div
                      key={cognac.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{cognac.name}</h4>
                      <img
                        src={cognac.image}
                        alt={cognac.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>{cognac.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        {wines.length > 0 && (
          <section ref={WinesSectionRef} id="wines" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Wines</h3>
              {loading ? (
                <p className="text-center">Loading Wines...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {wines.map((Wines) => (
                    <div
                      key={Wines.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{Wines.name}</h4>
                      <img
                        src={Wines.imagbeere}
                        alt={Wines.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>{Wines.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        {gins.length > 0 && (
          <section ref={GinsSectionRef} id="gins" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Gins</h3>
              {loading ? (
                <p className="text-center">Loading Gins...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {gins.map((Gins) => (
                    <div
                      key={Gins.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{Gins.name}</h4>
                      <img
                        src={Gins.image}
                        alt={Gins.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>{Gins.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        {vodka.length > 0 && (
          <section ref={VodkaSectionRef} id="vodka" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Vodka</h3>
              {loading ? (
                <p className="text-center">Loading Vodka...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {vodka.map((vodka) => (
                    <div
                      key={vodka.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{vodka.name}</h4>
                      <img
                        src={vodka.image}
                        alt={vodka.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>{vodka.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        {tequila.length > 0 && (
          <section ref={tequila} id="tequila" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Tequila</h3>
              {loading ? (
                <p className="text-center">Loading Tequila...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {tequila.map((tequila) => (
                    <div
                      key={tequila.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{tequila.name}</h4>
                      <img
                        src={tequila.image}
                        alt={tequila.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>{tequila.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        {rum.length > 0 && (
          <section ref={RumSectionRef} id="rum" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Rum</h3>
              {loading ? (
                <p className="text-center">Loading Rum...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {rum.map((rum) => (
                    <div
                      key={rum.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{rum.name}</h4>
                      <img
                        src={rum.image}
                        alt={rum.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>{rum.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        {liqueur.length > 0 && (
          <section ref={liqueurSectionRef} id="liqueur" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Liqueur</h3>
              {loading ? (
                <p className="text-center">Loading Liqueur...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {liqueur.map((liqueur) => (
                    <div
                      key={liqueur.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{liqueur.name}</h4>
                      <img
                        src={liqueur.image}
                        alt={liqueur.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>{liqueur.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        {soft.length > 0 && (
          <section ref={softDrinksSectionRef} id="soft" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Soft</h3>
              {loading ? (
                <p className="text-center">Loading Soft...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {soft.map((soft) => (
                    <div
                      key={soft.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{soft.name}</h4>
                      <img
                        src={soft.image}
                        alt={soft.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>{soft.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        {mocktails.length > 0 && (
          <section ref={MocktailSectionRef} id="Mocktail" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Mocktails</h3>
              {loading ? (
                <p className="text-center">Loading Mocktails...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {mocktails.map((mocktails) => (
                    <div
                      key={mocktails.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{mocktails.name}</h4>
                      <img
                        src={mocktails.image}
                        alt={mocktails.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>{mocktails.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        {cocktails.length > 0 && (
          <section ref={CocktailSectionRef} id="cocktails" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Cocktails</h3>
              {loading ? (
                <p className="text-center">Loading Cocktails...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {cocktails.map((cocktails) => (
                    <div
                      key={cocktails.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{cocktails.name}</h4>
                      <img
                        src={cocktails.image}
                        alt={cocktails.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>{cocktails.description}</p>
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
