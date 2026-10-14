import { Button, Container, Stack, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <Stack spacing={3} sx={{ py: 8 }}>
        <Typography variant="h3">Welcome to ServiceFlow</Typography>

        <Typography color="text.secondary">
          Manage your service business in one place.
        </Typography>

        <Button variant="contained" sx={{ alignSelf: 'flex-start' }}>
          Get started
        </Button>
      </Stack>
    </Container>
  );
}
