import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const blogPosts = [
  {
    title: 'Blog Post One',
    date: 'January 1, 2023',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?technology',
  },
  {
    title: 'Blog Post Two',
    date: 'February 1, 2023',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?nature',
  },
  {
    title: 'Blog Post Three',
    date: 'March 1, 2023',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?city',
  },
];

export default function Blogs() {
  return (
    <Container
      id="Blogs"
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
          Our Blogs
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Stay updated with the latest news and articles.
        </Typography>
      </Box>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {blogPosts.map((post, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                sx={{ height: 160 }}
                image={post.image}
                alt={`Image for ${post.title}`}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography component="h3" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="body1" paragraph>
                  {post.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component="a"
                  href="#"
                  sx={{ ml: 'auto' }}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
