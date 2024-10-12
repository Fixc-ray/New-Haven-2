import React from "react";

function LikedMeals({ likedMeals = [], removeFromLikedMeals }) {
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-semibold text-center mb-6">Your Favourite Meals</h1>
      {likedMeals.length === 0 ? (
        <p className="text-center">No liked meals yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedMeals.map((meal) => (
            <div key={meal.id} className="border p-4 rounded shadow-md">
              <img
                src={meal.imageUrl}
                alt={meal.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h4 className="text-xl font-semibold">{meal.name}</h4>
              <p>Price: KSH {meal.price}</p>
              <button
                onClick={() => removeFromLikedMeals(meal.id)}
                className="mt-2 bg-orange-500 text-white px-4 p-2 rounded shadow-md hover:bg-red-700"
              >
                Remove from Liked
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LikedMeals;
