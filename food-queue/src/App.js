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
    this.setState({
      items:[]
    })
  }
  handleDelete=(id)=>{
  
    const filterItems=this.state.items.filter(item=>item.id!==id)
    
    this.setState({
      items:filterItems,
     
    })
  }
  handleEdit=(id)=>{
    const filterItems=this.state.items.filter(item=>item.id!==id)
    const selectItem=this.state.items.find(item=>item.id==id)
    this.setState({
      items:filterItems,
      id:id,
      editItem:true
    })
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
        <FoodList 
        items={this.state.items} 
        handleDele={this.handleDele} 
        handleEdit={this.handleEdit}
        clearList
        
        />
        
     </div>
    );
  }
}

export default App;