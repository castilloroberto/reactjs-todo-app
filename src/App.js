import React,{Component} from 'react'  
import './App.css';
import { TodoList } from './Components/TodoList';

class App extends Component {
  
  
  render(){
    
    return (
      <div>

        <nav style={{padding:10,backgroundColor:'#000000',color:'white'}}>
            <h2>Todo App</h2>
        </nav>

        <div className="container mt-4">
          <TodoList/>
        </div>

      </div>
    )
  }
  
}

export default App;
