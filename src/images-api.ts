import axios from "axios";
import { FetchImagesResponse } from "./App";

const token = "qfhxlVsYGzOWsbabUCgbc1zMafzxqBUUe37J4jgjSP0";

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${token}`,
  },
});

export type FetchImagesFn = (
  query: string,
  page: number,
  signal?: AbortSignal
) => Promise<{ data: FetchImagesResponse }>;

export const fetchImagesData: FetchImagesFn = async (query, page, signal) => {
  const response = await api.get<FetchImagesResponse>("/search/photos", {
    params: {
      query,
      page,
      per_page: 15,
      signal,
    },
  });
  return response;
};
