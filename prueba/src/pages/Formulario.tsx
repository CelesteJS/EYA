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
        setTableState((prevState) => {
            const newRows = [...prevState.rows];
            newRows.splice(rowIndex, 1);
            return {
                ...prevState,
                rows: newRows,
            };
        });
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

// import { useState } from "react";

// interface TableState {
//     columns: string[];
//     rows: any[][];
// }

// export function MyTable() {
//     const [tableState, setTableState] = useState<TableState>({
//         columns: ['Name', 'Age', 'Gender'],
//         rows: [
//             ['John', 30, 'Male'],
//             ['Sarah', 25, 'Female'],
//             ['Mike', 40, 'Male'],
//         ],
//     });
//     function handleDeleteColumn(columnIndex: number) {
//         setTableState((prevState) => {
//             const newColumns = [...prevState.columns];
//             newColumns.splice(columnIndex, 1);
//             const newRows = prevState.rows.map((row) => {
//                 const newRow = [...row];
//                 newRow.splice(columnIndex, 1);
//                 return newRow;
//             });
//             return {
//                 columns: newColumns,
//                 rows: newRows,
//             };
//         });
//     }

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     {tableState.columns.map((column, index) => (
//                         <th key={index}>
//                             {column}
//                             <button onClick={() => handleDeleteColumn(index)}>Delete</button>
//                         </th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {tableState.rows.map((row, index) => (
//                     <tr key={index}>
//                         {row.map((cell, index) => (
//                             <td key={index}>{cell}</td>
//                         ))}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// }