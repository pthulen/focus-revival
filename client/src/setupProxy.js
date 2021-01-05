const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        ["/api", "/auth/google"],
        createProxyMiddleware({
            target: "http://localhost:5000"
        })
    );
};

//fowards request from the dev front-end server to the dev back-end server 