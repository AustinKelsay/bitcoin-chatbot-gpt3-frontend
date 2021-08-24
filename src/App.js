import React, {useEffect, useState} from "react"
import axios from "axios"
import Chat, { Message } from 'react-simple-chat';
import 'react-simple-chat/src/components/index.css';
import './index.css'

const App = () => {
    const [botStatus, setBotStatus] = useState("Bot offline")
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: 'Hello my friend!',
            createdAt: '2021-07-21 12:09:12', // optional
            user: {
                id: 2,
                avatar: 'https://link-to-avatar/avatar.jpg' // optional
            }
        }
    ]);

    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      };
    useEffect(() => {
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
            <div className='body'>
                <Chat
                title="Jane Doe"
                user={{ id: 1 }}
                messages={messages}
                onSend={message => setMessages([...messages, message])}
                />
            </div>
        </div>
        )
}

export default App