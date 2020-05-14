import React, {Component} from 'react';
import './App.css';
import BarComponent from './Componentes/BarComponent'
//import { render } from '@testing-library/react';

class App extends Component{
  render(){
    return(
      <div>
        <BarComponent/>
      </div>
    )
  }
}

export default App;
