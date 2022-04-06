import "./App.css"

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


function App() {
  return (
    <div className="box-all">
      <div className="box-form">
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
              variant="standard"
              label="E-mail"
              type="email"
              autoComplete="current-email"
            />
            <TextField
              id="standard-password-input"
              variant="standard"
              label="Senha"
              type="password"
              autoComplete="current-password"
            /> 
            <TextField
              id="standard-password-input"
              variant="standard"
              label="Repita Senha"
              type="password"
              autoComplete="current-password"
            /> 
          </Box>
      </div>
    </div>
  );
}

export default App;
