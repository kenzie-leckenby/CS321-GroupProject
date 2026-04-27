import * as React from 'react';
import { Container, Typography } from '@mui/material';

export default function AlertsPage() {
  return (
    <React.Fragment>
      <Container disableGutters sx={{ marginTop: 16 }}>
        <Typography variant="h3" sx={{ marginBottom: 4 }}>
          Alerts
        </Typography>
        <Typography variant="h5">
          This is a placeholder for the alerts page. Future versions will show low stock alerts and notifications here.
        </Typography>
      </Container>
    </React.Fragment>
  );
}