const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Disables Next.js image optimization for static export compatibility
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      use: {
        loader: "url-loader",
      },
    });

    return config;
  },
};

export default nextConfig;
