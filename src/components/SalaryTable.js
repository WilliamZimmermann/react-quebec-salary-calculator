import React from 'react';

export function SalaryTable(props) { 
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Taxa Provincial</td>
                        <td>Taxa Federal</td>
                        <td>Total de Taxas</td>
                        <td>Salário L. Anual</td>
                        <td>Salário L. Mensal</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{props.provincialTax} % => CAD 00000.00</td>
                    <td>{props.federalTax} % => CAD 00000.00</td>
                    <td>{props.totalTaxes} % => CAD 00000.00</td>
                    <td>CAD 0000.00</td>
                    <td>CAD 0000.00</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}