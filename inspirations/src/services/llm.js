// src/services/llm.js

const LLM_API_BASE_URL = 'https://n8n-web-dev.apolus.ai/webhook/support-agents/basic-llm-call';

/**
 * Performs a basic, generic call to a Large Language Model (LLM) webhook.
 * This service is responsible ONLY for making the request and returning the raw JSON response.
 * Any processing of the response should be handled by the component that calls this service.
 *
 * @param {string} prompt The prompt to send to the LLM.
 * @returns {Promise<any>} A promise that resolves with the raw JSON response from the API.
 * @throws {Error} If the API call fails.
 */
export const basicLlmCall = async (prompt) => {
  try {
    const response = await fetch(LLM_API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error("LLM API Error Response:", errorBody);
        throw new Error(`API error! status: ${response.status}`);
    }

    return await response.json();

  } catch (error)
   {
    console.error("Error in basic LLM call:", error);
    throw error;
  }
};
