// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


import { join } from 'path';

export default {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp4|webm|jpeg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next',
                    name: 'static/media/[name].[hash].[ext]',
                },
            },
        });

        return config;
    },
    // Add any other Next.js configuration options here
};