export const httpClient = {
  async sendRequest({ url, method, data, queryParams, headers }) {
    try {
      return this.handleSuccessResponse(
        await fetch(this.formatReqUrl(url, queryParams), {
          method,
          body: data,
          headers: {
            ...this.getDefaultHeaders(),
            ...headers,
          },
        })
      );
    } catch (err) {
      return this.handleErrorResponse(err);
    }
  },
  handleSuccessResponse(res) {
    return res.json();
  },
  handleErrorResponse(err) {
    console.log("Api error: ", err);
    throw err;
  },
  getDefaultHeaders() {
    const accessToken = localStorage.getItem("access_token");
    const headers = {
      "Content-Type": "application/json",
    };
    if (accessToken) {
      headers.Authorization = "Bearer " + accessToken;
    }
    return headers;
  },
  formatReqUrl(url, queryParams) {
    const API_BASE_URL = "http://localhost:3000";
    const formattedUrl =
      API_BASE_URL +
      url +
      (queryParams ? `?${new URLSearchParams(queryParams).toString()}` : "");

    return formattedUrl;
  },
};
