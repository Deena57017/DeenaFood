import React ,{Component} from "react";
import FoodItem from './FoodItem';

export default class FoodList extends Component{
    render(){
        const {items,handleEdit,handleDelete}=this.props
        return(

            <ul>
                
                    {items.map(item=>{
                        return(
                            <FoodItem key={item.id} name={item.name}/>
                        )
                    })}
                
            </ul>
            
        )
    }

}