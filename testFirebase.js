const getPlaces = require('./app/database/places') 

getPlaces().then((result) => {
  console.log(result)
})
