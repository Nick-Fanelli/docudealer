/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {

        return [

            {
                source: "/signin",
                destination: "/auth/signin",
                permanent: true
            }

        ]
        
    },

    reactStrictMode: true
};

module.exports = nextConfig;
