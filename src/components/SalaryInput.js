import React from 'react';

export class SalaryInput extends React.Component { 
    render(){
        return (
            <div>
                <label>
                    Salário anual:
                    <input onKeyUp={this.props.onAddTask} autoFocus type='text' />
                </label>
            </div>
        );
    }
}