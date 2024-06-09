import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm({data, changeHandles, disabled, paid}) {
  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="roomsAvailable" required>
          Rooms Available
        </FormLabel>
        <OutlinedInput
          id="roomsAvailable"
          name="roomsAvailable"
          type="number"
          disabled={disabled}
          value={data.roomsAvailable}
          onChange={(e) => changeHandles({...data, roomsAvailable : e.target.value})}
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="amountPerRoom" required>
          Amount Per Room
        </FormLabel>
        <OutlinedInput
          id="amountPerRoom"
          name="amountPerRoom"
          disabled={disabled}
          type="number"
          value={data.amountPerRoom}
          onChange={(e) => changeHandles({...data, amountPerRoom : e.target.value})}
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="conditions" required>
          Conditions
        </FormLabel>
        <OutlinedInput
          id="conditions"
          name="conditions"
          disabled={disabled}
          type="conditions"
          placeholder="Todos and not todos"
          autoComplete="conditions"
          value={data.conditions}
          onChange={(e) => changeHandles({...data, conditions : e.target.value})}
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="requirements" required>
          Requirements
        </FormLabel>
        <OutlinedInput
          id="requirements"
          name="requirements"
          type="requirements"
          placeholder="Landlord requirements"
          value={data.requirements}
          disabled={disabled}
          onChange={(e) => changeHandles({...data, requirements : e.target.value})}
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="utilities" required>
          Utilities
        </FormLabel>
        <OutlinedInput
          id="utilities"
          name="utilities"
          type="utilities"
          value={data.utilities}
          disabled={disabled}
          onChange={(e) => changeHandles({...data, utilities : e.target.value})}
          required
        />
      </FormGrid>
      <FormGrid item xs={12}>
      <FormLabel htmlFor="physicalDescription" required>
        Physical Description
        </FormLabel>
        <OutlinedInput
          id="physicalDescription"
          name="physicalDescription"
          disabled={disabled}
          type="physicalDescription"
          placeholder="Street name and number"
          value={data.physicalDescription}
          onChange={(e) => changeHandles({...data, physicalDescription : e.target.value})}
          required
        />
      </FormGrid>
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
          value={data.address}
          onChange={(e) => changeHandles({...data, address : e.target.value})}
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
      <FormGrid item xs={6}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country"
          disabled={disabled}
          type="country"
          placeholder="United States Zimbabwe etc"
          value={data.country}
          onChange={(e) => changeHandles({...data, country : e.target.value})}
          required
        />
      </FormGrid>
    </Grid>
  );
}
