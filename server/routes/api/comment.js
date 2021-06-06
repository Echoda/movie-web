const express = require("express");
const router = express.Router();
const commentService = require("../../services/commentService");
const { asyncHandler } = require("../formResMiddleWare");

// 查 列表
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const movieId = req.query.movieId || 0;
    return await commentService.getComments(movieId);
  })
);

// 查 单个
// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     return await commentService.getUserById(req.params.id);
//   })
// );

// 增
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    console.log(req.body)
    return await commentService.addComment(req.body);
  })
);

// 删
router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await commentService.deleteComment(req.params.id);
  })
);

module.exports = router;