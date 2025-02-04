import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css"; // Import Swiper base styles
import "swiper/css/effect-coverflow"; // Import specific Swiper effect styles
import "swiper/css/pagination"; // Import pagination styles
import "swiper/css/navigation"; // Import navigation styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./featured.css"

function Featured() {
  const [foodList, setFoodList] = useState([]);

  // Fetch food data from the API or db.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://oakberry-backend.vercel.app/foodItems");
        const data = await response.json();
        setFoodList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 3; 
    if (width >= 768) return 2; // 2 slides for tablets
    return 1; // 1 slide for mobile
  };

  return (
    <div className="featured-products">
      <div className="types-of-food">
        <h2>Featured Dishes</h2>
        <p>Discover our mouth-watering specialties.</p>
      </div>

      <div className="swiper-container-wrapper">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={getSlidesPerView()}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          loop={true}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-container"
        >
          {foodList.map((food) => (
            <SwiperSlide key={food.id} className="swiper-slide-content">
              <img src={food.imageUrl} alt={food.name} className="food-image" />
              <h3>{food.name}</h3>
              <p className="food-type">{food.type}</p>
              <p className="food-description">{food.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-prev">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="swiper-next">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}

export default Featured;
