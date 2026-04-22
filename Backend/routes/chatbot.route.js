import express from "express";

const router = express.Router();

router.post("/v1/message", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ botMessage: "No message provided" });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "BotSpoof"
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: text }]
      })
    });

    const data = await response.json();

    const botMessage =
      data?.choices?.[0]?.message?.content ||
      "No response from AI";

    res.json({ botMessage });

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ botMessage: "Something went wrong" });
  }
});

export default router;