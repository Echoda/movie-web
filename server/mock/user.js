const Mock = require("mockjs");

const result = Mock.mock({
  "datas|10": [
    {
      "id|+1": 1,
      username: "@FIRST",
      userpwd: /\d{8,10}/,
      email: "@email",
    },
  ],
}).datas;

// console.log(result);
const User = require("../models/User");
User.bulkCreate(result);