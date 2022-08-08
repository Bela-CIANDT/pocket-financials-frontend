import { React, useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';

function getTypeName(params) {
    return `${params.row.type.name || ''}`;
}

const columns = [
    {
        field: 'date',
        headerName: 'Date',
        width: 200,
    },
    {
        field: 'type',
        headerName: 'Type',
        valueGetter: getTypeName,
        width: 200,

    },
    {
        field: 'description',
        headerName: 'Description',
        width: 600,
    },
    {
        field: 'value',
        headerName: 'Value',
        width: 300,
    },
    {
        field: "action",
        headerName: "Actions",
        width: 90,
        renderCell: (params) => {
           <button>Click</button>
        }
      }
]

const DataTable = (props) => {

    return (
        <div style={{ height: 700, width: '100%' }}>
            {props.data==null ? 'No data is found': <DataGrid
                rows={props.data}
                columns={columns}
                pageSize={10}
            />}
        </div>
    )

}

export default DataTable;