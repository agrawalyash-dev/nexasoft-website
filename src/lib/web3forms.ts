const ENDPOINT = "https://api.web3forms.com/submit";

export const contactKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
export const careersKey = import.meta.env.VITE_WEB3FORMS_CAREERS_KEY ||
  contactKey;

type Web3FormsResponse = { success: boolean; message?: string };

export async function submitWeb3Form(
  accessKey: string,
  data: Record<string, string | boolean>,
): Promise<Web3FormsResponse> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: accessKey, ...data }),
  });
  const json = (await res.json().catch(() => null)) as Web3FormsResponse | null;
  if (!res.ok || !json?.success) {
    throw new Error(json?.message ?? `Request failed (${res.status})`);
  }
  return json;
}
