// @flow
const GET_HTTP = "GET";
const POST_HTTP = "POST";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const http_request = async (method, url, params, headers = defaultHeaders) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(params),
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const get = async (url, params) => {
  return await http_request(GET_HTTP, url, params);
};

export const post = async (url, params, headers) => {
  const postHeaders = { ...defaultHeaders, headers };
  return await http_request(POST_HTTP, url, params, postHeaders);
};
