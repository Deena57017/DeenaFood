import React ,{Component} from "react";
import FoodItem from './FoodItem';

export default class FoodList extends Component{
    render(){
        const {items,handleEdit,handleDelete}=this.props
        return(

            <ul className="list-group my-3">
                <h3>รายการอาหาร</h3>
                
                    {items.map(item=>{
                        return(
                            <FoodItem key={item.id} name={item.name} 
                            handleDelete={()=>handleDelete(item.id)}
                            handleDelete={()=>handleEdit(item.id)}
                            />
                        )
                    })}
                
            </ul>
            
        )
    }

}