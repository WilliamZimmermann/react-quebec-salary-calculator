import React from 'react';

export class SalaryInput extends React.Component { 
    render(){
        return (
            <div>
                <label>
                    Salário anual:
                    <input onKeyUp={this.props.onCalculate} autoFocus type='text' />
                </label>
            </div>
        );
    }
}