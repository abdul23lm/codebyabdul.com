const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'codebyabdul.com'],
  },
  secret: process.env.NEXTAUTH_SECRET,
};

module.exports = nextConfig;
