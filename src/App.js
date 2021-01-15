import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Product from './components/product'

class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {msg : 'Hi, There!'} 
    this.handleClick = this.handleClick.bind(this) 
   
  }

  componentDidMount(){
  
  }

  handleClick(e){ 
    console.log(e)
    // Changing state 
    this.setState({msg : 'Welcome to the React world!'}) 
  } 

  
  render(){
    const numbers = [1, 2, 3, 4, 5];

    function ListItem(props) {
      // Correct! There is no need to specify the key here:
      return <li>{props.value}</li>;
    }
    
    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()} value={number} />
      );
      return (
        <ul>
          {listItems}
        </ul>
      );
    }
   
 
    function formatName(user) {
      
      return user.firstName + ' ' + user.lastName;
    }

    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };
    
    const element = (
      <h1>
        Hello, {formatName(user)}!
        
        <button onClick={() => this.handleClick( 'hiiii')}> 
          Click here! 
        </button> 
      </h1>
    );
    const show = false
    return(
      <div>
        <Product />
        <NumberList numbers={numbers} />
        {element}
        <p>{this.state.msg}</p>
        {!show &&
        <h2>
          You have messages.
        </h2>
        
      }
      </div>
    )
  }
};

export default App;
