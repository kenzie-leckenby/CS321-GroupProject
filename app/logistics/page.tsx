import * as React from 'react';
import { Container, Typography } from '@mui/material';

export default function LogisticsPage() {
  return (
    <React.Fragment>
      <Container disableGutters sx={{ marginTop: 16 }}>
        <Typography variant="h3" sx={{ marginBottom: 4 }}>
          Logistics
        </Typography>
        <Typography variant="h5">
          This is a placeholder for the logistics page. Future versions will show sales data, restock info, and item movement.
        </Typography>
      </Container>
    </React.Fragment>
  );
}