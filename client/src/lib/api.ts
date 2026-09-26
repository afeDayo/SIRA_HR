const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:4000").replace(/\/$/, "");

export type ApiResult = {
  ok: boolean;
  message: string;
};

type RequestOptions = {
  method?: "GET" | "POST" | "DELETE";
  body?: object;
  token?: string;
};

export async function request<T = ApiResult>(path: string, options: RequestOptions = {}): Promise<T & ApiResult> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (options.token) headers.Authorization = `Bearer ${options.token}`;

  try {
    const response = await fetch(`${API_URL}/api${path}`, {
      method: options.method ?? "GET",
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
    return await response.json();
  } catch {
    return {
      ok: false,
      message: "We couldn't reach the server. Please check your connection and try again.",
    } as T & ApiResult;
  }
}

export function sendForm(path: string, values: object) {
  return request(path, { method: "POST", body: values });
}
