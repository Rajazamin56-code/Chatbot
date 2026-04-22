import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import axios from 'axios';

dotenv.config();

const app = express();
const port = process.env.PORT || 4002;

app.use(express.json());
app.use(cors());

// Chat endpoint using OpenRouter
app.post("/bot/v1/message", async (req, res) => {
  const text = req.body?.text;

  if (!text) {
    return res.status(400).json({ botMessage: "No message provided" });
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "meta-llama/llama-3.1-8b-instruct", // FREE MODEL
        messages: [{ role: "user", content: text }]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "BotSpoof Chatbot"
        }
      }
    );

    const botMessage = response.data.choices[0].message.content;
    res.json({ botMessage });

  } catch (error) {
    console.error("OpenRouter Error:", error.response?.data || error.message);

    return res.status(500).json({
      botMessage: "Something went wrong with OpenRouter API."
    });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// Start server
app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
