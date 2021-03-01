import React, {useCallback} from 'react'
import './MessagesList.css'

export default function MessagesList({messages}) {
    const renderMessage = useCallback((message, index) => (
        <div
            key={index}
            className='chatList'>
            <span>{message.author}:</span>
            <span>{message.text}</span>
        </div>
    ), [])
    return messages.map(renderMessage)
}