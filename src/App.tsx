import './App.css'

function App() {
  return (
    <>
      <h1>Sentiment Analysis bot</h1>
      <div className="card">
        <form onSubmit={()=>{console.log()}}>
          <input required max="250" type="text" placeholder="Write something for me to analyse!"></input>
          <div className="spacer-10"/>
          <button type="submit">Get sentiment</button>
        </form>
      </div>
    </>
  )
}

export default App
