// // Import the model

// const db = require("../models");
// export default{
//   getAllUsers:() => app.get("/api/users/", (req, res) => {
//     db.user.findAll({})
//       .then ((dbUsers) => {
//         res.json(dbUsers);
//       });
//   }),

// getUserProfile:(userName) => app.get('/api/users/username/:username', (req, res) => {
//   db.user.findAll({
//     where: {
//       username: req.params.username
//     }
//   })
//     .then((dbDefinitions) => {
//       res.json(dbDefinitions);
//     });
// }),

// createNewUser: (userName, password) => app.post("/api/newuser", (req, res) => {

//   db.user.create({
//     username: req.body.username,
//     password: req.body.password,
//   }).then((dbUsers) => {
//     // `results` here would be the newly created user
//     res.json(dbUsers);
//   });
// })

// }

import axios from "axios";

export default {
  getUser: function () {
    return axios.get("/api/users");
  },
  saveUser: function (postData) {
    return axios.post("/api/newuser", postData);
  },
};
