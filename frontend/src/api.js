const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://personal-portfolio-68v2.onrender.com/api";

export const submitContact = async (payload) => {
  const response = await fetch(`${API_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to submit contact form");
  }

  return data;
};
