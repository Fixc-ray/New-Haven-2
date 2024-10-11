import React, { useEffect, useState } from 'react';

function Gallery() {
  const url = "http://localhost:3000/Gallery";
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setGallery(data);
      } catch (error) {
        console.error("Error fetching gallery items", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {gallery.map(item => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={`Gallery item ${item.id}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
