export default async () => {
  return Response.redirect("https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&key=" + Netlify.env.get("GOOGLE_MAPS_API_KEY"));
};

export const config = { path: "/googlemaps" };
