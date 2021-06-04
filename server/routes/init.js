const express = require("express");
const app = express();
// const cors = require("cors");

// const history = require("connect-history-api-fallback");
// app.use(history());

// 映射public目录中的静态资源
// const path = require("path");
// const staticRoot = path.resolve(__dirname, "../public");
// app.use(express.static(staticRoot));

// app.use(
//   cors({
//     origin(origin, callback) {
//       if (!origin) {
//         callback(null, "*");
//         return;
//       }
//       callback(null, origin);
//     },
//     credentials: true,
//   })
// );

// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }));

// 解析 application/json 格式的请求体
app.use(express.json());

// 处理 api 的请求
app.use("/api/user", require("./api/user"));
app.use("/api/movie", require("./api/movie"));
app.use("/api/comment", require("./api/comment"));
app.use("/api/admin", require("./api/admin"));

// 处理错误的中间件
app.use(require("./errorMiddleware"));

const port = 5008;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});