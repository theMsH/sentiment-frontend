import { useState } from 'react'
import './App.css'
import { getSentiment, SentimentResponse } from './services/sentiment'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import CircularProgress from '@mui/material/CircularProgress';


function App() {
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<SentimentResponse>({} as SentimentResponse)


  const handleSentimentIcon = () => {
    switch (result.sentiment) {
      case "positive":
        return <SentimentSatisfiedAltIcon/>
      case "neutral":
        return <SentimentNeutralIcon/>
      case "negative":
        return <SentimentVeryDissatisfiedIcon/>
      case "error":
        return <MoodBadIcon/>
      default:
        return <SentimentSatisfiedIcon/>
    }
  }
  const handleSentimentMessage = () => {
    if (result.sentiment == "error") {
      return <h2>Oops!</h2>
    }
    else if (result.sentiment) {
      return <h2>Your message is {result.sentiment}!</h2>
    }
    else return <h2>Waiting for message</h2>
  }


  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setLoading(true)
    const result = await getSentiment(message)
    setResult(result)
    setMessage("")
    setLoading(false)
  }


  return (
    <>
      <section>
        <div className="result-icon">{handleSentimentIcon()}</div>
        {handleSentimentMessage()}
        {result.input_data ? <p>"{result.input_data}"</p> : <p></p>}
      </section>
      <div style={{margin: 20}}></div>
      <section>
        <form className="message-form" onSubmit={onSubmit}>
          <textarea required
            disabled={loading}
            rows={3}
            name="message"
            maxLength={250}
            placeholder="Write something for me to analyse!"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value); 
              setResult({} as SentimentResponse)
            }}
          />
          <div style={{margin: 10}}></div>
          <div>{
            loading
            ? <button disabled><CircularProgress size="1.9em" thickness={3}/></button>
            : <button type="submit">Get sentiment!</button>
          }</div>
        </form>
      </section>
    </>
  )
}

export default App
