import React from 'react'
import './Chatbot.css'
const Chatbot = () => {
    return (
        <>
            <div className="chati">
            <iframe
    allow="microphone;"
    width="350"
    height="430" className="chatbot" title="hehe" 
    src="https://console.dialogflow.com/api-client/demo/embedded/120bfce3-0279-4731-b4cf-8f8f1cee0eef">
                </iframe>
                </div>
        </>
    )
}

export default Chatbot
