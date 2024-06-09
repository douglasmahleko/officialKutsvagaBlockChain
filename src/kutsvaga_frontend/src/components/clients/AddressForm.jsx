import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import PhoneInput from 'react-phone-input-2'
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { TextField } from '@mui/material';
import SelectBar from '../constants/selectBar';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm({data, disabled, changeHandles}) {

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
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="title" required>
          Title
        </FormLabel>
        { !disabled ? ( <SelectBar 
          id="title"
          disabled={disabled}
          name="title"
          type="title" 
          value={data.title} 
          onChange={handleSelectTitle} 
          values={['Mr', 'Mrs', "Miss"]} 
        /> ) : (
          <OutlinedInput
          id="title"
          name="title"
          type="title"
          value={data.title}
          disabled={disabled}
          required
          /> 
        )}
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="gender" required>
          Gender
        </FormLabel>
        { !disabled ? ( <SelectBar 
          value={data.gender} 
          type="gender" 
          id="gender" 
          name="gender" 
          disabled={disabled}
          onChange={handleSelectGender} 
          values={['Male', 'Female']} 
        /> ) : ( 
          <OutlinedInput
          id="gender"
          name="gender"
          type="gender"
          value={data.gender}
          disabled={disabled}
          required
          /> 
         )}
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="first-name" required>
          First name
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="first-name"
          disabled={disabled}
          type="name"
          placeholder="John"
          autoComplete="first name"
          value={data.name}
          onChange={(e) => changeHandles({...data, name : e.target.value})}
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="last-name" required>
          Last name
        </FormLabel>
        <OutlinedInput
          id="last-name"
          name="last-name"
          disabled={disabled}
          type="last-name"
          placeholder="Snow"
          autoComplete="last name"
          value={data.surname}
          onChange={(e) => changeHandles({...data, surname : e.target.value})}
          required
        />
      </FormGrid>
      
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="address" required>
          Email
        </FormLabel>
        <OutlinedInput
          id="email"
          name="email"
          disabled={disabled}
          type="email"
          placeholder="doctor@gmail.com"
          value={data.email}
          onChange={(e) => changeHandles({...data, email : e.target.value})}
          required
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="dob" required>
          Dob
        </FormLabel>
        <OutlinedInput
          id="dob"
          name="dob"
          type={disabled ? "dob" : "date"}
          value={data.dob}
          disabled={disabled}
          onChange={(e) => changeHandles({...data, dob : e.target.value})}
          required
          /> 
      </FormGrid>
      {
        disabled ? ( <>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="regDate" required>
          Reg Date
        </FormLabel>
        <OutlinedInput
          id="regDate"
          name="regDate"
          type="regDate"
          disabled={disabled}
          value={data.regDate}
          onChange={(e) => changeHandles({...data, regDate : e.target.value})}
          required
        />
      </FormGrid>
        </> ) : ( 
          null
         )
      }
      <FormGrid item xs={12}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country"
          type="country"
          disabled={disabled}
          value={data.country}
          onChange={(e) => changeHandles({...data, country : e.target.value})}
          required
        />
      </FormGrid>
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
    </Grid>
  );
}
