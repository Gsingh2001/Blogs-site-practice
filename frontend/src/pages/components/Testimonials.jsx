import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const userTestimonials = [
  {
    avatar: <Avatar alt="Amit Sharma" src="/static/images/avatar/1.jpg" />,
    name: 'Amit Sharma',
    occupation: 'Travel Blogger',
    testimonial:
      "PeakVibe.in has been my go-to resource for travel inspiration. The articles are insightful, and the detailed itineraries have helped me plan my trips across India effortlessly. Highly recommend it to all travel enthusiasts!",
  },
  {
    avatar: <Avatar alt="Neha Singh" src="/static/images/avatar/2.jpg" />,
    name: 'Neha Singh',
    occupation: 'Freelance Photographer',
    testimonial:
      "The stunning photography tips and travel guides on PeakVibe.in have significantly improved my travel photography skills. The community is very supportive and the blog is a treasure trove of hidden gems.",
  },
  {
    avatar: <Avatar alt="Rohit Verma" src="/static/images/avatar/3.jpg" />,
    name: 'Rohit Verma',
    occupation: 'Adventure Enthusiast',
    testimonial:
      "I love the adventure travel stories shared on PeakVibe.in. They have inspired me to explore offbeat destinations and try new activities. The blog's focus on sustainable travel is commendable.",
  },
  {
    avatar: <Avatar alt="Priya Mehta" src="/static/images/avatar/4.jpg" />,
    name: 'Priya Mehta',
    occupation: 'Travel Writer',
    testimonial:
      "The cultural insights and travel hacks on PeakVibe.in are invaluable. They have made my travel experiences richer and more enjoyable. It's a must-visit site for anyone who loves to travel.",
  },
  {
    avatar: <Avatar alt="Kunal Patel" src="/static/images/avatar/5.jpg" />,
    name: 'Kunal Patel',
    occupation: 'Digital Nomad',
    testimonial:
      "PeakVibe.in offers the best travel resources for digital nomads like me. The articles on working remotely while traveling have been extremely helpful. Keep up the great work!",
  },
  {
    avatar: <Avatar alt="Sanya Kapoor" src="/static/images/avatar/6.jpg" />,
    name: 'Sanya Kapoor',
    occupation: 'Student',
    testimonial:
      "As a student with a limited budget, I appreciate the budget travel tips on PeakVibe.in. They have enabled me to travel more and explore new places without breaking the bank.",
  },
];

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonials
        </Typography>
        <Typography variant="body1" color="text.secondary">
          See what our readers love about our travel blog. Discover how we excel in providing travel inspiration, tips, and guides to make your journeys unforgettable.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
