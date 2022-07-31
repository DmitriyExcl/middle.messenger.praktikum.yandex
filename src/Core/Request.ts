const sleep = (ms: number = 300) => new Promise((res) => setTimeout(res, ms));


export function request<T extends any>({
  method,
  path,
  data,
}: any): Promise<T> {
  return sleep().then(() =>
    fetch(`${process.env.API_ENDPOINT}/${path}`, {
      method,
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: data ? JSON.stringify(data) : null,
    })
      .then((response) => {
        const isJson = response.headers
          .get('content-type')
          ?.includes('application/json');
        return isJson ? response.json() : null;
      })
      .then((data) => {
        return data as unknown as T;
      }),
  );
}

request.post = <T>(path: string, data?: any) =>
  request<T>({ method: 'POST', path, data });
request.get = <T>(path: string) => request<T>({ method: 'GET', path });