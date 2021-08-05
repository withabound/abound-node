export interface Environment {
  name: EnvironmentName;
  baseUrl: string;
}

type EnvironmentName = "sandbox" | "production";

export const environments: Record<EnvironmentName, Environment> = {
  sandbox: {
    name: "sandbox",
    baseUrl: "https://sandbox-api.withabound.com/",
  },
  production: {
    name: "production",
    baseUrl: "https://production-api.withabound.com/",
  },
};
