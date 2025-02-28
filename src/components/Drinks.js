import React, { useState, useRef } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

function Drinks({ addToCart }) {
  const navigate = useNavigate();

  // API Endpoints
  const beersURL = "https://new-haven-backend.vercel.app/beers";
  const cigarettesURL = "https://new-haven-backend.vercel.app/cigarettes";
  const whiskysURL = "https://new-haven-backend.vercel.app/whiskys";
  const cognacsURL = "https://new-haven-backend.vercel.app/cognacs";
  const winesURL = "https://new-haven-backend.vercel.app/wines";
  const ginsURL = "https://new-haven-backend.vercel.app/gins";
  const vodkaURL = "https://new-haven-backend.vercel.app/vodka";
  const tequilaURL = "https://new-haven-backend.vercel.app/tequila";
  const rumURL = "https://new-haven-backend.vercel.app/rum";
  const liqueurURL = "https://new-haven-backend.vercel.app/liqueur";
  const softDrinksURL = "https://new-haven-backend.vercel.app/soft_Drinks";
  const mocktailsURL = "https://new-haven-backend.vercel.app/mocktails";
  const cocktailsURL = "https://new-haven-backend.vercel.app/cocktails";

  // State for drink items
  const [beerItems, setBeerItems] = useState([]);
  const [cigaretteItems, setCigaretteItems] = useState([]);
  const [whiskyItems, setWhiskyItems] = useState([]);
  const [cognacItems, setCognacItems] = useState([]);
  const [wineItems, setWineItems] = useState([]);
  const [ginItems, setGinItems] = useState([]);
  const [vodkaItems, setVodkaItems] = useState([]);
  const [tequilaItems, setTequilaItems] = useState([]);
  const [rumItems, setRumItems] = useState([]);
  const [liqueurItems, setLiqueurItems] = useState([]);
  const [softDrinkItems, setSoftDrinkItems] = useState([]);
  const [mocktailItems, setMocktailItems] = useState([]);
  const [cocktailItems, setCocktailItems] = useState([]);

  // Separate loading states for each category
  const [loadingBeers, setLoadingBeers] = useState(false);
  const [loadingCigarettes, setLoadingCigarettes] = useState(false);
  const [loadingWhiskys, setLoadingWhiskys] = useState(false);
  const [loadingCognacs, setLoadingCognacs] = useState(false);
  const [loadingWines, setLoadingWines] = useState(false);
  const [loadingGins, setLoadingGins] = useState(false);
  const [loadingVodka, setLoadingVodka] = useState(false);
  const [loadingTequila, setLoadingTequila] = useState(false);
  const [loadingRum, setLoadingRum] = useState(false);
  const [loadingLiqueur, setLoadingLiqueur] = useState(false);
  const [loadingSoftDrinks, setLoadingSoftDrinks] = useState(false);
  const [loadingMocktails, setLoadingMocktails] = useState(false);
  const [loadingCocktails, setLoadingCocktails] = useState(false);

  // Section Refs
  const beerSectionRef = useRef(null);
  const cigaretteSectionRef = useRef(null);
  const whiskySectionRef = useRef(null);
  const cognacSectionRef = useRef(null);
  const wineSectionRef = useRef(null);
  const ginSectionRef = useRef(null);
  const vodkaSectionRef = useRef(null);
  const tequilaSectionRef = useRef(null);
  const rumSectionRef = useRef(null);
  const liqueurSectionRef = useRef(null);
  const softDrinksSectionRef = useRef(null);
  const mocktailSectionRef = useRef(null);
  const cocktailSectionRef = useRef(null);

  // ---------------- Price Selection Modal State ----------------
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [priceOptions, setPriceOptions] = useState([]);
  const [selectedPriceOption, setSelectedPriceOption] = useState(null);
  const [showPriceSelectionModal, setShowPriceSelectionModal] = useState(false);

  // Helper function to extract valid price options from a product
  const getPriceOptions = (item) => {
    const options = [];
    Object.keys(item).forEach((key) => {
      if (key.endsWith("_price") && item[key] && item[key] !== "null") {
        // Remove the trailing "_price" to get the option type (e.g. "shot", "threeFifty")
        options.push({ type: key.replace("_price", ""), price: item[key] });
      }
    });
    return options;
  };

  // Handler to add to cart after checking for multiple price options
  const handleAddToCart = (item) => {
    // If a single price is already present, add directly
    if (item.price !== undefined) {
      addToCart(item);
      return;
    }
    // Get the price options from the product object
    const options = getPriceOptions(item);
    if (options.length > 1) {
      // Prompt the user to select an option if more than one exists
      setSelectedProduct(item);
      setPriceOptions(options);
      setShowPriceSelectionModal(true);
    } else if (options.length === 1) {
      // If there's only one option, use it automatically
      item.price = options[0].price;
      item.selectedPriceType = options[0].type;
      addToCart(item);
    } else {
      // Fallback
      addToCart(item);
    }
  };

  // ---------------- Fetch Functions ----------------
  const fetchBeers = async () => {
    setLoadingBeers(true);
    try {
      const response = await fetch(beersURL);
      const data = await response.json();
      setBeerItems(data);
      setTimeout(() => {
        beerSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching beers:", error);
    } finally {
      setLoadingBeers(false);
    }
  };

  const fetchCigarettes = async () => {
    setLoadingCigarettes(true);
    try {
      const response = await fetch(cigarettesURL);
      const data = await response.json();
      setCigaretteItems(data);
      setTimeout(() => {
        cigaretteSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cigarettes:", error);
    } finally {
      setLoadingCigarettes(false);
    }
  };

  const fetchWhiskys = async () => {
    setLoadingWhiskys(true);
    try {
      const response = await fetch(whiskysURL);
      const data = await response.json();
      setWhiskyItems(data);
      setTimeout(() => {
        whiskySectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching whiskys:", error);
    } finally {
      setLoadingWhiskys(false);
    }
  };

  const fetchCognacs = async () => {
    setLoadingCognacs(true);
    try {
      const response = await fetch(cognacsURL);
      const data = await response.json();
      setCognacItems(data);
      setTimeout(() => {
        cognacSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cognacs:", error);
    } finally {
      setLoadingCognacs(false);
    }
  };

  const fetchWines = async () => {
    setLoadingWines(true);
    try {
      const response = await fetch(winesURL);
      const data = await response.json();
      setWineItems(data);
      setTimeout(() => {
        wineSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching wines:", error);
    } finally {
      setLoadingWines(false);
    }
  };

  const fetchGins = async () => {
    setLoadingGins(true);
    try {
      const response = await fetch(ginsURL);
      const data = await response.json();
      setGinItems(data);
      setTimeout(() => {
        ginSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching gins:", error);
    } finally {
      setLoadingGins(false);
    }
  };

  const fetchVodka = async () => {
    setLoadingVodka(true);
    try {
      const response = await fetch(vodkaURL);
      const data = await response.json();
      setVodkaItems(data);
      setTimeout(() => {
        vodkaSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching vodka:", error);
    } finally {
      setLoadingVodka(false);
    }
  };

  const fetchTequila = async () => {
    setLoadingTequila(true);
    try {
      const response = await fetch(tequilaURL);
      const data = await response.json();
      setTequilaItems(data);
      setTimeout(() => {
        tequilaSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching tequila:", error);
    } finally {
      setLoadingTequila(false);
    }
  };

  const fetchRum = async () => {
    setLoadingRum(true);
    try {
      const response = await fetch(rumURL);
      const data = await response.json();
      setRumItems(data);
      setTimeout(() => {
        rumSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching rum:", error);
    } finally {
      setLoadingRum(false);
    }
  };

  const fetchLiqueur = async () => {
    setLoadingLiqueur(true);
    try {
      const response = await fetch(liqueurURL);
      const data = await response.json();
      setLiqueurItems(data);
      setTimeout(() => {
        liqueurSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching liqueur:", error);
    } finally {
      setLoadingLiqueur(false);
    }
  };

  const fetchSoftDrinks = async () => {
    setLoadingSoftDrinks(true);
    try {
      const response = await fetch(softDrinksURL);
      const data = await response.json();
      setSoftDrinkItems(data);
      setTimeout(() => {
        softDrinksSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching soft drinks:", error);
    } finally {
      setLoadingSoftDrinks(false);
    }
  };

  const fetchMocktails = async () => {
    setLoadingMocktails(true);
    try {
      const response = await fetch(mocktailsURL);
      const data = await response.json();
      setMocktailItems(data);
      setTimeout(() => {
        mocktailSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching mocktails:", error);
    } finally {
      setLoadingMocktails(false);
    }
  };

  const fetchCocktails = async () => {
    setLoadingCocktails(true);
    try {
      const response = await fetch(cocktailsURL);
      const data = await response.json();
      setCocktailItems(data);
      setTimeout(() => {
        cocktailSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error fetching cocktails:", error);
    } finally {
      setLoadingCocktails(false);
    }
  };

  // ---------------- Menu Items ----------------
  const menuItems = [
    { name: "Beers", image: "https://images.unsplash.com/photo-1689888393526-35563a50550e?w=500&auto=format&fit=crop&q=60", onClick: fetchBeers },
    { name: "Cigarettes", image: "https://images.unsplash.com/photo-1627449543657-ab677b2105cf?w=500&auto=format&fit=crop&q=60", onClick: fetchCigarettes },
    { name: "Whiskeys", image: "https://images.unsplash.com/photo-1598934475091-f1c4467c4a53?w=500&auto=format&fit=crop&q=60", onClick: fetchWhiskys },
    { name: "Cognac", image: "https://bodegaslacatedral.com/cdn/shop/files/DescripcionCognacHennessyVerySpecial_bodegaslacatedral.jpg?v=1708361988&width=1600", onClick: fetchCognacs },
    { name: "Wines", image: "https://www.baccoestate.co.za/wp-content/uploads/2023/06/bacco-family-of-wines-1024x683.jpg", onClick: fetchWines },
    { name: "Gins", image: "https://www.oaks.delivery/wp-content/uploads/gordons-lemon-gallery.jpg", onClick: fetchGins },
    { name: "Vodka", image: "https://images.unsplash.com/photo-1618412046321-f8127c4589ca?w=500&auto=format&fit=crop&q=60", onClick: fetchVodka },
    { name: "Tequila", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOG8Cya2t-fLW4Re5X4oZhqauiGppjjOOfeQ&s", onClick: fetchTequila },
    { name: "Rum", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajetfiQ-vVrPOkbD3bvOLr81YKGOdBwBkfw&s", onClick: fetchRum },
    { name: "Liqueur", image: "https://drinksworld.com/wp-content/uploads/liqueur-02.jpg", onClick: fetchLiqueur },
    { name: "Soft Drinks", image: "https://images.unsplash.com/photo-1627243939602-6456a5ab231c?w=500&auto=format&fit=crop&q=60", onClick: fetchSoftDrinks },
    { name: "Mocktails", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uJ8hiQYklrdRwyO_gJMK537-UVVK8zhGXg&s", onClick: fetchMocktails },
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
                    <h4 className="text-xl font-bold text-white">{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example: Beers Section */}
        {beerItems.length > 0 && (
          <section ref={beerSectionRef} id="beers" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Beers</h3>
              {loadingBeers ? (
                <p className="text-center">Loading beers...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {beerItems.map((beer) => (
                    <div key={beer.id} className="bg-gray-800 p-4 rounded-lg text-center">
                      <h4 className="text-xl font-bold">{beer.name}</h4>
                      <img
                        src={beer.imageUrl}
                        alt={beer.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>Ksh {beer.price}</p>
                      <button
                        onClick={() => handleAddToCart(beer)}
                        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
                {/* Cigarettes Section */}
                {cigaretteItems.length > 0 && (
          <section ref={cigaretteSectionRef} id="cigarettes" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Cigarettes</h3>
              {loadingCigarettes ? (
                <p className="text-center">Loading Cigarettes...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {cigaretteItems.map((cigarette) => (
                    <div
                      key={cigarette.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{cigarette.name}</h4>
                      <img
                        src={cigarette.imageUrl}
                        alt={cigarette.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>Ksh {cigarette.price}</p>
                      <button
                        onClick={() => addToCart(cigarette)}
                        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Whiskys Section */}
        {whiskyItems.length > 0 && (
          <section ref={whiskySectionRef} id="whiskys" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Whiskys</h3>
              {loadingWhiskys ? (
                <p className="text-center">Loading Whiskys...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {whiskyItems.map((whisky) => (
                    <div
                      key={whisky.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{whisky.name}</h4>
                      <img
                        src={whisky.imageUrl}
                        alt={whisky.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>1 Liter Ksh {whisky.price}</p>
                      <button
                        onClick={() => addToCart(whisky)}
                        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Cognacs Section */}
        {cognacItems.length > 0 && (
          <section ref={cognacSectionRef} id="cognacs" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Cognacs</h3>
              {loadingCognacs ? (
                <p className="text-center">Loading Cognacs...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {cognacItems.map((cognac) => (
                    <div
                      key={cognac.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{cognac.name}</h4>
                      <img
                        src={cognac.imageUrl}
                        alt={cognac.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>750ml Ksh {cognac.price}</p>
                      <button
                        onClick={() => addToCart(cognac)}
                        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Wines Section */}
        {wineItems.length > 0 && (
          <section ref={wineSectionRef} id="wines" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Wines</h3>
              {loadingWines ? (
                <p className="text-center">Loading Wines...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {wineItems.map((wine) => (
                    <div
                      key={wine.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{wine.name}</h4>
                      <img
                        src={wine.imageUrl}
                        alt={wine.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>Bottle Price Ksh {wine.price}</p>
                      <button
                        onClick={() => addToCart(wine)}
                        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Gins Section */}
        {ginItems.length > 0 && (
          <section ref={ginSectionRef} id="gins" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Gins</h3>
              {loadingGins ? (
                <p className="text-center">Loading Gins...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {ginItems.map((gin) => (
                    <div
                      key={gin.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{gin.name}</h4>
                      <img
                        src={gin.imageUrl}
                        alt={gin.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>750ml Ksh {gin.price}</p>
                      <button
                        onClick={() => addToCart(gin)}
                        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Vodka Section */}
        {vodkaItems.length > 0 && (
          <section ref={vodkaSectionRef} id="vodka" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Vodka</h3>
              {loadingVodka ? (
                <p className="text-center">Loading Vodka...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {vodkaItems.map((vodka) => (
                    <div
                      key={vodka.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{vodka.name}</h4>
                      <img
                        src={vodka.imageUrl}
                        alt={vodka.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>750ml Price Ksh {vodka.price}</p>
                      <button
                        onClick={() => addToCart(vodka)}
                        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Tequila Section */}
        {tequilaItems.length > 0 && (
          <section ref={tequilaSectionRef} id="tequila" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Tequila</h3>
              {loadingTequila ? (
                <p className="text-center">Loading Tequila...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {tequilaItems.map((tequila) => (
                    <div
                      key={tequila.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{tequila.name}</h4>
                      <img
                        src={tequila.imageUrl}
                        alt={tequila.name}
                        className="w-full h-60 object-cover rounded-md mb-2"
                      />
                      <p>Ksh {tequila.price}</p>
                      <button
                        onClick={() => addToCart(tequila)}
                        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Rum Section */}
        {rumItems.length > 0 && (
          <section ref={rumSectionRef} id="rum" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Rum</h3>
              {loadingRum ? (
                <p className="text-center">Loading Rum...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {rumItems.map((rum) => (
                    <div
                      key={rum.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{rum.name}</h4>
                      <img
                        src={rum.imageUrl}
                        alt={rum.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>Ksh {rum.price}</p>
                      <button
                        onClick={() => addToCart(rum)}
                        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Liqueur Section */}
        {liqueurItems.length > 0 && (
          <section ref={liqueurSectionRef} id="liqueur" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Liqueur</h3>
              {loadingLiqueur ? (
                <p className="text-center">Loading Liqueur...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {liqueurItems.map((liqueur) => (
                    <div
                      key={liqueur.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{liqueur.name}</h4>
                      <img
                        src={liqueur.imageUrl}
                        alt={liqueur.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>ksh {liqueur.price}</p>
                      <button
                        onClick={() => addToCart(liqueur)}
                        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Soft Drinks Section */}
        {softDrinkItems.length > 0 && (
          <section ref={softDrinksSectionRef} id="soft" className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold mb-8 text-center">Soft Drinks</h3>
              {loadingSoftDrinks ? (
                <p className="text-center">Loading Soft Drinks...</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {softDrinkItems.map((soft) => (
                    <div
                      key={soft.id}
                      className="bg-gray-800 p-4 rounded-lg text-center"
                    >
                      <h4 className="text-xl font-bold">{soft.name}</h4>
                      <img
                        src={soft.imageUrl}
                        alt="Image To Be Added Soon"
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <p>Ksh {soft.price}</p>
                      <button
                        onClick={() => addToCart(soft)}
                        className="mt-2 bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}


        {/* Price Selection Modal */}
        {showPriceSelectionModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Select Price Option</h2>
              <p className="mb-4">
                Please select a price option for {selectedProduct?.name}:
              </p>
              <div className="flex flex-col space-y-2">
                {priceOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPriceOption(option)}
                    className={`px-4 py-2 border rounded text-left ${
                      selectedPriceOption?.type === option.type
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {option.type}: Ksh {option.price}
                  </button>
                ))}
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  onClick={() => {
                    setShowPriceSelectionModal(false);
                    setSelectedProduct(null);
                    setPriceOptions([]);
                    setSelectedPriceOption(null);
                  }}
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (selectedPriceOption) {
                      selectedProduct.price = selectedPriceOption.price;
                      selectedProduct.selectedPriceType = selectedPriceOption.type;
                      addToCart(selectedProduct);
                      setShowPriceSelectionModal(false);
                      setSelectedProduct(null);
                      setPriceOptions([]);
                      setSelectedPriceOption(null);
                    }
                  }}
                  disabled={!selectedPriceOption}
                  className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drinks;
