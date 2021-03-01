import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Home from "./components/Home/Home"
import Chats from "./components/Chats/Chats"
import Profile from "./components/Profile/Profile"
import './Router.css'

export default function Router() {
    return(
        <BrowserRouter>
          <p><Link to='/profile'>PROFILE</Link></p>
           <p><Link to='/chats/id1'>CHATS</Link></p>
            <p><Link to='/'>HOME</Link></p>

            <Switch>
                <Route path='/profile'>
                    <Profile/>
                </Route>



                <Route exact path='/chats'>
                    <Chats/>
                </Route>


                <Route path='/chats/:chatId'>
                    <Chats/>
                </Route>

                <Route exact path='/'>
                    <Home/>
                </Route>
            </Switch>

        </BrowserRouter>
    )
}