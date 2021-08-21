import React,{Component} from 'react'
import { TodoForm } from './TodoForm'
import {Card} from './Card'

export class TodoList extends Component{


    state = {
        todos: [],
        filter:'all'
    }
    
    addTodo = (todo)=>{
        
        this.setState({
            todos:[todo,...this.state.todos] 
        })
        
        localStorage.setItem('todos',JSON.stringify(this.state.todos))
    }
    deleteTodo = ( id ) => {
        this.setState({
            todos: this.state.todos.filter( todo => todo.id !== id)
        })
    }
    toggleComplete = (id)=>{
        this.setState({
            todos:this.state.todos.map( todo => {
                if (todo.id === id) {
                    
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }

                } else {
                    return todo
                }
            })
        })
    }
    render(){
        let todos = []
        if (this.state.filter === 'all') {
            todos = this.state.todos
        }
        if (this.state.filter === 'active') {
            todos = this.state.todos.filter( todo => !todo.completed )
        }
        if (this.state.filter === 'completed') {
            todos = this.state.todos.filter( todo => todo.completed )
        }

        return(
            <div>
                <h4>Agregar Tareas</h4>
                <div className="row">
                    <TodoForm onSubmit={this.addTodo}/>


                    
                    <div style={{padding:10,width:400,overflowY:'scroll',height:500}}>
                        
                        {
                            todos.map( todo => (
                                <Card delete={()=> this.deleteTodo(todo.id)}
                                    toggleComplete={()=> this.toggleComplete(todo.id)} 
                                    key={todo.id} 
                                    todo={todo}/>
                            ))
                        }

                    </div>
                {/* {JSON.stringify(this.state.todos)} */}
                </div>
                <div className="my-2">
                    Activas:{this.state.todos.filter( todo => !todo.completed ).length}
                </div>
                <div className="my-2">
                    <button onClick={ ()=> this.setState({filter:'all'}) } className="btn btn-outline-success mx-2">Todas</button>
                    <button onClick={ ()=> this.setState({filter:'active'}) } className="btn btn-outline-success mx-2">Activas</button>
                    <button onClick={ ()=> this.setState({filter:'completed'}) } className="btn btn-outline-success mx-2">Completadas</button>
                </div>
            </div>    
        )
    }


}