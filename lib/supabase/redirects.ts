export function sanitizeRedirectTo(value: unknown, fallback = "/app"): string {
  if (typeof value !== "string") {
    return fallback;
  }

  if (!value.startsWith("/")) {
    return fallback;
  }

  if (value.startsWith("//")) {
    return fallback;
  }

  if (value.includes("://")) {
    return fallback;
  }

  return value;
}

