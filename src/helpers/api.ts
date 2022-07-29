const BASE_URL = "http://127.0.0.1:4000/";

export const apiWithoutJWT = (
  URL: string,
  body?: { [x: string]: unknown },
  method = "GET"
) => {
  if (method === "GET") {
    return fetch(`${BASE_URL}${URL}`, {
      method,
      headers: {
        "Content-type": "application/json",
      },
    });
  } else {
    return fetch(`${BASE_URL}${URL}`, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }
};
