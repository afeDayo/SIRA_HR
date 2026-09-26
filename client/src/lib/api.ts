const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:4000").replace(/\/$/, "");

export type ApiResult = {
  ok: boolean;
  message: string;
};

async function post(path: string, body: object): Promise<ApiResult> {
  try {
    const response = await fetch(`${API_URL}/api${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return (await response.json()) as ApiResult;
  } catch {
    return {
      ok: false,
      message: "We couldn't reach the server. Please check your connection and try again.",
    };
  }
}

export type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
};

export type BookingPayload = {
  name: string;
  company?: string;
  email: string;
  date: string;
  time: string;
  message?: string;
};

export type ApplicationPayload = {
  jobId: string;
  jobTitle: string;
  name: string;
  email: string;
  link?: string;
  message?: string;
};

export function submitContact(payload: ContactPayload) {
  return post("/contact", payload);
}

export function submitBooking(payload: BookingPayload) {
  return post("/bookings", payload);
}

export function submitApplication(payload: ApplicationPayload) {
  return post("/applications", payload);
}

export function subscribeNewsletter(email: string) {
  return post("/newsletter", { email });
}
