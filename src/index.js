import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import './index.css';
import logo from './images/logo.svg';

import Main from './components/main-component.jsx';
import Team from './components/add-component.jsx';
import RedditListComponent from './components/reddit-list.jsx'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          The aim of this POC is to demonstrate how to build a simple application with react JS components.
        </p>
      </div>
    );
  }
}


class Projects extends React.Component {
	render() {
	   return (
		<div>
			<ol>
				<li><a href="https://wiki.dealertrack.com/display/DT20/NADA+COMMERCIAL+VEHICLES">Bookout</a></li>
				<li><a href="https://wiki.dealertrack.com/display/DT20/LBO+2.0+Architecture+-+DRAFT">Lender Bookout</a></li>
			</ol>
		</div>
	   )
	}
}

class Contact extends React.Component {
	render() {
		return(
			<div>
			<ol>
				<li>For product questions/concerns please contact <b>Sean Taylor</b></li>
				<li>We are available at eng.f&i.radiant@dealertrack.com </li>
			</ol>
			</div>
		)
	}
	
}

ReactDOM.render(
	<div>
    <Main />
    <Router history={browserHistory}>
		<Route path = "/" component = {App}/>
		 <Route path = "/team" component = {Team } />
		 <Route path = "/projects" component = {Projects} />
         <Route path = "/contact" component = {Contact} />
    </Router>
  </div>,
  document.getElementById('root'))