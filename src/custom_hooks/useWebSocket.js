const { useState, useEffect } = require('react')
const Stomp = require('stompjs')

const useWebSocket = (topicAddress, onMessage) => {
    const[client, setClient] = useState(null)
    
    const socket = new SockJS('/socket')
    setClient = Stomp.overWS(socket)

    useEffect((topicAddress, onMessage) => {
        const connectToClientAndSubscribe = (topicAddress, onMessage) => {
            client.connect({}, function(frame) {
            console.log(frame)
            client.subscribe(topicAddress, function(message) {
                onMessage()
            })
            })
        }
        connectToClientAndSubscribe(topicAddress, onMessage)
    }, [])

    return client
}