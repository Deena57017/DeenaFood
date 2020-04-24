import React ,{Component} from "react";

export default class FoodItem extends Component{
    render(){
        const {name}=this.props
        return(
        <li className="list-group-item">{name}</li>
        )
    }
    
}