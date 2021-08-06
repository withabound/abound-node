import axios, { AxiosInstance } from "axios";
import { AboundConfig } from "../AboundClient";

let configuredAxios: AxiosInstance;

// TODO remove singleton pattern, allow for multiple configuredAxios instances to co-exist
// (e.g. v2 and v3 at the same time, or two different axios instances with two different appId/appSecret tuples)
export function initAxios(config: AboundConfig): void {
  configuredAxios = axios.create({
    baseURL: `${config.environment.baseUrl}${config.apiVersion}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.appId}.${config.appSecret}`,
    },
  });
}

export const get = async <O>(uri: string): Promise<O> => {
  validateAxiosIsConfigured();

  return configuredAxios.get(uri).then((response) => response.data);
};

export const post = async <I, O>(uri: string, payload?: I): Promise<O> => {
  validateAxiosIsConfigured();

  return configuredAxios.post(uri, payload).then((response) => response.data);
};

// `delete` is a reserved keyword
export const destroy = async <O>(uri: string): Promise<O> => {
  validateAxiosIsConfigured();

  return configuredAxios.delete(uri).then((response) => response.data);
};

function validateAxiosIsConfigured(): void {
  if (!configuredAxios) {
    throw new Error("Configured axios instance has not been instantiated!");
  }
}
