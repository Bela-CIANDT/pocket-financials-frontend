import './App.css';
import './styles/tablestyles.css';
import './styles/datePicker.css'

import { useState, useEffect } from 'react';
import axios from 'axios';

import Appbar from './components/Appbar';
import Dropdown from './components/Dropdown';
import Table from './components/Table';

function App() {

  const [data, setData] = useState([]);
  const [beginDate, setBeginDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [type, setType] = useState('');
  const fetchData = () => {

    const url = 'http://localhost:8080/api/v1/post/list';

    axios({
      method: 'post',
      url: url,
      data: {
        "startingDate": beginDate,
        "endingDate": endDate
      }
    }).then(res => {
      console.log(res.data.content)
      setData(res.data.content)
    });

  }

  useEffect(() => {
    fetchData()
  }, [beginDate, endDate]);


  return (
    <div className="App">
      <Appbar/>
      <div class="filter-wrapper">
      <Dropdown/>
      <input type="date" value={beginDate} onChange={value => {setBeginDate(value.target.value)}}/>
      <input type="date" value={endDate} onChange={value => {setEndDate(value.target.value)}}/>
      </div>
      <div class="table-wrapper">
      <Table data={data}/>
      </div>
    </div>
  );
}

export default App;
