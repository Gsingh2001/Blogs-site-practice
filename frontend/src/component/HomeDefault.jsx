import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const HomeDefault = () => {
    return (
        <Box
            sx={{
               
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: 'calc(100vh - 64px)', // Adjust as per your layout
            }}
        >
            <Typography variant="h3" gutterBottom>
                Welcome to Our Blogging Platform
            </Typography>
            <Typography variant="body1" sx={{ mt: 4 }}>
                Blogging is a powerful way to express your thoughts, share knowledge,
                and connect with a global audience. Whether you're a seasoned writer or
                just starting out, our platform offers the tools and community support
                you need to thrive.
            </Typography>
            <Box sx={{ mt: 4 }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <Button
                            component={RouterLink}
                            to="/home/signin"
                            variant="contained"
                            color="primary"
                        >
                            Sign In
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            component={RouterLink}
                            to="/home/signup"
                            variant="outlined"
                            color="primary"
                        >
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default HomeDefault;
