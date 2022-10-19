import React, { Component } from 'react'
interface IState {}
interface IProps {
    name: string;
    age: number;
    title: string;
}

export default class CustomerClass extends Component <IProps, IState> {
   /*  constructor(props:IProps){
        super(props);
    } */

  render() {
    /* destructure props */
    const {name, age, title} = this.props
    return (
      <React.Fragment>
        <h3>Customer Class Component</h3>
        <ul className='list-group'>
            <li className='list-group-item'>Name: {name}</li>
            <li className='list-group-item'>Age: {age}</li>
            <li className='list-group-item'>Title: {title}</li>
        </ul>

      </React.Fragment>
    )
  }
}
