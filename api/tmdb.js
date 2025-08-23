export default async function handler(req, res) {
  const apiKey = process.env.REACT_APP_API;

  const { path } = req.query;

  const url = new URL(`https://api.themoviedb.org/3/${path}`);
  url.searchParams.set("api_key", apiKey);

  for (const [key, value] of Object.entries(req.query)) {
    if (key !== "path") {
      url.searchParams.set(key, value);
    }
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json(errorData);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
