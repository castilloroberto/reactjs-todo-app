import React,{Component} from 'react'
import shortid from "shortid";

export class TodoForm extends Component{
    state = {
        text: ''
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        
        event.preventDefault()
        // enviar la tarea
        this.props.onSubmit({
            id:shortid.generate(),
            text:this.state.text,
            completed:false
        })
        this.setState({
            text:''
        })
    }


    render(){
        
        return(
            <form
                style={{width:'fit-content'}} 
                onSubmit={this.handleSubmit}>
                
                <label className="form-label">Tarea</label>
                <input value={this.state.text}
                    name="text"
                    className="form-control"
                    onChange={this.handleChange} 
                    placeholder="...Por hacer"/>  
                <button
                    onClick={this.handleSubmit} 
                    className="btn btn-primary mt-2">
                    Agregar
                </button>
            </form>
        )
    }


}