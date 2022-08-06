import { React, useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


const columns = [
    {
        field: 'date',
        headerName: 'Date',
        width: 200,
    },
    {
        field: 'type',
        headerName: 'Type',
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

const DataTable = () => {

    const [tableData, setTableData] = useState([])

    const fetchData = () => {

        const url = 'http://localhost:8080/api/v1/post/list';

        axios({
            method: 'post',
            url: url,
            data: {
                "startingDate": "2020-03-12",
                "endingDate": "2022-08-05"
            }
        }).then(res => {
            console.log(res.data.content)
            setTableData(res.data.content)
        });

    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={tableData}
                columns={columns}
                pageSize={10}
            />
        </div>
    )

}

export default DataTable;