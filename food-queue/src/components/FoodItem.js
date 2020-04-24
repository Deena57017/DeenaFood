import React ,{Component} from "react";

export default class FoodItem extends Component{
    render(){
        const {name}=this.props
        return(
        <div>{name}</div>
        )
    }
    
}