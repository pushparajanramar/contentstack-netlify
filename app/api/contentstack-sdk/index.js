import * as contentstack from "contentstack";
import { publicRuntimeConfig } from "@/next.config";
import "@contentstack/live-preview-utils/dist/main.css";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

// export const envConfig =
//   process && process.env.CONTENTSTACK_API_KEY
//     ? process.env
//     : publicRuntimeConfig;

// export const stackConfig = {
//     api_key: envConfig.CONTENTSTACK_API_KEY
//       ? envConfig.CONTENTSTACK_API_KEY
//       : envConfig.NEXT_PUBLIC_CONTENTSTACK_API_KEY,
//     delivery_token: envConfig.CONTENTSTACK_DELIVERY_TOKEN,
//     branch: envConfig.CONTENTSTACK_BRANCH
//       ? envConfig.CONTENTSTACK_BRANCH
//       : "main",
//     environment: envConfig.CONTENTSTACK_ENVIRONMENT,
//     live_preview: {
//       enable: true, // IMPORTANT: DISABLING LIVE PREVIEW WILL HIDE THE CONTENT MANAGEMENT TOKEN FROM THE WINDOW
//       management_token: envConfig.CONTENTSTACK_MANAGEMENT_TOKEN,
//       host: envConfig.CONTENTSTACK_API_HOST,
//     },
//   };

export const envConfig =
  process && "blt00fb8bca61a5c45c" ? process.env : publicRuntimeConfig;

export const stackConfig = {
  // api_key: "blt00fb8bca61a5c45c",
  api_key: "blta0eb77f9f78f5f6a",
  // delivery_token: "cs46b11e96159548fa482ad367",
  delivery_token: "cs379056928b43acb15a040464",
  branch: "main",
  environment: "development",
  //   live_preview: {
  //     enable: false, // IMPORTANT: DISABLING LIVE PREVIEW WILL HIDE THE CONTENT MANAGEMENT TOKEN FROM THE WINDOW
  //     management_token: "",
  //     host: "api.contentstack.io",
  //   },
};

export const Stack = contentstack.Stack(stackConfig);

// if (envConfig.CONTENTSTACK_API_HOST) {
//   Stack.setHost(envConfig.CONTENTSTACK_API_HOST);
// }

Stack.setHost("api.contentstack.io");

// ContentstackLivePreview.init({
//   enable: true,
//   stackSdk: Stack,
//   ssr: true,
//   clientUrlParams: {
//     host: envConfig.CONTENTSTACK_APP_HOST,
//   },
// });

ContentstackLivePreview.init({
  enable: true,
  stackSdk: Stack,
  ssr: true,
  clientUrlParams: {
    host: "app.contentstack.com",
  },
});

export const { onEntryChange } = ContentstackLivePreview;
