// components/NewsletterForm.js
import { useState } from "react";
// import newsApi from "../../src/app/api/subcribeNewsletter/newsletterApi";
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("../../src/app/api/subcribeNewsletter/newsletterApi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      setMessage("Thanks for subscribing!");
    } else {
      setMessage(data.error || "Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Your email" className="border p-2 rounded w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Subscribe
      </button>
      {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
    </form>
  );
}
