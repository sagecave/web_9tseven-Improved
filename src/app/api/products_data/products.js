export const fetchProducts = async () => {
  const url = process.env.NEXT_PUBLIC_DATA_SUPABASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_DATA_SUPABASE_ANON_KEY;

  const options = {
    method: "GET",
    headers: {
      apikey: API_KEY,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const json = await response.json();
  console.log(json);
  return json;
};
