/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "lh3.googleusercontent.com"],
  },
  env: {
    NEXT_APP_FIREBASE_API_KEY: process.env.NEXT_APP_FIREBASE_API_KEY,
    NEXT_APP_FIREBASE_AUTH_DOMAIN: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
    NEXT_APP_FIREBASE_PROJECT_ID: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
    NEXT_APP_FIREBASE_STORAGE_BUCKET:
      process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET,
    NEXT_APP_FIREBASE_MESSAGING_SENDER_ID:
      process.env.NEXT_APP_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_APP_FIREBASE_APP_ID: process.env.NEXT_APP_FIREBASE_APP_ID,
    NEXT_APP_FIREBASE_MEASUREMENT_ID:
      process.env.NEXT_APP_FIREBASE_MEASUREMENT_ID,
  },
};

export default nextConfig;
