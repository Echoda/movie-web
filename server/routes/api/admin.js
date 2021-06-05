const express = require("express");
const router = express.Router();
const adminService = require("../../services/adminService");
const { asyncHandler } = require("../formResMiddleWare");

// 登录
router.post(
    '/login',
    asyncHandler(async (req, res, next) => {
        return await adminService.login(req.body.name,req.body.pwd);
    })
)

module.exports = router;