/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_NUM_IN_PAGE: process.env.NEXT_PUBLIC_NUM_IN_PAGE,
    },
};

export default nextConfig;
