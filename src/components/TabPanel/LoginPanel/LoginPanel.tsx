import React, { SyntheticEvent, useState } from "react";
// Components
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginPanel = (props: LoginProps) => {
  const navigate = useNavigate();
  const { setIsAuth } = props;
 	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	
  const handleLogin = (event: SyntheticEvent) => {
		if (username && password) {
      setIsAuth(true);
      navigate('/dashboard');
			console.log('Username: ', username);
			console.log('Password: ', password);
			setUsername('');
			setPassword('');
		}
		event.preventDefault();
	};

  return (
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
  );
};

export default LoginPanel;
