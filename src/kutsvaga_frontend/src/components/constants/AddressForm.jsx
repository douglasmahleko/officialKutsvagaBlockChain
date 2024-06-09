import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm({data, changeHandles, disabled}) {
  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="data" required>
          Rooms
        </FormLabel>
          <OutlinedInput
          id="data"
          name="data"
          type="number"
          disabled={disabled}
          autoComplete="data"
          value={data}
          onChange={(e) => changeHandles(e.target.value)}
          required />
      </FormGrid>
    </Grid>
  );
}
