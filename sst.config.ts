/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "notes",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    await import("./infra/storage");
    // await import("./infra/auth");
    await import("./infra/web");
    const api = await import("./infra/api");


    return {
      api: api.myApi.url,
    };
  },
});
