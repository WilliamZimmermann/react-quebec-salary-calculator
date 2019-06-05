import React from 'react';

export function SalaryTable(props) {
    let taxes = props.taxes;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Taxa Provincial</td>
                        <td>Taxa Federal</td>
                        <td>Total de Taxas</td>
                        <td>Salário Real Anual</td>
                        <td>Salário Real Mensal</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{taxes.provincialTax}% => CAD {taxes.provincialTaxAmount}</td>
                    <td>{taxes.federalTax}% => CAD {taxes.federalTaxAmount}</td>
                    <td>{taxes.totalTaxes}% => CAD {taxes.totalAmountOfTaxes}</td>
                    <td>CAD {taxes.annualSalaryWithTaxes}</td>
                    <td>CAD {taxes.monthlySalaryWithTaxes}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}