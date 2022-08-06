import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown() {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">Type</InputLabel>
        <Select
          labelId="select-label"
          id="select-label"
          value={type}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={1}>All postings</MenuItem>
          <MenuItem value={2}>Income</MenuItem>
          <MenuItem value={3}>Outcome</MenuItem>
          <MenuItem value={4}>Investment</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
