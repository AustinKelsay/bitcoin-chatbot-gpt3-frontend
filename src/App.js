import React, {useEffect, useState} from "react"
import axios from "axios"

const App = () => {
    const [botStatus, setBotStatus] = useState("")
    useEffect(() => {
        axios.get("https://bitcoin-chatbot-gpt3-1.koie11.repl.co/")
        .then(response => {
            console.log(response)
            setBotStatus(response)
        })
        .catch(error => {
            console.log(error)
        })
    })
    return <div>{botStatus}</div>
}

export default App