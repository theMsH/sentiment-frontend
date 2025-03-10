const BASE_URL = "https://backend-cc-cc-sentiment-backend.2.rahtiapp.fi"

const DEFAULT_ERROR_RESPONSE: SentimentResponse = {
    input_data: "Something went wrong, please try again!",
    sentiment: "error"
}

export type SentimentResponse = {
  input_data: string,
  sentiment: string
}

export async function getSentiment(message: string) {
    try {
        let response = await fetch(BASE_URL + "/sentiment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ input_data: message })
        })

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        return data
    }
    catch (e) {
        console.error(e)
        return DEFAULT_ERROR_RESPONSE;
    }
}
