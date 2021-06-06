const express = require("express");
const router = express.Router();
const userService = require("../../services/userService");
const { asyncHandler } = require("../formResMiddleWare");

// 获取列表
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 8;
    return await userService.getUsers(page, limit);
  })
);

// 获取单个
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    return await userService.getUserById(req.params.id);
  })
);

// 增
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    return await userService.addUser(req.body);
  })
);

// 删
router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await userService.deleteUser(req.params.id);
  })
);

// 改
router.put(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await userService.updateUser(req.params.id, req.body);
  })
);

// 登录
router.post(
    '/login',
    asyncHandler(async (req, res, next) => {
        return await userService.login(req.body.name, req.body.pwd)
    })
)

module.exports = router;

// 接口测试 OK