import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SalaryInput } from './components/SalaryInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Cálculo do Salário na Província de Québec</h3>
        <p>
          Olá professor. Como moro na província de Québec, no Canadá, tomei a liberdade de fazer o cálculo do salário baseado nas leis daqui, e com os impostos daqui.
        </p>
        <SalaryInput></SalaryInput>
      </header>
    </div>
  );
}

export default App;
