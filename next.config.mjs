import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      // Explicitly pins the compiling root to your exact project root
      root: __dirname,
    },
  },
};

export default nextConfig;