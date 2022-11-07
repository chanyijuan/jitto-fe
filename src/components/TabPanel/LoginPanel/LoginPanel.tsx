import React, { SyntheticEvent, useState } from "react";
// Components
import { Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './styles.css';


interface LoginProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  setUser: React.Dispatch<React.SetStateAction<string>>
}

const LoginPanel = (props: LoginProps) => {
  const navigate = useNavigate();
  const { setIsAuth, setUser } = props;
 	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	
  const handleLogin = (event: SyntheticEvent) => {
		if (username && password) {
      setIsAuth(true);
      setUser(username);
      navigate('/dashboard');
			console.log('Username: ', username);
			console.log('Password: ', password);
			setUsername('');
			setPassword('');
		}
		event.preventDefault();
	};

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
      <Grid item className="loginPanel">
        <div className="loginHeader">login</div>
        <form
          style={{
            display: "flex",
            flexDirection: "column"
          }}
          noValidate
          autoComplete='off'
          onSubmit={handleLogin}
        >
          <TextField
            required
            id="username"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            variant="outlined"
            margin="normal"
            value={username}
            // fullWidth
          />
          <TextField
            required
            id="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            // fullWidth
          />
          <input type="submit" hidden />
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginPanel;
