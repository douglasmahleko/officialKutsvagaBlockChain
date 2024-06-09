import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import PhoneInput from 'react-phone-input-2'
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import SelectBar from '../constants/selectBar';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm({data, changeHandles, disabled}) {

  const handleChange = (value) => {
    changeHandles({...data, contact : value})
  }
  const handleSelectTitle = (event) => {
    changeHandles({...data, title : event.target.value})
    // setTitle(event.target.value);
  };
  const handleSelectGender = (event) => {
    changeHandles({...data, gender : event.target.value})
    // setGender();
  };
  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="myTransAddress" required>
          My Transaction Address
        </FormLabel>
        <OutlinedInput
          id="myTransAddress"
          name="myTransAddress"
          type="myTransAddress"
          disabled={disabled}
          autoComplete="fmyTransAddress"
          value={data.myTransAddress}
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="myBalance" required>
          My Balance
        </FormLabel>
        <OutlinedInput
          id="myBalance"
          name="myBalance"
          disabled={disabled}
          type="myBalance"
          value={data.myBalance}
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="amountInBitCoins" required>
          Amount In Bitcoins
        </FormLabel>
        <OutlinedInput
          id="amountInBitCoins"
          name="amountInBitCoins"
          disabled={disabled}
          type="emamountInBitCoinsail"
          value={data.amountInBitCoins}
          required
        />
      </FormGrid>
      
      <FormGrid item xs={12}>
      <FormLabel htmlFor="purpose" required>
        Purpose
        </FormLabel>
        <OutlinedInput
          id="purpose"
          name="purpose"
          disabled={disabled}
          type="purpose"
          value={data.purpose}
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
      <FormLabel htmlFor="receiverAddress" required>Receiver Address</FormLabel>
        <OutlinedInput
          id="receiverAddress"
          name="receiverAddress"
          disabled={disabled}
          type="receiverAddress"
          value={data.receiverAddress}
          onChange={(e) => changeHandles({...data, receiverAddress : e.target.value})}
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="receiverEmail" required>
          Receiver Email
        </FormLabel>
        <OutlinedInput
          id="receiverEmail"
          name="receiverEmail"
          type="receiverEmail"
          value={data.receiverEmail}
          disabled={disabled}
          onChange={(e) => changeHandles({...data, receiverEmail : e.target.value})}
          required
          /> 
      </FormGrid> 
    </Grid>
  );
}
