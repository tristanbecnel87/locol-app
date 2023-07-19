/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['mybucket145142-staging.s3.us-east-1.amazonaws.com']
    }
}
    

module.exports = nextConfig
