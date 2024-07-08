import { TextField } from '@mui/material'
import React from 'react'

const Input1 = (props) => {
    const { children, onClick, label, rows, name } = props
    return (
        <>
            <TextField
                fullWidth
                    id="name"
                name={name}
                label={label}
                margin="normal"
                required
                className='TextField'
                rows={rows}
                onClick={onClick}
             props={props} >
              {children}
            </TextField>

        </>
    )
}

export default Input1
