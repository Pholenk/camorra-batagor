import { database } from './database';

const resource = 'places';
const serializePlace = (place) => {
  const newPlace = place;
  const newMenus = [];
  const newRatings = [];
  if (place.menus) {
    Object.keys(place.menus).map((key) => {
      newMenus.push({
        ...place.menus[key],
        key,
        id: key,
      });
    });
  }
  if (place.ratings) {
    Object.keys(place.ratings).map((key) => {
      newRatings.push({
        ...place.ratings[key],
        key,
        id: key
      });
    });
  }
  newPlace.ratings = newRatings;
  newPlace.menus = newMenus;
  return newPlace;
}
export const addNewPlace = (name, location = {}, operation = {}, priceRange = {}, imageUrl) => {
  const newKey = database.ref().child(resource).push().key;
  const newPlace = {};
  newPlace[`/${resource}/${newKey}`] = {
    name,
    location,
    operation,
    price_range: priceRange,
    image_url: imageUrl,
  };
  return new Promise((resolve, reject) =>
    database.ref()
    .update(newPlace)
    .then(() => resolve(newKey))
    .catch((err) => reject(err)),
  );
};
export const updatePlace = (key, name, location = {}) => {
  const update = {};
  update[`${resource}/${key}`] = { name, location };
  return database.ref().update(update);
};
export const deletePlace = (key) => {
  const currentPlace = {};
  currentPlace[`${resource}/${key}`] = null;
  return database.ref().update(deletePlace);
};

export const getPlaces = () => database.ref(`/${resource}`).once('value').then((snapshot) => {
  const objects = snapshot.val();
  let results = [];
  Object.keys(objects).map((key)=>results.push({
    ...objects[key],
    key,
    id: key,
  }));
  results = results.map(serializePlace);
  return new Promise((resolve) => {
    return resolve(results);
  });
});

export const addMenuToPlace = (keyPlace, name, price, isFavorite = false) => {
  const newKey = database.ref().child(`/${resource}/${keyPlace}/menus/`).push().key;
  const newMenu = {};
  newMenu[`/${resource}/${keyPlace}/menus/${newKey}`] = {
    name,
    price,
    is_favorite: isFavorite,
  };

  return new Promise((resolve, reject) =>
    database.ref()
    .update(newMenu)
    .then(() => resolve(newKey))
    .catch((err) => reject(err)),
  );
};
export const addRatingToPlace = (keyPlace, ratingValue, user = {}) => {
  const newKey = database.ref().child(`/${resource}/${keyPlace}/rating/`).push().key;
  const newRating = {};
  newRating[`/${resource}/${keyPlace}/rating/${newKey}`] = {
    rating_value: ratingValue,
    user,
  };

  return new Promise((resolve, reject) =>
    database.ref()
    .update(newRating)
    .then(() => resolve(newKey))
    .catch((err) => reject(err)),
  );
};
export const updateMenuOfPlace = (keyPlace, keyMenu, name, price, isFavorite = false) => {
  const newMenu = {};
  newMenu[`/${resource}/${keyPlace}/menus/${keyMenu}`] = {
    name,
    price,
    is_favorite: isFavorite,
  };

  return new Promise((resolve, reject) =>
    database.ref()
    .update(newMenu)
    .then(() => resolve(keyMenu))
    .catch((err) => reject(err)),
  );
};
