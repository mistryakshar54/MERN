import axios from 'axios';

const instance = axios.create({
  baseURL: "https://react-shoppingcart-51ab9.firebaseio.com/",
  timeout: 10000
});

export default instance;