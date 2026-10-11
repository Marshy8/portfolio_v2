import { CONTACT_API_URL } from "../data/integrations";
import type { ContactMessage } from "../types";

export const isConnected = CONTACT_API_URL !== null;

/**
 * `website` is a honeypot: the field is hidden from people, so a value in it
 * means a bot filled the form. The script drops those.
 */
export async function sendContactMessage(
  message: ContactMessage & { website: string },
): Promise<void> {
  if (!CONTACT_API_URL) throw new Error("CONTACT_API_URL is not set");
  // A string body goes out as text/plain, which needs no CORS preflight.
  // Apps Script cannot answer a preflight, so do not set a JSON content type.
  const res = await fetch(CONTACT_API_URL, {
    method: "POST",
    body: JSON.stringify({ type: "contact", ...message }),
  });
  if (!res.ok) throw new Error(`Contact request failed: ${res.status}`);
  const result = (await res.json()) as { ok: boolean };
  if (!result.ok) throw new Error("Contact request was rejected");
}
