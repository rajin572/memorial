import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "192.168.10.205",
      "167.172.237.118",
      "https://api.memorialmoments.org/api/v1",
      "api.memorialmoments.org",
    ],
  },
  server: {
    host: "167.172.237.118", // This allows access from the local network
    port: 3000, // Optional: You can specify the port if needed
  },
};

// export default nextConfig;
export default withNextIntl(nextConfig);
