import * as React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Review({data, userLevel}) {
  return (
    <Stack spacing={2}>
      <List disablePadding>
      <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary="Personal Information" secondary="Contact : " />
          <Typography variant="body2">{data.contact}</Typography>
        </ListItem>
        { userLevel==="AGENT" ? ( 
          <>
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
          </>
         ) : ( null )}
      </List>
      <Divider />
    </Stack>
  );
}
