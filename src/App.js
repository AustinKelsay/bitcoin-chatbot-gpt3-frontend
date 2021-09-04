import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ThemedExample from './chatbot';
import './App.css';

function App() {
  const [botStatus, setBotStatus] = useState('Offline');
  const [stepId, setStepId] = useState(3);
  const [steps, setSteps] = useState(
    [
        {
            id: 1,
            message: 'Hello World!',
            trigger: 2
        },
        {
            id: 2,
            message: "I'm Bitcoin Chatbot",
            trigger: 3
        },
        {
            id: 3,
            message: "What can I answer for you?",
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
});

const dod = () => {
    let step_copy = steps
    step_copy.pop()
    let new_step = {
        id: 3,
        message: "This is step 3",
        end: true
    }
    step_copy.push(new_step)
    setSteps(step_copy)
    console.log(steps)
}
 
return (
    <div className='App'>
        <header className='header'>
            <h1>Bitcoin Chatbot</h1>
            Status:
            <span style={botStatus === 'Offline' ? {color: "red"} : {color: "green"}}>{botStatus}</span>
            <div className="intro">
                <p>Bitcoin Chatbot is a natural language processing bot powered by GPT-3 and trained on an open source dataset of established Bitcoin knowledge</p>
                <p>Here you can see the exact materials that Bitcoin Chatbot was trained on along with the source code</p>
                <button onClick={()=> {dod()}}>Reset</button>
            </div>
        </header>
        <ThemedExample steps={steps} />
    </div>
    )
}

export default App;
