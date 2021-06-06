const Mock = require("mockjs");
const relation = require('../models/relation');

const result = Mock.mock({
  "datas|50": [
    {
      "id|+1": 1,
      "star|1": [1,2,3,4,5,6,7,8,9,10],
      "UserId|1": [1,2,3,4,5,6,7,8,9,10],
      "MovieId|1": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
      content: "@cparagraph",
    },
  ],
}).datas;

// console.log(result);
const Comment = require("../models/Comment");
Comment.bulkCreate(result);