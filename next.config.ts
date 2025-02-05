const { execSync } = require("child_process")

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    // Get the current date as the publish date (for example, deploy date)
    publishDate: new Date().toISOString(),
    // Get the version from package.json
    buildVersion: require("./package.json").version,
    // Optional: You can also add a Git commit hash (for identifying the exact version deployed)
    gitCommit: execSync("git rev-parse --short HEAD").toString().trim(),
  },
  async redirects() {
    return [
      {
        source: "/sample-of-work",
        destination:
          "https://www.figma.com/proto/pyJPxIJWAJWyfjQ4Hguidz/DW-Case-Studies?page-id=161%3A3848&node-id=161-19339&viewport=-404%2C-330%2C0.46&t=gqFDLeLpY36Bjr7n-9&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=161%3A19339&show-proto-sidebar=1",
        permanent: true,
      },
    ]
  },
  sassOptions: {
    includePaths: ["./base"],
  },
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
}

module.exports = nextConfig

