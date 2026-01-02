
import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

const getAI = () => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY is not defined");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const chatWithTwin = async (userMessage: string, history: { role: 'user' | 'assistant', parts: { text: string }[] }[]) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    }
  });

  // Simple implementation: send the message and get response
  // In a real chat, we'd use history, but here we'll keep it simple for brevity
  const result = await chat.sendMessage({ message: userMessage });
  return result.text;
};

export const brainstormProject = async (industry: string) => {
  const ai = getAI();
  const prompt = `Brainstorm 3 innovative AI project ideas for the ${industry} industry. Each idea should have a catchy title, a short description, and key technologies used. Format as JSON.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            tech: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["title", "description", "tech"]
        }
      }
    }
  });

  return JSON.parse(response.text);
};
