import type { Context } from "@netlify/edge-functions";

export default async (_request: Request, context: Context) => {
  const response = await context.next();  
  const blob = await response.blob();
  const headers = new Headers(response.headers);
  headers.append("x-content-length", blob.size.toString())
  return new Response(blob, { headers });
};

export const config = { path: "/*.dae" };
