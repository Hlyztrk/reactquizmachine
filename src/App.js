import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import AppCard from './components/AppCard';

class App extends Component {
  render(){
  return (
    <div className="App">
        <AppCard></AppCard>
  

    </div>
  );
}
}

export default App;
