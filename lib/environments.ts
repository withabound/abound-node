const environments: Record<EnvironmentName, Environment> = {
  sandbox: {
    name: "sandbox",
    baseUrl: "https://sandbox-api.withabound.com/",
  },
  production: {
    name: "production",
    baseUrl: "https://production-api.withabound.com/",
  },
};

export { environments };
