import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FormPropsTextFields() {
    return(


<div className='teste'>
    <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': {m: 0.2, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
        <TextField
                id="standard-password-input" 
                variant='standard'  
                label="E-mail"
                type="email"
                autoComplete="current-email"
        />  
        <TextField
                id="standard-password-input"
                label="Senha"
                type="password"
                autoComplete="current-password"
                variant="standard"
          />
          <TextField
                id="standard-password-input"
                label="Confirme sua Senha"
                type="password"
                autoComplete="current-password"
                variant="standard"
          />
    </Box>
</div>
      )
}

export default FormPropsTextFields