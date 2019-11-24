import axios from "axios";

export default axios.create({
  baseURL: "https://tranquil-dusk-72376.herokuapp.com/",
  responseType: "json"
});
