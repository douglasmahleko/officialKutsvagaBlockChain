import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm({data, changeHandles}) {
  return (
    <Grid container spacing={3}>
              <FormGrid item xs={12} >
              <FormLabel htmlFor="myTransAddress" required>
                My TransAddress
                </FormLabel>
                <OutlinedInput
                  id="myTransAddress"
                  type="myTransAddress"
                  name="myTransAddress"
                  required
                  value={data.myTransAddress}
                />
              </FormGrid>
            <FormGrid item xs={6}>
                <FormLabel htmlFor="myBalance" required>
                  My Balance
                </FormLabel>
                <OutlinedInput
                  id="myBalance"
                  type="myBalance"
                  name="myBalance"
                  value={data.myBalance}
                  required
                />
              </FormGrid>
              <FormGrid item xs={6}>
                <FormLabel htmlFor="amountInBitCoins" required>
                  Amount In Bitcoins
                </FormLabel>
                <OutlinedInput
                  id="amountInBitCoins"
                  type="amountInBitCoins"
                  name="amountInBitCoins"
                  required
                  value={data.amountInBitCoins}
                />
              </FormGrid>
              <FormGrid item xs={12} >
                <FormLabel htmlFor="receiverAddress" required>
                  Receiver Address
                </FormLabel>
                <OutlinedInput
                  id="receiverAddress"
                  type="receiverAddress"
                  name="receiverAddress"
                  required
                  value={data.receiverAddress}
                  onChange={(e) => changeHandles({...data, receiverAddress : e.target.value})}
                />
              </FormGrid>
              <FormGrid item xs={6}>
                <FormLabel htmlFor="receiverEmail" required>
                  Receiver Email
                </FormLabel>
                <OutlinedInput
                  id="receiverEmail"
                  type="email"
                  name="receiverEmail"
                  value={data.receiverEmail}
                  onChange={(e) => changeHandles({...data, receiverEmail : e.target.value})}
                  required
                />
              </FormGrid>
              <FormGrid item xs={6}>
                <FormLabel htmlFor="purpose" required>
                Purpose
                </FormLabel>
                <OutlinedInput
                  id="purpose"
                  type="purpose"
                  name="purpose"
                  required
                  value={data.purpose}
                  onChange={(e) =>changeHandles({...data, purpose : e.target.value})}
                />
              </FormGrid>
    </Grid>
  );
}
