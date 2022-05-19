import React, { Component } from 'react';
import '../App.css';

class Read extends Component {

  constructor(props){
    super(props);
    this.state={
    
      act: 0,
      index: '',
      datastored: []
    }
  } 

  // componentDidMount(){
  //   this.refs.name.focus();
  // } 

  Submit = (e) =>{
    e.preventDefault();
   

    let datastored = this.state.datastored;
    let name = this.refs.name.value;
    let number = this.refs.number.value;

    if(this.state.act === 0){   //new
      let data = {
        name, number
      }
      datastored.push(data);
    }else{                      //update
      let index = this.state.index;
      datastored[index].name = name;
      datastored[index].number = number;
    }    

    this.setState({
      datastored: datastored,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  delete = (i) => {
    let datastored = this.state.datastored;
    datastored.splice(i,1);
    this.setState({
      datastored: datastored
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  edit = (i) => {
    let data = this.state.datastored[i];
    this.refs.name.value = data.name;
    this.refs.number.value = data.number;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let datastored = this.state.datastored;
    return (
      <div className='form'>
        <h2>Signup Form</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="enter name" className="formField" />
          <input type="number" ref="number" placeholder=" enter phone number" className="formField"    />
          <button onClick={(e)=>this.Submit(e)} className="myButton">submit </button>
        </form>
        <div>
        <table className='table'>
          <tr>
            <th>S.No</th>
            <th> Name</th>
            <th>number</th>
            <th>Edit/Delete</th>
          </tr>
         
          {datastored.map((data, i) =>
           <tr key={i} className='myList'>
            
            <td>{i+1}</td>
            <td>{data.name}</td>
            <td>{data.number}</td>
            <td><button onClick={()=>this.delete(i)} className="myListButton">DELETE </button>
              <button onClick={()=>this.edit(i)} className="myListButton">EDIT </button></td>
              </tr>
            
          )}
       

        </table>
        </div>
      </div>
    );
  }
}

export default Read;