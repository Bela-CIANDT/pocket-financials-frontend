import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown() {

  return (
    <select name="types" id="types">
    <option value="All">All types</option>
    <option value="Income">Income</option>
    <option value="Outcome">Outcome</option>
    <option value="Investment">Investment</option>
  </select>
  );
}
