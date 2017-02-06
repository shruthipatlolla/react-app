
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import './index.css';
import App from './App.js'
import Main from './components/main-component.jsx';
import LikeComponent from './components/like-component.jsx';
import LoginControl from './components/login-component.jsx';
import Toggle from './components/toggle-component.jsx';
import Clock from './components/clock-component.jsx';

import Login from './components/login.jsx';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />,
  document.getElementById('root')
);


class Team extends React.Component {
	render() {
      return (
         <div>
            <ol>
			   <li>Shruthi Patlolla</li>
               <li>Vinod Paka</li>
               <li>Manish Guptha</li>
            </ol>
         </div>
      )
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
				<li>We are located in Hyderabad and Pune</li>
			</ol>
			</div>
		)
	}
	
}

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {Main}>
	  
         <Route path = "team" component = {Team} />
		 <Route path = "projects" component = {Projects} />
         <Route path = "contact" component = {Contact} />
	  </Route>
	  <Route path = "/" component = {LikeComponent}>
      </Route>
   </Router>
	
), document.getElementById('root'))