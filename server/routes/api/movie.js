const express = require("express");
const router = express.Router();
const movieService = require("../../services/movieService");
const { asyncHandler } = require("../formResMiddleWare");

// 查 列表
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 8;
    const name = req.query.name || '';
    return await movieService.getUsers(page, limit, name);
  })
);

// 查 单个
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    return await movieService.getUserById(req.params.id);
  })
);

// 增
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    return await movieService.addUser(req.body);
  })
);

// 删
router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await movieService.deleteUser(req.params.id);
  })
);

// 改
router.put(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await movieService.updateUser(req.params.id, req.body);
  })
);

module.exports = router;