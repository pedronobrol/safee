import axios from 'axios';

const api = {
  openfoodfacts: axios.create({
    baseURL: 'https://world.openfoodfacts.org',
  }),
};

export default api;
