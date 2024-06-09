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
      <FormLabel htmlFor="roomsNeeded" required>
        Rooms Needed
        </FormLabel>
      { disabled ? ( <OutlinedInput
          id="roomsNeeded"
          name="roomsNeeded"
          type="roomsNeeded"
          disabled={disabled}
          placeholder="roomsNeeded"
          value={data.roomsNeeded.toString()}
          required
        /> ) : (
          <OutlinedInput
          id="roomsNeeded"
          name="roomsNeeded"
          type="number"
          disabled={disabled}
          placeholder="roomsNeeded"
          value={data.roomsNeeded}
          onChange={(e) => changeHandles({...data, roomsNeeded : e.target.value})}
          required
        />
        )}

      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="amountPerRoom" required>
          Amount Per Room
        </FormLabel>
        <OutlinedInput
          id="amountPerRoom"
          name="amountPerRoom"
          type="number"
          disabled={disabled}
          placeholder="amountPerRoom"
          value={data.amountPerRoom}
          onChange={(e) => changeHandles({...data, amountPerRoom : e.target.value})}
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="budget" required>
          Budget
        </FormLabel>
        { disabled ? ( <OutlinedInput
          id="budget"
          disabled={disabled}
          name="budget"
          type="budget"
          placeholder="budget"
          value={data.budget.toString() }
          required
        /> ) : (
          <OutlinedInput
          id="budget"
          name="budget"
          type="number"
          disabled={disabled}
          placeholder="budget"
          value={data.budget }
          onChange={(e) => changeHandles({...data, budget : e.target.value})}
          required
        />
        ) }

      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="dateExpectingHouse" required>
          Date Expecting House
        </FormLabel>
        { disabled ? (
          <OutlinedInput
          id="dateExpectingHouse"
          name="dateExpectingHouse"
          type="dateExpectingHouse"
          disabled={disabled}
          value={data.dateExpectingHouse.toString()}
          required
        />
        ) : (
          <OutlinedInput
          id="dateExpectingHouse"
          name="dateExpectingHouse"
          type="date"
          disabled={disabled}
          value={data.dateExpectingHouse}
          onChange={(e) => changeHandles({...data, dateExpectingHouse : e.target.value})}
          required
        />
        )}

      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="personalInfo" required>
          Personal Info
        </FormLabel>
        <OutlinedInput
          id="personalInfo"
          name="personalInfo"
          disabled={disabled}
          type="personalInfo"
          placeholder="Snow"
          value={data.personalInfo}
          onChange={(e) => changeHandles({...data, personalInfo : e.target.value})}
          required
        />
      </FormGrid>
      
      <FormGrid item xs={12}>
        <FormLabel htmlFor="consideration" required>
        Considered Areas
        </FormLabel>
        <OutlinedInput
          id="consideration"
          name="consideration"
          disabled={disabled}
          type="consideration"
          value={data.consideration}
          onChange={(e) => changeHandles({...data, consideration : e.target.value})}
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
          disabled={disabled}
          type="requirements"
          placeholder="Street name and number"
          value={data.requirements}
          onChange={(e) => changeHandles({...data, requirements : e.target.value})}
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
