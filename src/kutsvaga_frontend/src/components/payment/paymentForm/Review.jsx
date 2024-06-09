import * as React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Review({data}) {
  return (
    <Stack spacing={2}>
      <List disablePadding>
      <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary="Transaction Information" secondary="My TransAddress : " />
          <Typography variant="body2">{}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText secondary="My Balance : " />
            <Typography variant="body2">{data.myBalance}</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText secondary="Amount In Satoshis : " />
            <Typography variant="body2">{data.amountInBitCoins}</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText secondary="Receiver Address : " />
            <Typography variant="body2">{data.receiverAddress}</Typography>
          </ListItem>
          <ListItem sx={{ py: 0, px: 0 }}>
            <ListItemText secondary="Receiver Email : " />
            <Typography variant="body2">{data.receiverEmail}</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText secondary="Purpose : " />
            <Typography variant="body2">{data.purpose}</Typography>
          </ListItem>
          
      </List>
      <Divider />
    </Stack>
  );
}
