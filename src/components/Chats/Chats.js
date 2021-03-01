import React, {useState, useCallback, useEffect, useMemo} from 'react'
import '../../App.css';
import '../MessagesList/MessagesList.css'
import MessagesList from "../MessagesList/MessagesList";
import Input from '../Input/Input'
import ChatList from "../ChatList/ChatList";
import Header from '../Header/Header'
import  {AUTHORS} from '../../utils/constants'
import  {usePrev} from '../../utils/hooks'
// import Profile from'../Profile/Profile'
import { useParams, useRouteMatch } from "react-router-dom";

export default function Chats() {
    const params = useParams();

    console.log(params)

    const [chats, setChats] = useState([
        {id: "id1", name:'Chat 1',
            messageList:[{author: AUTHORS.ME, text: 'message 1'}]},

        {id: "id2", name:'Chat 2',
            messageList:[{author:AUTHORS.ME, text:'message 2'}]},
        {id: "id3", name:'Chat 3',
            messageList:[{author:AUTHORS.ME, text:'message 3'},
                         {author:AUTHORS.BOT, text:'How you doing'}
            ]},
    ]);

    const selectedChat = useMemo(() =>
        chats.find(chat => chat.id === params.chatId),[params, chats])


    const selectedChatIndex = useMemo(() =>
        chats.findIndex(chat => chat.id === params.chatId),[params, chats])

  const [messages, setMessages] = useState([
      {author:AUTHORS.ME, text:'message 1'},
      {author:AUTHORS.ME, text:'message 2'},
      {author:AUTHORS.ME, text:'message 3'},

  ]);

  const prevMessages = usePrev(messages);

  const addMessage = useCallback
  ((text, author) => {
      const newChats = [...chats];
      newChats[selectedChatIndex] = {
          ...selectedChat,
          messageList: [...selectedChat.messageList, {text, author}],
      }
      setChats(newChats);
  },
      [chats, selectedChat, selectedChatIndex]
  );

  useEffect(() => {
      let timeout;
      if (prevMessages?.length < messages.length &&
          messages[messages.length - 1]?.author !== AUTHORS.BOT) {
          timeout = setTimeout(() => addMessage('Hello', AUTHORS.BOT), 1000)

      }
      return () => clearTimeout(timeout)
  }, [messages, addMessage, prevMessages]);


 if (!params.chatId || !selectedChat) {
     return(
         <>
             <span>Please, select a chat!</span>
             <ChatList chats={chats} chatId={null} />
         </>
     )
 }

  return (
      <div className='layout'>
          <Header/>

          <div className='side-bar'>
          <ChatList chats={chats} chatId={params.chatId}/>
          </div>

          <MessagesList messages={selectedChat?.messageList || []} />
          <Input onAddMessage={addMessage}/>
      </div>
   )
}



