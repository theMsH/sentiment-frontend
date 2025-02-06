import './App.css'

function App() {
  return (
    <>
      <h1>Sentiment Analysis bot</h1>
      <div className="card">
        <form onSubmit={()=>{console.log()}}>
          <input type="text" 
            required
            max="250" 
            placeholder="Write something for me to analyse!"
          ></input>
        </form>
        <div className="spacer-10"/>
        <button type="submit">
          Get sentiment
        </button>
      </div>
    </>
  )
}

export default App
