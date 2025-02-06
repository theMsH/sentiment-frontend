import { useState } from 'react'
import './App.css'
import { getRandomSentiment, SentimentResponse } from './services/sentiment'

function App() {
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<SentimentResponse>({"sentiment": ""})


  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setLoading(true)
    try {
      const result = await getRandomSentiment()
      if (result) {
        setResult(result)
      }
    }
    catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e)  // Tähän tulee backendin errorhandler joskus
      }
      else console.error(e)
    }
    setLoading(false)
  }

  return (
    <>
      <p>{result.sentiment}</p>
      <form onSubmit={onSubmit}>
        <input required
          max="250"
          type="text"
          placeholder="Write something for me to analyse!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="spacer-10" />
        {loading
          ? <button disabled>Get sentiment!</button>
          : <button type="submit">Get sentiment!</button>
        }
      </form>
    </>
  )
}

export default App
