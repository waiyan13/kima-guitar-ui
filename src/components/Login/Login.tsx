import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import { AuthProvider, useAuth } from "@/contexts/AuthContext";

import styles from "./login.module.scss";

const Login = () => {
  return (
    <Container maxWidth={false}>
      <Box className={styles.formWrapper} component="div">
        <Box className={styles.formLogin} component="form">
          <Paper>
            <TextField
              id="username"
              fullWidth={true}
              helperText=" "
              label="Username"
              name="username"
              variant="outlined"
            />
            <TextField
              id="password"
              fullWidth={true}
              helperText=" "
              label="Password"
              name="password"
              variant="outlined"
            />
            <Button fullWidth={true} type="submit" variant="contained">Login</Button>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
