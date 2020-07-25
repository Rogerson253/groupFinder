import axios from "axios";

export default {
  // Get route that connects to our MySql database
  getUser: function () {
    return axios.get("/api/users/");
  },
  // Get route that connects to the Disney Api
  getCharacters: function () {
    return axios.get("https://api.disneyapi.dev/characters");
  },
  // Post route that connects to our MySql database
  saveUser: function (postData) {
    return axios.post("/api/newuser", postData);
  },
};
