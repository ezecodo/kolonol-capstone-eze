import React, { useState, useEffect } from "react";
import RestaurantCard from "../../components/RestaurantCard";

const Favorites = () => {
  const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Retrieve restaurant details from localStorage
    const savedRestaurants = favorites.map((place_id) => {
      const restaurant = JSON.parse(localStorage.getItem(place_id));
      return restaurant;
    });

    setFavoriteRestaurants(savedRestaurants);
  }, []);

  return (
    <div>
      <h1>Favorited Restaurants</h1>
      {favoriteRestaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.place_id}
          restaurant={restaurant}
          placeId={restaurant.place_id}
        />
      ))}
    </div>
  );
};

export default Favorites;
