import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function AboutUs() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        About Us
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body1" paragraph>
          Welcome to [Your Company Name], where we are passionate about [describe your company's mission or primary focus]. Founded in [year], we have been dedicated to [briefly explain the purpose or mission of your company].
        </Typography>
        <Typography variant="body1" paragraph>
          At [Your Company Name], our mission is to [state your mission statement or primary goal]. We strive to [explain what your company aims to achieve and its impact].
        </Typography>
        <Typography variant="body1" paragraph>
          [Your Company Name] specializes in [describe your main products or services]. Whether it's [specific services or products], we are committed to delivering [mention your unique selling points or value propositions].
        </Typography>
        <Typography variant="body1" paragraph>
          Our team comprises [number] dedicated individuals who bring [briefly mention key skills or expertise areas]. With a shared passion for [mention the core values or principles your team upholds], we work tirelessly to [explain how your team contributes to achieving your mission].
        </Typography>
        <Typography variant="body1" paragraph>
          - **Expertise:** [Highlight specific expertise or qualifications].
          - **Innovation:** [Mention any innovative approaches or technologies].
          - **Customer-Centric:** [Explain how you prioritize customer satisfaction].
          - **Community Impact:** [Discuss any community initiatives or social responsibility efforts].
        </Typography>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          We'd love to hear from you! Feel free to reach out to us via:
        </Typography>
        <ul>
          <li>Email: [Your Email Address]</li>
          <li>Phone: [Your Phone Number]</li>
          <li>Address: [Your Physical Address]</li>
        </ul>
      </Box>
    </Container>
  );
}
