const baseUrl = `https://run.mocky.io/v3`;

export function get(url: string) {
  const requestOptions = {
    method: "GET",
  };
  return fetch(`${baseUrl}/${url}`, requestOptions).then(handleResponse);
}

export function post(url: string, body: Object) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return fetch(`${baseUrl}/${url}`, requestOptions).then(handleResponse);
}

export function put(url: string, body: Object) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return fetch(`${baseUrl}/${url}`, requestOptions).then(handleResponse);
}

export function handleResponse(response: Response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    console.log("ffff", data);

    return data;
  });
}
