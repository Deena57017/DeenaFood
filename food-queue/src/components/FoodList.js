import React ,{Component} from "react";
import FoodItem from './FoodItem';

export default class FoodList extends Component{
    render(){
        const {clearList,items,handleEdit,handleDelete}=this.props
        return(

            <ul className="list-group my-3">
                <h3>รายการอาหาร</h3>
                
                    {items.map(item=>{
                        return(
                            <FoodItem key={item.id} 
                            name={item.name} 
                            handleDelete={()=>handleDelete(item.id)}
                            handleEdit={()=>handleEdit(item.id)}
                            />
                        )
                    })}
                    <button className="btn btn-danger font-weight-bold"onClick={clearList}>Clear Food</button>
                
            </ul>
            
        )
    }

}