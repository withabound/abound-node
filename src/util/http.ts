import { URLSearchParams } from "url";
import axios, { AxiosInstance } from "axios";

import { AboundConfig } from "../AboundClient";

export function initAxios(config: AboundConfig): AxiosInstance {
  return axios.create({
    baseURL: `${config.environment}${config.apiVersion}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.appId}.${config.appSecret}`,
    },
  });
}

export const get = async <O, P extends Record<string, unknown>>(
  axiosInstance: AxiosInstance,
  uri: string,
  parameters?: P
): Promise<O> => {
  if (parameters) {
    uri += buildQueryString(parameters);
  }

  return axiosInstance.get<O>(uri).then((response) => response.data);
};

export const post = async <I, O>(
  axiosInstance: AxiosInstance,
  uri: string,
  payload?: I
): Promise<O> => {
  return axiosInstance.post<O>(uri, payload).then((response) => response.data);
};

export const put = async <I, O>(
  axiosInstance: AxiosInstance,
  uri: string,
  payload?: I
): Promise<O> => {
  return axiosInstance.put<O>(uri, payload).then((response) => response.data);
};

// `delete` is a reserved keyword
export const destroy = async <O>(
  axiosInstance: AxiosInstance,
  uri: string
): Promise<O> => {
  return axiosInstance.delete<O>(uri).then((response) => response.data);
};

export const buildQueryString = <P extends Record<string, unknown>>(
  parameters: P
): string => {
  const entries = Object.entries(parameters);
  if (entries.length === 0) {
    return "";
  }

  const urlSearchParameters = new URLSearchParams();

  for (const [key, value] of entries) {
    urlSearchParameters.append(key, String(value));
  }

  return `?${urlSearchParameters.toString()}`;
};
