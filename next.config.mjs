/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/.well-known/apple-app-site-association',
          headers: [
            {
              key: 'Content-Type',
              value: 'application/json',
            },
          ],
        },
      ];
    },

    async redirects() {
      return [
        {
          source: '/app/:path*', 
          destination: 'https://lmu-app.lmu-dev.org/', 
          permanent: true, 
        },
      ];
    },
};

export default nextConfig;
