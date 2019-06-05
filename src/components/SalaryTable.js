import React from 'react';

export class SalaryTable extends React.Component { 
    render(){
        return (
            <div>
                <table>
                    <tr>
                        <td>Taxa Provincial</td>
                        <td>Taxa Federal</td>
                        <td>Total de Taxas</td>
                        <td>Salário L. Anual</td>
                        <td>Salário L. Mensal</td>
                    </tr>
                    <tr>
                        <td>10% => CAD 00000.00</td>
                        <td>10% => CAD 00000.00</td>
                        <td>10% => CAD 00000.00</td>
                        <td>CAD 00000.00</td>
                    </tr>
                </table>
            </div>
        );
    }
}