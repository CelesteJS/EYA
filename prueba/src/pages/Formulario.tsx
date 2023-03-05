import { useState } from "react";

interface TableState {
    columns: string[];
    rows: any[][];
}

export function MyTable() {
    const [tableState, setTableState] = useState<TableState>({
        columns: ['Name', 'Age', 'Gender'],
        rows: [
            ['John', 30, 'Male'],
            ['Sarah', 25, 'Female'],
            ['Mike', 40, 'Male'],
        ],
    });
    function handleDeleteRow(rowIndex: number) {
        const shouldDelete = window.confirm('Estas seguro que deseas borrar este registro?');
        if (shouldDelete) {
            // Mensaje de confirmacion
            setTableState((prevState) => {
                const newRows = [...prevState.rows];
                newRows.splice(rowIndex, 1);
                return {
                    ...prevState,
                    rows: newRows,
                    // Explicacion de la Funcion handleDeleteRow
                    // Se utiliza el método splice para eliminar la fila correspondiente de la matriz de filas
                    // Luego, se actualiza el estado de la tabla con la nueva matriz.
                };
            });
        }
    }
    return (
        <table>
            <thead>
                <tr>
                    {tableState.columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableState.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                        <td>
                            <button onClick={() => handleDeleteRow(rowIndex)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}