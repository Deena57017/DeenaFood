import React ,{Component} from "react";
import FoodItem from './FoodItem';

export default class FoodList extends Component{
    render(){
        const {items,handleEdit,handleDelete}=this.props
        return(

            <ul className="list-group my-5">
                
                    {items.map(item=>{
                        return(
                            <FoodItem key={item.id} name={item.name}/>
                        )
                    })}
                
            </ul>
            
        )
    }

}