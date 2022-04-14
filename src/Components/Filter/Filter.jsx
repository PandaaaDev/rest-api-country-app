import React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
const Filter = ({onFilter, region}) => {
	

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-label'>Select region</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={region}
					label='select region'
					onChange={onFilter}>
					<MenuItem value={"All"}>All</MenuItem>
					<MenuItem value={'Asia'}>Asia</MenuItem>
					<MenuItem value={'Africa'}>Africa</MenuItem>
					<MenuItem value={'Americas'}>Americas</MenuItem>
					<MenuItem value={'Europe'}>Europe</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

export default Filter
