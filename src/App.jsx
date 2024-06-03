import { useEffect } from "react"

function App() {
  const telegram = window.Telegram.WebApp;

  useEffect(() => {
    if (telegram) {
      telegram.ready();
    }
  }, [telegram]);
  
  const handleClick = () => {
    telegram.MainButton.text = "button clicked- connected";
    telegram.MainButton.show();
  }
  console.log("telegram" ,telegram)
  return (
    <>
     <h1>working</h1>
     <button onClick={handleClick}>start app</button>
    </>
  )
}

export default App
