import { ContentstackContentSource } from '@stackbit/cms-contentstack';

const config = {
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '18',
  contentSources: [
    new ContentstackContentSource({
      apiKey: process.env.CONTENTSTACK_API_KEY,
      deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN,
      environment: process.env.CONTENTSTACK_ENVIRONMENT || 'development',
    }),
  ],
  modelExtensions: [{ name: 'page', type: 'page', urlPath: '/{slug}' }],
  // Needed only for importing this repository via https://app.stackbit.com/import?mode=duplicate
  import: {
    type: 'contentstack',
    contentFile: 'contentstack/export.json',
    uploadAssets: true,
    assetsDirectory: 'contentstack',
    apiKeyEnvVar: 'CONTENTSTACK_API_KEY',
    deliveryTokenEnvVar: 'CONTENTSTACK_DELIVERY_TOKEN',
    environmentEnvVar: 'CONTENTSTACK_ENVIRONMENT',
  },
};

export default config;
