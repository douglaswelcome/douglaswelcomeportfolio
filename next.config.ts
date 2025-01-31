import type { NextConfig } from "next";


const { execSync } = require('child_process');

module.exports = {
  publicRuntimeConfig: {
    // Get the current date as the publish date (for example, deploy date)
    publishDate: new Date().toISOString(),
    // Get the version from package.json
    buildVersion: require('./package.json').version,
    // Optional: You can also add a Git commit hash (for identifying the exact version deployed)
    gitCommit: execSync('git rev-parse --short HEAD').toString().trim(),
  },
};


const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: ['./base'],
  },
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

};

export default nextConfig;




