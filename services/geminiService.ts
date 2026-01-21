import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini client
// Safely check if process is defined to avoid crashes in browser environments
const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
const ai = new GoogleGenAI({ apiKey });

export const generateReviewResponse = async (
  customerReview: string,
  tone: 'professional' | 'grateful' | 'apologetic'
): Promise<string> => {
  try {
    const modelId = 'gemini-3-flash-preview';
    
    const systemInstruction = `You are a world-class reputation manager for a high-end restaurant. 
    Your goal is to draft responses to customer reviews.
    
    Guidelines:
    - Be concise, polite, and professional.
    - Address the customer by name if possible (or infer it).
    - If the review is positive, thank them warmly.
    - If the review is negative, apologize sincerely and offer a way to rectify it offline, but defend the brand subtly if needed.
    - Use a ${tone} tone.
    - Output ONLY the response text, no preamble.`;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: `Customer Review: "${customerReview}"\n\nDraft a response:`,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 }, // Speed is priority for this UI demo
        temperature: 0.7,
      },
    });

    return response.text || "No response generated. Please try again.";
  } catch (error) {
    console.error("Error generating review response:", error);
    return "Lo siento, hubo un error al conectar con el asistente de IA. Por favor verifica tu conexión.";
  }
};