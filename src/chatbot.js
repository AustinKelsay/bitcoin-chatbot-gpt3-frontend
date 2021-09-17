import React, {useEffect, useState} from 'react';
import ThemedWidget from "./themedWidget"
import axios from 'axios'

// all available props
const theme = {
  margin: '1% auto',
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#F2A900',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#F2A900',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const styles = {
  'margin': '1% auto',
  'margin-top': '2%'
}

const Chatbot = () => {
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
            validator: (value) => {
              postSteps(value)
                return true
            },
            trigger: 5
        },
        {
            id: 5,
            message: 'Let me answer that',
            end: true
        }
  ]);

  const postSteps = (chat) => {
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      };
    axios.post("https://bitcoin-chatbot-gpt3-1.koie11.repl.co/ask", {question: chat}, {headers})
    .then(response => {
      createStep(response.data)
    })
    .catch(error => {
        console.log(error)
    })
  }

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

    const newSteps = [...step_copy, bot_Step, following_user_step]
    setSteps(newSteps)
  }

  return (
    <div>
      <ThemedWidget steps={steps} />
    </div>
  )
}

export default Chatbot;