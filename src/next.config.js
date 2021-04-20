module.exports = {
  assetPrefix: "/resources",
  rewrites() {
    return [
      { source: "/resources/_next/:path*", destination: "/_next/:path*" },
    ];
  },
};
