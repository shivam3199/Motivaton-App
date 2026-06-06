const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/quotes",
    createProxyMiddleware({
      target: "https://type.fit",
      changeOrigin: true,
    })
  );
};
