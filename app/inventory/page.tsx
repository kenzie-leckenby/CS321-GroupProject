import * as React from 'react';
import { Container, Typography } from '@mui/material';
import PageButton from '@/components/pageButton';
import EnhancedTable from '@/components/enhancedTable';

export default function Inventory() {
  return (
    <React.Fragment>
      <Container disableGutters sx={{ marginTop: 4}}>
        <EnhancedTable />
      </Container>
    </React.Fragment>
  );
}