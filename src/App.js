import React, {useEffect, useState} from "react"
import axios from "axios"
import './index.css'

const App = () => {
    const [botStatus, setBotStatus] = useState("")
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      };


    useEffect(() => {
        axios.get("https://bitcoin-chatbot-gpt3-1.koie11.repl.co/", {headers})
        .then(response => {
            console.log(response)
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
        </div>
        )
}

export default App