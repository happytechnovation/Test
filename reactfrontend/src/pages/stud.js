import axios from 'axios';
import React , {Component} from 'react';

class stud extends Component{

    state = {
        name: '',
        email: '',
    }

    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveStudent = async (e) =>{
        e.preventDefault();

        const res= await axios.post('http://127.0.0.1:8000/api/add-student',this.state)
        if(res.data.status === 200){
            console.log(res.data.message);
            this.setState({
                name: '',
                email: '',
            });
        }
    }
      render(){
        return(
          <form onSubmit={this.saveStudent}>
           
            <div>
              <label htmlFor='name'>Name</label>
              <input
                name='name' 
                placeholder='Name'
                value={this.state.name}
                onChange={this.handleInput}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input 
                name='email'
                placeholder='Email' 
                value = {this.state.email}
                onChange={this.handleInput}
              />
            </div>
            <div>
              <button>Create Account</button>
            </div>
          </form>
        )
      }
}

export default stud;