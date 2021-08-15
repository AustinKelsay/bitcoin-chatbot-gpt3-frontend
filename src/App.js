import React, {useEffect, useState} from "react"
import axios from "axios"

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
        <div>
            <h1>{botStatus}</h1>
        </div>
        )
}

export default App