import * as React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Review({data, disabled}) {
  return (
    <Stack spacing={2}>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Personal Information" secondary="Title : " />
          <Typography variant="body2" >{data.title}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="Name : " />
          <Typography variant="body2">{data.name}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="Surname : " />
          <Typography variant="body2">{data.surname}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="DOB : " />
          <Typography variant="body2">{data.dob}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="Gender : " />
          <Typography variant="body2">{data.gender}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText secondary="Email : " />
          <Typography variant="body2">{data.email}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="Contact : " />
          <Typography variant="body2">{data.contact}</Typography>
        </ListItem>
        
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="Address : " />
          <Typography variant="body2">{data.physicalAddress}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText secondary="Phase : " />
          <Typography variant="body2">{data.phase}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="City : " />
          <Typography variant="body2">{data.city}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="Province : " />
          <Typography variant="body2">{data.province}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="Country : " />
          <Typography variant="body2">{data.country}</Typography>
        </ListItem>

        {disabled ? ( <>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText secondary="Reg Date : " />
            <Typography variant="body2">{data.regDate}</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText secondary="Reg Expiry : " />
            <Typography variant="body2">{data.regExpire}</Typography>
          </ListItem> 
        </> ) : (
          null
        )}
      </List>
      <Divider />
    </Stack>
  );
}
