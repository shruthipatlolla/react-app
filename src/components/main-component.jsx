import React from 'react';
import { Link, activeStyle } from 'react-router';
import '.././index.css';
import LikeComponent from './like-component.jsx';
class Main extends React.Component {
   render() {
      return (
         <div>
			<h1>Radiant Team </h1>
            <ul>
               <li><Link to="/team" activeStyle={{ color: 'black' }}><b>The Team</b></Link></li>
			   <li><Link to="/projects" activeStyle={{ color: 'black' }}><b>The Products</b></Link></li>
               <li><Link to="/contact" activeStyle={{ color: 'black' }}><b>Contacts</b></Link></li>
            </ul>
			
			{this.props.children}
			<LikeComponent />
         </div>
      )
   }
}

export default Main;
