import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '채경민',
  'birthday': '940224',
  'gender': '남자',
  'job': '직장인'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '980625',
  'gender': '여자',
  'job': '프로게이머'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '나윤환',
  'birthday': '990921',
  'gender': '여자',
  'job': '공무원'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}
      </div>
    );
  }
}

export default App;
