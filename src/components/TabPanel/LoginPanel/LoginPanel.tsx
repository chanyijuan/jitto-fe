import React, { SyntheticEvent, useState } from "react";
// Components
import { TextField } from "@mui/material";

const LoginPanel = () => {
 	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = (event: SyntheticEvent) => {
		if (username && password) {
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
			onSubmit={handleSubmit}
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
