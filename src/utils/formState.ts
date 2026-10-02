import { isAxiosError } from "axios";

// result of a server action, shown by the form
export type FormState = { error?: string };

export function getErrorMessage(error: unknown): string {
  if (isAxiosError(error)) {
    // no response at all: api down or wrong url (details are in the server log)
    if (!error.response) return "The API is not reachable, please try again later.";
    // api returns problem details, e.g. { title: "...", detail: "..." }
    const data = error.response?.data;
    return data?.detail ?? data?.title ?? error.message;
  }
  return error instanceof Error ? error.message : "An unknown error occurred";
}

// only allow redirects to own pages, e.g. "/tours/new" (not "https://..." or "//...")
export function safeReturnPath(
  value: FormDataEntryValue | string | null | undefined,
  fallback: string,
) {
  const path = value?.toString();
  return path?.startsWith("/") && !path.startsWith("//") ? path : fallback;
}
