import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req) {
  const { message } = await req.json();

  const response = await groq.chat.completions.create({
    model: "openai/gpt-oss-20b", // or llama2
    messages: [{ role: "user", content: message }],
  });

  return NextResponse.json({
    reply: response.choices[0].message.content,
  });
}
