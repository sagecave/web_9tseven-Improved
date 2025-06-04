export const fetchEmails = async (email) => {
  const url = "https://rqumbnvfrmsowdaxrvkm.supabase.co/rest/v1/sub_newsletter";
  const API_KEY = process.env.NEXT_PUBLIC_DATA_SUPABASE_ANON_KEY;

  const options = {
    method: "POST",
    headers: {
      apikey: API_KEY,
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify([{ mail: email }]),
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const json = await response.json();
  console.log(json);
  return json;
};
