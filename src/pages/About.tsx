import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Paper,
  Typography,
} from '@mui/material';
import nature from '../assets/nature.webp';

export default function About() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        About page
      </Typography>

      <Alert severity="info" sx={{ mb: 2 }}>
        I&apos;m testing popular components of MUI
      </Alert>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Do I like MUI?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! I did&apos;t know that it&apos;s such a cool library!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Card sx={{ maxWidth: 345, mt: 2 }}>
        <CardMedia sx={{ height: 140 }} image={nature} title="Demo image" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Card Example
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cards are used to group related content and actions.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Typography variant="h6" sx={{ mt: 3 }}>
        Tags:
      </Typography>
      <Chip label="React" color="primary" sx={{ mr: 1 }} />
      <Chip label="MUI" color="secondary" sx={{ mr: 1 }} />
      <Chip label="Redux" color="success" />
    </Paper>
  );
}
