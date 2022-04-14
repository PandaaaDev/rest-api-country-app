import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
const Input = ({ onSearch }) => {
	return (
		<Box
			component='form'
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete='off'>
			<TextField id='outlined-basic' label='Seach Country' variant='outlined' onChange={onSearch} />
		</Box>
	)
}

export default Input
