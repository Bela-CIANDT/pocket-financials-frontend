import { React, useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';

function getTypeName(params) {
    return `${params.row.type.name || ''}`;
}

function getUserName(params) {
    return `${params.row.user.name || ''}`;
}

const columns = [
    {
        field: 'date',
        headerName: 'Date',
        width: 200,
        headerClassName: 'app-theme--header',
    },
    {
        field: 'type',
        headerName: 'Type',
        valueGetter: getTypeName,
        width: 200,
        headerClassName: 'app-theme--header',
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 300,
        headerClassName: 'app-theme--header',
    },
    {
        field: 'value',
        headerName: 'Value',
        valueFormatter: (params) => {
            if (params.value == null) {
              return '';
            }

            const valueFormatted = Number(params.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            return `${valueFormatted}`;
          },
        width: 300,
        headerClassName: 'app-theme--header',

    },
    {
        field: 'user',
        headerName: 'User',
        valueGetter: getUserName,
        width: 200,
        headerClassName: 'app-theme--header',
    },
]

const DataTable = (props) => {

    return (
        <div style={{ height: 700, width: '100%'}}>
            {props.data==null ? 'There are no entries to show': <DataGrid
                rows={props.data}
                columns={columns}
                pageSize={10}
                sx={{
                    boxShadow: 2,
                    '& .app-theme--header': {
                        backgroundColor: '#003256',
                        color: '#FFFFFF'
                      },
                }}
            />}
        </div>
    )

}

export default DataTable;