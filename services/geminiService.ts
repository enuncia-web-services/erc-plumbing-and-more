import { GoogleGenAI } from "@google/genai";
import { CONTACT_INFO, SERVICES } from "../constants";

// Initialize Gemini Client
// CRITICAL: The API key is assumed to be available in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the helpful, friendly, and professional AI assistant for "ERC Plumbing and More", a family-owned plumbing business in Houston, Texas with 8 years of experience.

Business Details:
- Name: ERC Plumbing and More
- Address: ${CONTACT_INFO.address}
- Phone: ${CONTACT_INFO.phone}
- Email: ${CONTACT_INFO.email}
- Hours: Mon-Fri 24 hours, Sat 24 hours, Sun Closed.
- Experience: 8 years.
- Languages: English and Spanish (You must answer in the language the user speaks).

Services:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Key Values:
- Family-owned
- Affordable and high-quality
- Customer-first approach
- Reliable solutions for routine and emergency repairs

Goal:
Answer customer questions about services, hours, and location. Encourage them to call ${CONTACT_INFO.phone} or book an appointment via the "Book Now" button on the website for urgent issues. Do not give specific price quotes, but say we offer affordable and transparent pricing.

Tone:
Professional, trustworthy, warm, and helpful.
`;

export const getChatResponse = async (history: { role: 'user' | 'model', text: string }[], message: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        {
          role: 'user',
          parts: [{ text: message }]
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I'm having trouble connecting right now. Please call us at (281) 948-8121.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I am currently experiencing technical difficulties. Please call our office directly at (281) 948-8121 for immediate assistance.";
  }
};