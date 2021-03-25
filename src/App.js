import React, {Component} from 'react'

class App extends Component{
  render(){
    return (
      <ul className="my-list">
        <li>{false ? 'Hello FJPang' : '技术杰'}</li>
        <li>Hello FJPang</li>
      </ul>
    )
  }
} 

export default App;