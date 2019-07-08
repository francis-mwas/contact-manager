import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import { Provider } from './context';
import AddContacts from './components/contacts/AddContacts';
import EditContacts from './components/contacts/EditContacts';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';




class App extends Component{

  render(){
    return (
      <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
          <Switch>
              <Route exact path='/' component={ Contacts } />
              <Route exact path='/contacts/add' component={ AddContacts} />
              <Route exact path='/contacts/edit/:id' component={ EditContacts } />
              <Route exact path='/about' component={ About } />
              <Route component={ NotFound } />
          </Switch>
        </div>
        </div>
        </Router>
      </Provider>
    );
}
}

export default App;
