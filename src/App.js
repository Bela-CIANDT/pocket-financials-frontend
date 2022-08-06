import './App.css';
import './styles/tablestyles.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Appbar from './components/Appbar';
import Dropdown from './components/Dropdown';
import Table from './components/Table';


function App() {

  const [data, setData] = useState([]);
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
      setData(res.data.content)
    });

  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="App">
      <Appbar/>
      <div class="table-wrapper">
      <Dropdown/>
      </div>
      <div class="table-wrapper">
      <Table/>
      </div>
    </div>
  );
}

export default App;
