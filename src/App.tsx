import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
import EmployeeClass from './components/EmployeeClass';

function App() {
  return (
    <React.Fragment> 
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-success">App Component</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem et, iure doloribus adipisci ipsum sequi recusandae ex nisi necessitatibus corrupti odit neque accusantium eos deserunt beatae totam! Autem, tenetur!</p>
            <button className="btn btn-success btn-sm">
              <i className='fa fa-book mx-1'></i>Read More</button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <Employee />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <EmployeeClass />
            </div>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default App;
