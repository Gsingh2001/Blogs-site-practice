import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import whiteLogo from '/public/assets/svg/logo-color.svg';
import darkLogo from '/public/assets/svg/logo-color.svg';


const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.7,
};

export default function LogoCollection() {
  const theme = useTheme();
  const logo = theme.palette.mode === 'light' ? darkLogo : whiteLogo;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Trusted by the best companies
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        <Grid item>
          <img
            src={logo}
            alt="Company logo"
            style={logoStyle}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
