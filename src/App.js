import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ThemedExample from './chatbot';
import './App.css';
import StepCreator from './stepCreator';

function App() {
  const [botStatus, setBotStatus] = useState('Offline');
  const [chatLog, setChatLog] = useState('');
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
                setTimeout(() => {
                    postSteps(previousValue)
                }, 1000)
                // Set chatlog from previous value
                // pass prev value into func that will remove this step and create a new bot step followed by a uesr step to respond
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

const postSteps = (chat) => {
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      };
    console.log(chat)
    axios.post("https://bitcoin-chatbot-gpt3-1.koie11.repl.co/ask", {question: chat}, {headers})
    .then(response => {
        if (response.data != null) {
            createStep(response.data)
            }
        })
    .catch(error => {
        console.log(error)
    })
}

// Step creation:
// If type is user, then create user step with a step afterwords that passes steps into postSteps
// If type is bot, then create bot step by invoking stepCreator from the response of postSteps and then invoke stepCreator again with user true

const createStep = (newStepText) => {
    let step_copy = steps
    let last_step = step_copy.pop()
    const bot_Step = {
        id: last_step.id + 1,
        message: newStepText,
        trigger: last_step.id + 2
    }
    const following_user_step = {
        id: last_step.id + 2,
        user: true,
        end: true
    }
    setSteps([...steps, bot_Step, following_user_step])

    return 
}
 
return (
    <div className='App'>
        <header className='header'>
            <h1>Bitcoin Chatbot</h1>
            Status:
            <span style={botStatus === 'Offline' ? {color: "red"} : {color: "green"}}>{botStatus}</span>
            <div className="intro">
                <p>Bitcoin Chatbot is a question & answer AI bot powered by GPT-3 and trained on an open source dataset of established Bitcoin knowledge</p>
                <p>Here you can see the exact data that Bitcoin Chatbot was trained on along with the source code</p>
                <section className="header-section">
                <div class="content__item">
					<button class="button button--pandora"><span>code</span></button>
				</div>
                <div class="content__item">
					<button class="button button--pandora"><span>dataset</span></button>
				</div>
                </section>
            </div>
        </header>
        <ThemedExample steps={steps} />
    </div>
    )
}

export default App;
