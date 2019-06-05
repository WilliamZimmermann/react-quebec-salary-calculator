import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SalaryInput } from './components/SalaryInput';
import { SalaryTable } from './components/SalaryTable';

class App extends React.Component{

  constructor(){
    // Call the father
    super();
  }

  calculate(event){
    console.log("Calcula");
  }

  /**
   * Return a provincial tax
   * @param {number} value 
   */
  provincialTax(value){
    if(value <= 15269){
      return 0;
    }
    if(value > 15269 && value<=43790){
      return 15.0;
    }
    if(value > 43790 && value<=87575){
      return 20.0;
    }
    if(value>87575 && value<=106555){
      return 24.0;
    }
    if(value>106555){
      return 25.75;
    }
  }

  /**
   * Return a federal tax
   * @param {number} value 
   */
  federalTax(value){
    if(value <= 12069){
      return 0;
    }
    if(value > 12069 && value<=47630){
      return 12.525;
    }
    if(value > 47630 && value<=95259){
      return 17.1175;
    }
    if(value>95259 && value<=147667){
      return 21.71;
    }
    if(value>147667 && value<=210371){
      return 24.215;
    }
    if(value>210371){
      return 27.555;
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h3>Cálculo do Salário na Província de Québec</h3>
          <p>
            Olá professor. Como moro na província de Québec, no Canadá, tomei a liberdade de fazer o cálculo do salário baseado nas leis daqui, e com os impostos daqui.
          </p>
          <SalaryInput onCalculate={(event)=>this.calculate(event)}></SalaryInput>
          <SalaryTable></SalaryTable>
        </header>
      </div>
    );
  }
}

export default App;
