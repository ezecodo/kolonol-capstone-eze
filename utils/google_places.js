// Functions to fetch a list with Latin Restaurants in Cologne

export async function getLatinRestaurants() {
  const api_key = "AIzaSyC0l9IYbE3FQbMjcTRnERM3BGw6y_nQUhM";
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=latin+restaurants+cologne+germany+comida+latina+&key=${api_key}`
  );
  const data = await response.json();

  return data.results;
}

export async function getRestaurantDetails(place_id) {
  const api_key = "AIzaSyC0l9IYbE3FQbMjcTRnERM3BGw6y_nQUhM";
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=name,formatted_address,formatted_phone_number,rating&key=${api_key}`
  );
  const data = await response.json();
  if (data.status === "OK") {
    return data.result;
  } else {
    console.error(data.status);
    return {};
  }
}

// Functions to fetch a list with Latin Music in Cologne

export async function getLatinMusicPlaces() {
  const api_key = "AIzaSyC0l9IYbE3FQbMjcTRnERM3BGw6y_nQUhM";
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=latin+music+cologne+musica+latina+colonia+alemania&key=${api_key}`
  );
  const data = await response.json();
  return data.results;
}

// Functions to fetch Details of Latin Clubs in Cologne
export async function getClubDetails(place_id) {
  const api_key = "AIzaSyC0l9IYbE3FQbMjcTRnERM3BGw6y_nQUhM";
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=name,formatted_address,formatted_phone_number,rating&key=${api_key}`
  );
  const data = await response.json();
  return data.result;
}
