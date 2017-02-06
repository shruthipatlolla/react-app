import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';

class LoginD extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         username: 'User Name',
		 password: 'Password'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState(e) {
      this.setState({username: e.target.value});
	}

   render() {
      return (
         <div class="container">
			<label><b>Username : </b></label>
			<input type="text" value = {this.state.username} 
			onChange = {this.updateState} />

			<label><b>Password : </b></label>
			<input type="text" value = {this.state.password} 
			/>

			<button type="submit">Login</button>
		</div>

      );
   }
}




export default class Login extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Login</h3>
              <hr />
            </div>
          </div>
          <LoginForm />
        </div>
      </DocumentTitle>
    );
  }
}
