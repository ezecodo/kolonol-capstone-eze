import React, { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";

function FavRestaurantList() {
  const [bookmarkedRestaurants, setBookmarkedRestaurants] = useState([]);

  useEffect(() => {
    const bookmarkedRestaurants =
      JSON.parse(localStorage.getItem("bookmarkedRestaurants")) || [];
    setBookmarkedRestaurants(bookmarkedRestaurants);
  }, []);

  return (
    <div>
      <h1>Favorite Restaurants</h1>
      {bookmarkedRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.place_id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default FavRestaurantList;
