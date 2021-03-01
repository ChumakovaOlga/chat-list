import React from 'react'
import './ChatList.css'
import { Link } from "react-router-dom";

export  default function ChatList({chats, chatId}) {
    return (
         chats.map((chat, index) =>
         <div
            key={index}
            className='chatList'
         >
               <Link to={`/chats/${chat.id}`}>
             <b style={{color: chat.id === chatId ?'red': 'grey'}}>


             {chat.name}</b>
             </Link>
         </div>
         )
    )
 }





