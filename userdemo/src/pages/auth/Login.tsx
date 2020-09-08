import React from 'react';

import Container from '@material-ui/core/Container';
import { Typography, Box, Button, TextField } from '@material-ui/core';
const Login = () => {
    const validateForm = () => {

    }
    return (
        <Container component="main" maxWidth="xs">
            <form style={{ borderWidth: 1, borderColor: "#c3c3c3" }}>
                <Typography component="h1" variant="h5">
                    Email Information to start session
                </Typography>
                <TextField margin="normal" fullWidth id="outlined-basic" label="User Name" variant="outlined" />
                <TextField margin="normal" fullWidth id="outlined-basic" label="Email" variant="outlined" />
                <Button
                    onClick={validateForm}
                    type="button"
                    fullWidth
                    variant="contained"
                    color="default"> Login and View Stories</Button>
            </form>

        </Container>
    )
};
export default Login;