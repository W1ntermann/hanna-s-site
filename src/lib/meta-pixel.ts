export const META_PIXEL_ID = "1901556570360032";

declare global {
  interface Window {
    fbq: (
      type: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq: unknown;
  }
}

export function fbq(
  type: string,
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq(type, eventName, params);
  }
}

export function trackPageView() {
  fbq("track", "PageView");
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  fbq("track", eventName, params);
}