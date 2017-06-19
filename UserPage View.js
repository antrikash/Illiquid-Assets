import React, { Component } from 'react';


class AddProject extends Component {
constructor(){
    super();
    this.state ={
        newProject: {},
        formSub : false,
        data: ''
    }
    this.updateState = this.updateState.bind(this);
    this.renderSubmit = this.renderSubmit.bind(this);
    this.renderSell = this.renderSell.bind(this);

    } 
   
    updateState(e) {
      this.setState({data: e.target.value});
   }
   renderSubmit() {
      console.log()
      if(this.state.formSub)
      {return (<div >You have assigned with {this.state.data} CT Tokens</div>);}
      else return false;
   }
   renderSell(){
       console.log()
       if(this.state.formSub)
       {return (<div > You will be linked with sell asset page</div>);}
       else return false;
}
   
  render() {
    
     return(
      <div>
      <div>
      <h3><strong> Your Profile Details </strong> </h3>
      </div>
      <form>
 

        <div>
        <label>User Name :</label><output  /><br />
        <label>UID : </label> <br />
        <label> Mobile no: </label> <br />
        <label> PAN ID:</label><br />
       
          
       <br /><br /><br />
       
        </div>
        <div>
        <button color="red" shadowSize={2}>
  Buy
</button>
       <button color="blue" shadowSize={2}>
  Sell
</button>
         </div>
         
      </form>
        {this.renderSubmit()}
        {this.renderSell()}
      

         </div>
    );
  }
} 


export default AddProject;
