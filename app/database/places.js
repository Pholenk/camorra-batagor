import database from './database';

export const writeNewPlace = (data) => {
  const newKey = database.ref().child('places').push().key;
  const newPlace = {};
  newPlace[`/places/${newKey}`] = data;
  return database.ref().update(newPlace);
};
export const readPlaces = () => database.ref('/places').once('value');
