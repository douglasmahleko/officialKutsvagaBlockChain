import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import PhoneInput from 'react-phone-input-2'
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm({data, changeHandles, disabled, userLevel}) {

  const handleChange = (value) => {
    changeHandles({...data, contact : value})
  }
  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="contact" required>
          Contact
        </FormLabel>
        <PhoneInput 
          country={'zw'} 
          value={data.contact} 
          name="contact" 
          id="contact" 
          disabled={disabled} 
          onChange={handleChange} 
          inputProps={{ name: 'contact', required: true}} />
      </FormGrid>
      { userLevel === "AGENT" ? ( 
        <>
          <FormGrid item xs={12}>
            <FormLabel htmlFor="address" required>
              Address
            </FormLabel>
            <OutlinedInput
              id="address"
              name="address"
              disabled={disabled}
              type="address"
              placeholder="Street name and number"
              value={data.physicalAddress}
              onChange={(e) => changeHandles({...data, physicalAddress : e.target.value})}
              required
            />
          </FormGrid>
          <FormGrid item xs={6}>
          <FormLabel htmlFor="address2" required>Phase</FormLabel>
            <OutlinedInput
              id="phase"
              name="phase"
              disabled={disabled}
              type="phase"
              placeholder="Seke 1 and 2, Dangamvura, etc"
              value={data.phase}
              onChange={(e) => changeHandles({...data, phase : e.target.value})}
              required
            />
          </FormGrid>
          <FormGrid item xs={6}>
          <FormLabel htmlFor="city" required>
              City
            </FormLabel>
            <OutlinedInput
              id="city"
              name="city"
              type="city"
              disabled={disabled}
              placeholder="New York"
              value={data.city}
              onChange={(e) => changeHandles({...data, city : e.target.value})}
              required
            />
          </FormGrid>
          <FormGrid item xs={6}>
            <FormLabel htmlFor="province" required>
              Province
            </FormLabel>
            <OutlinedInput
              id="province"
              name="province"
              type="province"
              disabled={disabled}
              placeholder="Manicaland, Washingtone"
              value={data.province}
              onChange={(e) => changeHandles({...data, province : e.target.value})}
              required
            />
          </FormGrid>
        </>
       ) : ( null )}
    </Grid>
  );
}
