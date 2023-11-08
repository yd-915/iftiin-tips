// eslint-disable-next-line no-restricted-imports, @typescript-eslint/no-var-requires
const { i18n } = require("./next-i18next.config");
// eslint-disable-next-line @typescript-eslint/no-var-requires


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  sentry: {
    hideSourceMaps: false,
    autoInstrumentServerFunctions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
},
  redirects: async () => {
    return [
      {
        source: "/scoreboard",
        destination: "/leaderboard",
        permanent: true,
      },
    ];
  },
};


// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins

