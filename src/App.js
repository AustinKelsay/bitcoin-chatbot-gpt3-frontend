import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ThemedExample from './chatbot';
import './App.css';
import StepCreator from './stepCreator';

function App() {
  const [botStatus, setBotStatus] = useState('Offline');
  const [userMessage, setUserMessage] = useState('');
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
            trigger: 4
        },
        {
            id: 4,
            user: true,
            trigger: 5
        },
        {
            id: 5,
            message: ({ previousValue, steps }) => {
                setUserMessage(previousValue);
                console.log(previousValue);
                console.log(steps);
            },
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

const postSteps = () => {
    const promptFromSteps = steps.map(step => step.message);
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      };
    axios.post("https://bitcoin-chatbot-gpt3-1.koie11.repl.co/ask", {promptFromSteps}, {headers})
    .then(response => {
        console.log(response)
        })
    .catch(error => {
        console.log(error)
    })
}

// Step creation:
// If type is user, then create user step with a step afterwords that passes steps into postSteps
// If type is bot, then create bot step by invoking stepCreator from the response of postSteps and then create an empty user step right after

const stepCreator = (newStepText, user=false) => {
    // Edit the previous last step to trigger the new step we will create
    let step_copy = steps
    let last_step = step_copy.pop()
    last_step = {
        id: last_step.id,
        message: last_step.message,
        trigger: last_step.id + 1
    }

    // Create the new step depending on if it is the users turn or not
    let newStep = {}
    if (user === true) {
        newStep = {
            id: last_step.id + 1,
            user: true,
            trigger: last_step.id + 2,
        }
        let getUserMessage = {
            id: last_step.id + 2,
            message: ({}),
            end: true
        }
    }
    else {
        newStep = {
            id: last_step.id + 1,
            message: newStepText,
            end: true
        }
    }
    // Add the last step that we edited to the step_copy array
    step_copy.push(last_step)
    // Add the new step that we created to the step_copy array
    step_copy.push(newStep)
    // Add the step_copy array to the state
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
                <p>Bitcoin Chatbot is a question & answer AI bot powered by GPT-3 and trained on an open source dataset of established Bitcoin knowledge</p>
                <p>Here you can see the exact materials that Bitcoin Chatbot was trained on along with the source code</p>
            </div>
        </header>
        <ThemedExample steps={steps} />
    </div>
    )
}

export default App;
