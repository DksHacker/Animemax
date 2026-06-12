const config = {
  serverUrl: import.meta.env.VITE_APP_SERVERURL,
  localUrl: import.meta.env.VITE_APP_LOCALURL || "https://animemax-api.vercel.app/api/v1",
  proxyUrl: import.meta.env.VITE_APP_PROXYURL,
};

export default config;
