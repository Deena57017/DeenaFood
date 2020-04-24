import React ,{Component} from 'react';
import FoodInput from './components/FoodInput'
import FoodList from './components/FoodList'
import uuid from "uuid";
class App extends Component{
    state={
          items:[{id:1,name:"กะเพราไก่"},{id:2,name:"ผัดคะน้า"}],
          id:uuid(),
          items:"",
          editItem:false
    };
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Submit Data");
  }
  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    })
  }
  clearList=()=>{
    console.log("Clear Data");
  }
  handleDele=(e)=>{
    console.log("Remove Item");
  }
  handleEdit=(e)=>{
    console.log("Edit Item");
  }

  render(){
  
    return(
      <div className="container">
          <h2 align="center">Food Queue Application</h2>
        <div className="row">
          <FoodInput 
          items={this.state.item}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleItem={this.handleItem}
          />

        </div>
        <FoodList/>
        
     </div>
    );
  }
}

export default App;