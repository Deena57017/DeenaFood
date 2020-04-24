import React ,{Component} from 'react';
import FoodInput from './components/FoodInput'
import FoodList from './components/FoodList'
import uuid from "uuid";
class App extends Component{
    state={
          items:[],
          id:uuid(),
          item:"",
          editItem:false
    };
  handleSubmit=(e)=>{
    e.preventDefault();
    const newItem={
      id:this.state.id,
      name: this.state.item
    }
    const updateItems=[...this.state.items,newItem]
    this.setState({
      items:updateItems,
      item:"",
      id:uuid(),
      editItem:false

    })
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
          editItem={this.state.editItem}
          />

        </div>
        <FoodList items={this.state.items} handleDele={this.handleDele} handleEdit={this.handleEdit}/>
        
     </div>
    );
  }
}

export default App;