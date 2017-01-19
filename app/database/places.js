import database from './database';

const resource = 'places';
export const addNewPlace = (name, location = {}) => {
  const newKey = database.ref().child(resource).push().key;
  const newPlace = {};
  newPlace[`/${resource}/${newKey}`] = {
    name,
    location,
  };
  return database.ref().update(newPlace);
};
export const updatePlace = (key, name, location = {}) => {
  const update = {};
  update[`${resource}/${key}`] = { name, location };
  return database.ref().update();
};
export const deletePlace = (key) => {
  const currentPlace = {};
  currentPlace[`${resource}/${key}`] = null;
  return database.ref().update(deletePlace);
};

export const getPlaces = () => database.ref(`/${resource}`).once('value');

export const addMenuToPlace = (keyPlace, name, price, isFavorite = false) => {
  const newKey = database.ref().child(`/${resource}/${keyPlace}/menus/`).push().key;
  const newPlace = {};
  newPlace[`/${resource}/${keyPlace}/menus/${newKey}`] = {
    name,
    price,
    is_favorite: isFavorite,
  };
  return database.ref().update(newPlace);
};
