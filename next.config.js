/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/store/6552db755c78718103eacc77/checkout",
        destination:
          "https://ecommerce-cms-one.vercel.app/api/store/6552db755c78718103eacc77/checkout",
      },
    ];
  },
};

module.exports = nextConfig;
