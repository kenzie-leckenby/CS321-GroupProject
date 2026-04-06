import * as React from 'react';
import { Container, Typography } from '@mui/material';
import PageButton from '@/components/pageButton';

export default function Home() {
  return (
    <React.Fragment>
      <Container disableGutters sx={{ marginTop: 16}}>
        <Typography
          variant="h3"
          sx={{ marginBottom: 4}}
        >
          Inventory Management App
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginBottom: 4}}
        >
          An app aimed at streamlining inventory management for store owners and staff members alike
        </Typography>

        <Container
            disableGutters
            sx={{ display: 'flex', justifyContent: 'flex-start' }}
        >
            <PageButton href="/inventory" label="To Inventory Page" />
        </Container>
      </Container>
    </React.Fragment>
  );
}