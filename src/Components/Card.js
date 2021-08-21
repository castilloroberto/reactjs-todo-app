import React,{Component} from "react";




export class Card extends Component{

    render(){
        return (
            
            <div style={{cursor:'pointer'}} className="card my-2">
                <div onClick={this.props.toggleComplete} className="card-header">
                    <h5  className="card-title">{this.props.todo.text}</h5>
                </div>
                <div  className="card-body" style={{display:'flex',justifyContent:'space-between'}}>
                    {
                        this.props.todo.completed && (
                                <li className="list-group-item">Termidado</li>
                        )
                    }
                
                    <button onClick={this.props.delete} className="btn btn-outline-danger">Eliminar</button>
                </div>
               
            </div>
        )
    }



} 