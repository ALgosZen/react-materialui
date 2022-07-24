import React from 'react'
import { Stack, Button } from "@mui/material";


export const Muibutton = () => {
  return (
    <Stack spacing={4} direction='row'>
        <Stack spacing={2} direction='row' >
            <Button variant='text' href='http://www.google.com'>text</Button>
            <Button variant='contained'>contained</Button>
            <Button variant='outlined'>outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='outlined' color='secondary'>secondary</Button>
            <Button variant='contained' color='error'>error</Button>
            <Button variant='text' color='warning'>text warning</Button>
            <Button variant='contained' color='info'>contained info</Button>
            <Button variant='text' color='success'>text success</Button>

        </Stack>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='outlined' size='small' color='secondary'>secondary</Button>
            <Button variant='outlined' size='medium' color='secondary'>secondary</Button>
            <Button variant='outlined' size='large' color='secondary'>secondary</Button>

        </Stack>

    </Stack>

  )
}

