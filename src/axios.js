import axios from "axios";

const instance = axios.create({
  //baseURL: 'http://127.0.0.1:5001/webstore-c908a/us-central1/api'
  baseURL: 'https://us-central1-webstore-c908a.cloudfunctions.net/api'
});

export default instance;