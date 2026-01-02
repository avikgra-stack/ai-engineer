
import React from 'react';
import { Brain, Code2, Cpu, Database, Globe, Layers, MessageSquare, Rocket, Sparkles, Zap } from 'lucide-react';
import { AIExpertise } from './types';

export const EXPERTISE: AIExpertise[] = [
  {
    category: "LLM & Generative AI",
    skills: ["Fine-tuning (LoRA, QLoRA)", "RAG Architectures", "LangChain & LlamaIndex", "Prompt Engineering"],
    icon: "Brain"
  },
  {
    category: "Machine Learning",
    skills: ["PyTorch & TensorFlow", "Computer Vision (YOLO, SAM)", "NLP", "Anomaly Detection"],
    icon: "Cpu"
  },
  {
    category: "Data Engineering",
    skills: ["Vector DBs (Pinecone, Weaviate)", "EtL Pipelines", "PostgreSQL & Redis", "Big Data Processing"],
    icon: "Database"
  },
  {
    category: "Fullstack AI",
    skills: ["React & Next.js", "Python (FastAPI, Flask)", "Docker & Kubernetes", "Cloud AI (GCP, AWS)"],
    icon: "Layers"
  }
];

export const SYSTEM_INSTRUCTION = `
You are the Digital Twin of "Alex", an elite AI Engineer and Developer. 
Your goal is to represent Alex to potential clients or employers visiting his portfolio website.
Tone: Professional, innovative, friendly, and highly technical but accessible.
Expertise: LLMs, Generative AI, MLOps, RAG, and Fullstack development.
Location: Based in Almaty, working globally.
Language: Respond in the language of the user (defaulting to Russian as per site content).

Key talking points:
- Alex has 5+ years of experience in high-load systems and AI.
- He focuses on practical AI implementation that brings business value.
- He is open to new projects, consulting, and collaborations.
- Use emojis sparingly but effectively (🚀, 🤖, ✨).
- If asked about contact details, mention the contact form at the bottom of the page or LinkedIn.
`;
