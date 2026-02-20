
import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI SDK using only the environment variable as required.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHealthAssistantResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are an AI Health Assistant for "Universal Diagnostics", a premium medical imaging and laboratory center whose motto is "Personal Relationship with Medical Excellence". 
        Your goal is to answer questions about diagnostic tests (X-rays, Ultrasounds, Blood Tests) and provide general health preparation advice. 
        IMPORTANT: 
        1. Always state you are an AI assistant and not a doctor.
        2. Advise the user to consult their physician for definitive medical diagnosis.
        3. Be professional, empathetic, and maintain the "Universal" brand tone (authoritative yet personal).
        4. Focus on explaining what specific tests are for and how to prepare.
        Keep answers concise and in the dark blue/light blue theme tone.`,
        temperature: 0.7,
      },
    });
    // The .text property directly returns the generated string.
    return response.text || "I'm sorry, I couldn't process that request right now. Please call Universal reception at 1-800-UNIVERSAL.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI assistant is temporarily unavailable. Please contact Universal support at 1-800-UNIVERSAL.";
  }
};
