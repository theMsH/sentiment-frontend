import { delay } from "../tools/delay";


export type SentimentResponse = {
    sentiment: string
}

// Fake backend fetch
export async function getRandomSentiment() {
    try {
        let response: SentimentResponse = { "sentiment": "negative" };

        switch(Math.floor(Math.random() * 3)) {  // Random integer 0, 1, 2
            case 0:
                response = { "sentiment": "positive" }
                break
            case 1:
                response = { "sentiment": "neutral" }
                break
            default:
                response = { "sentiment": "negative" }
        }
        await delay(1500) // Fake response delay
        return response
    }
    catch {
        throw new Error("500") // Fake status
    }
}