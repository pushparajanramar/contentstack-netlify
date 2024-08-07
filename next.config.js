/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CONTENTSTACK_BRANCH: "main",
    CONTENTSTACK_ENVIRONMENT: "development",
    CONTENTSTACK_API_KEY: "blta0eb77f9f78f5f6a",
    CONTENTSTACK_DELIVERY_TOKEN: "cs379056928b43acb15a040464",

    SITE_URL: "https://contentstackdemo.netlify.app/",
    NEXT_PUBLIC_CONTENTSTACK_API_KEY: "true",
    CONTENTSTACK_API_HOST: "api.contentstack.io",
    CONTENTSTACK_MANAGEMENT_TOKEN: "cs33d34f22eedd761650126895",
    CONTENTSTACK_APP_HOST: "app.contentstack.com",
  },
  images: {
    formats: ["image/webp", "image/avif"],
    domains: [
      "images.contentstack.io",
      "https://images.ctfassets.net",
      "https:/hyqa.travismathew.co.uk",
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
