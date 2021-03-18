import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EmailList from './EmailList';
import Mail from './Mail';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="appBody">
        <Sidebar />
        <Switch>
        <Route path="/mail">
            <Mail />
          </Route>
          <Route path = "/">
            <EmailList />
          </Route>
        </Switch>
      </div>
      <div>
      {sendMessageIsOpen && <SendMail />}
      </div>
    </div>
    </Router>
  );
}

export default App;
