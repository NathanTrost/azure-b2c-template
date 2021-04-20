const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/NathanTrost/azure-b2c-template/gh-pages/"
    : "",
};
