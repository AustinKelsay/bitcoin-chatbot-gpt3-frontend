import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ThemedExample from './chatbot';
import './App.css';

function App() {
  const [botStatus, setBotStatus] = useState('Offline');
  const [steps, setSteps] = useState(
    [
        {
            id: '1',
            message: 'Hello World!',
            trigger: '2'
        },
        {
            id: '2',
            message: "I'm Bitcoin Chatbot",
            trigger: '3'
        },
        {
            id: '3',
            user: true,
            trigger: '4',
        },
        {
            id: '4',
            message: "I'm a little poopy actually",
            end: true
        }
]);
  useEffect(() => {
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      };
    axios.get("https://bitcoin-chatbot-gpt3-1.koie11.repl.co/", {headers})
    .then(response => {
        setBotStatus(response.data)
    })
    .catch(error => {
        console.log(error)
    })
})

 
return (
    <div className='App'>
        <header className='header'>
            <h1>Bitcoin Chatbot</h1>
            Status:
            <span>{botStatus}</span>
        </header>
        <ThemedExample steps={steps} />
    </div>
    )
}

export default App;
