const { createProxyMiddleware } = require("http-proxy-middleware");
console.log(123);

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:7001",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
