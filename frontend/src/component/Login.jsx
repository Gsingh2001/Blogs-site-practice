import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [formError, setFormError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate fields
        if (!email) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if (!password) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        // If any field is empty, prevent form submission and show error message
        if (!email || !password) {
            setFormError(true);
            return;
        }

        // If all fields are filled, continue with your form submission logic (e.g., API call)
        console.log({
            email: email,
            password: password,
        });
    };

    return (
        <Box
            sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
                {formError && (
                    <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                        Please fill out all required fields.
                    </Typography>
                )}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(false); 
                        setFormError(false); 
                    }}
                    error={emailError}
                    helperText={emailError && "Email is required"}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(false); // Reset error state on change
                        setFormError(false); // Reset form level error
                    }}
                    error={passwordError}
                    helperText={passwordError && "Password is required"}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link component={RouterLink} to="/home/forgot-password" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link component={RouterLink} to="/home/signup" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
