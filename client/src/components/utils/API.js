import axios from "axios";

export default {
  getUser: function () {
    return axios.get("/api/users/");
  },
  getCharacters: function () {
    return axios.get("https://api.disneyapi.dev/characters");
  },
  saveUser: function (postData) {
    return axios.post("/api/newuser", postData);
  },
};
