import React from 'react';

class Team extends React.Component {
	constructor(props) {
		super(props);
		this.addMember = this.addMember.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {members:["Shruthi","Vinod","Manish"]};
	}
	
	handleChange(event) {
		this.setState({memName: event.target.value});
	}
	
	addMember() {
		var members = this.state.members
		var memName = this.state.memName
		if (memName){
			members.push(memName)
			this.setState({members:members, memName:""});
			}
		else {
			alert("Plese enter the Name")
		}
	}
  
	render() {
		var members = this.state.members
		var listItems = members.map((members) =>
				<li>{members}</li>
				);
      return (
         <div>
            <ol>
			   {listItems},			   
			   <li><input value={this.state.memName} onChange={this.handleChange}/>
			   <button onClick={this.addMember}>Add Member</button></li>
			   
            </ol>
         </div>
      )
   }
}

export default Team;