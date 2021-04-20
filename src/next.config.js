const isProd = process.env.NODE_ENV === "production";

module.exports = {
  distDir: "out",
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/NaveenDA/naveenda.github.io/gh-pages/"
    : "",
};
