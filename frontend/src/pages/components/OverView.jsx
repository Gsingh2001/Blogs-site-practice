import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const features = [
  {
    icon: <AutoStoriesIcon fontSize="large" color="primary" />,
    title: 'Quality Content',
    description: 'We provide well-researched and engaging articles on various topics that interest you.',
  },
  {
    icon: <PeopleIcon fontSize="large" color="primary" />,
    title: 'Community Driven',
    description: 'Join a community of like-minded individuals who share your passions and interests.',
  },
  {
    icon: <LocalOfferIcon fontSize="large" color="primary" />,
    title: 'Exclusive Offers',
    description: 'Get access to exclusive offers and deals curated just for our readers.',
  },
];

export default function OverView() {
  return (
    <Box
      id="Overview"
      sx={(theme) => ({
        width: '100%',
        backgroundColor:
          theme.palette.mode === 'light'
            ? alpha(theme.palette.primary.light, 0.1)
            : alpha(theme.palette.primary.dark, 0.8),
        py: { xs: 8, sm: 12 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 2, sm: 4 },
          marginTop: "50px"
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Welcome to PeakVibe
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ maxWidth: 800 }}>
          PeakVibe is your ultimate destination for the latest blogs, insights, and updates on a wide range of topics.
          Whether you're looking for the latest trends, expert advice, or just something interesting to read, we've got you covered.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {feature.icon}
                <Typography component="h3" variant="h6" sx={{ mt: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
