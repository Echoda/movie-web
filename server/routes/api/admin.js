const express = require("express");
const router = express.Router();
const adminService = require("../../services/adminService");
const { asyncHandler } = require("../formResMiddleWare");

// 登录
router.post(
    '/login',
    asyncHandler(async (req, res, next) => {
        console.log(req.body);
        // return await adminService.login(req.body)
    })
)

module.exports = router;