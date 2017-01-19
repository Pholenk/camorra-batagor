import React from 'react';
import { View, Text } from 'react-native';
import { addNewPlace, getPlaces, addMenuToPlace, addRatingToPlace } from './database/places';
const seeders = [
  {
    name: 'Rumah Sosis Bandung',
    location: {
      address: 'Jl. Raya Lembang No. 177, Lembang, Jayagiri, Lembang, Bandung, Jawa Barat 40391',
      latitude: -6.8167892,
      longitude: 107.6128168,
    },
    operation: {
      start: '08:00',
      end: '19:00',
    },
    price_range: {
      max: 100000,
      min: 1000,
    },
    image_url: 'http://sebandung.com/wp-content/uploads/2015/04/Rumah-Sosis-Bandung.jpg',
    menus: [
      {
        name: 'Grilled Beef Sausage',
        price: 25500,
        is_favorite: true,
      },
    ],
    rating: [
      {
        rating_value: 4,
        user: {
          id: new Date().getTime(),
        },
      },
    ],
  },
  {
    name: 'Farmhouse Susu Lembang',
    location: {
      address: 'Jalan Raya Lembang No. 108, Gudangkahuripan, Lembang, Kabupaten Bandung Barat, Jawa Barat 40391',
      latitude: -6.8326386,
      longitude: 107.6058752,
    },
    operation: {
      start: '09:00',
      end: '20:00',
    },
    price_range: {
      max: 100000,
      min: 10000,
    },
    image_url: 'http://www.tourbandung.com/wp-content/uploads/2015/12/farmhouse2.jpg',
    menus: [
      {
        name: 'Hummus Trio',
        price: 13500,
        is_favorite: true,
      },
    ],
    rating: [
      {
        rating_value: 5,
        user: {
          id: new Date().getTime(),
        },
      },
    ],
  },
  {
    name: 'Paskal Food Market',
    location: {
      address: ' Paskal Hyper Square, Jl. Pasir Kaliki No. 25-27, Kebon Jeruk, Andir, Ciroyom, Andir, Kota Bandung, Jawa Barat 40181',
      latitude: -6.9144112,
      longitude: 107.5925804,
    },
    operation: {
      start: '11:00',
      end: '23:30',
    },
    price_range: {
      max: 100000,
      min: 10000,
    },
    image_url: 'http://anekatempatwisata.com/wp-content/uploads/2015/11/Paskal-Food-Market-4.jpg',
    menus: [
      {
        name: 'Lumpia Basah Bandung',
        price: 20000,
        is_favorite: true,
      },
    ],
    rating: [
      {
        rating_value: 5,
        user: {
          id: new Date().getTime(),
        },
      },
    ],
  },
  {
    name: 'HDL Seafood',
    location: {
      address: ' Jl. Diponegoro No.54, Citarum, Bandung Wetan, Bandung, Jawa Barat 40115',
      latitude: -6.9012587,
      longitude: 107.6226993,
    },
    operation: {
      start: '10:00',
      end: '23:00',
    },
    price_range: {
      max: 500000,
      min: 50000,
    },
    image_url: 'http://bandung.panduanwisata.id/files/2013/04/hdl-cialki-seafood4.jpg',
    menus: [
      {
        name: 'Kepiting Saos Padang',
        price: 155000,
        is_favorite: true,
      },
    ],
    rating: [
      {
        rating_value: 5,
        user: {
          id: new Date().getTime(),
        },
      },
    ],
  },
  {
    name: 'RM Ampera',
    location: {
      address: 'Jl. Trunojoyo No.46, Citarum, Bandung Wetan, Kota Bandung, Jawa Barat 40115',
      latitude: -6.9020017,
      longitude: 107.6135483,
    },
    operation: {
      start: '9:00',
      end: '22:00',
    },
    price_range: {
      max: 500000,
      min: 50000,
    },
    image_url: 'http://4.bp.blogspot.com/-ofdkl_nNkVI/UI8VSL60uUI/AAAAAAAAASY/npy6efxvv8s/s400/Dadasar1.jpg',
    menus: [
      {
        name: 'Aromanis',
        price: 50000,
        is_favorite: true,
      },
    ],
    rating: [
      {
        rating_value: 5,
        user: {
          id: new Date().getTime(),
        },
      },
    ],
  },
];
seeders.map((place) => {
  addNewPlace(
    place.name,
    place.location,
    place.operation,
    place.price_range,
    place.image_url)
    .then((key) => {
      place.menus.map((menu) => addMenuToPlace(key, menu.name, menu.price, menu.is_favorite));
      place.rating.map((rating) => addRatingToPlace(key, rating.rating_value, rating.user));
    });
});

const Sample = () => (
  <View>
    <Text>Hello World</Text>
  </View>
);
export default Sample;
