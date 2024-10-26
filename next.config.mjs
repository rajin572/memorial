/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "192.168.10.205"],
   
  },
  server: {
    host: '0.0.0.0',  // This allows access from the local network
    port: 3000,       // Optional: You can specify the port if needed
  }
};

export default nextConfig;
