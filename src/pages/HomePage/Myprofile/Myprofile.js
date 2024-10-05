import React, { Component } from 'react'

export class Myprofile extends Component {

//js => jsx --->oneway binding
//js <=> jsx  ---->two way binding
    state ={
        profileName:'john',

    };

    handleProfileNameChange = (event)=>{
      console.log(event)
      
      // two way binding 

      this.setState({
       profileName:event.target.value,
      });

    }

  render() {
    return (
      <div>
        <h3>profile Info</h3>
        <p>Update profile info</p>
        {/*controlled component */}
        {/*an input form element whose value is controlled by react is called as controlled component */}
        <input type="text" value={this.state.profileName} onChange={this.handleProfileNameChange}/>
        <p>profile Name:{this.state.profileName}</p>

        </div>
    );
  }
}

export default Myprofile