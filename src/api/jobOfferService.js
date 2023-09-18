import { httpClient } from "./httpClient";

export const jobOfferService = {
  getMany(page = 1, limit = 10) {
    return httpClient.sendRequest({
      url: "/job-offers",
      queryParams: { page, limit },
      method: "GET",
    });
  },
};
