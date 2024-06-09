import * as React from 'react';

import Divider from '@mui/material/Divider';
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
          <ListItemText primary="House Information" secondary="Rooms Available : " />
          <Typography variant="body2">{data.roomsAvailable}</Typography>
        </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="Amount Per Room : " />
          <Typography variant="body2">{data.amountPerRoom}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="address : " />
          <Typography variant="body2">{data.address}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText secondary="Physical Description : " />
          <Typography variant="body2">{data.physicalDescription}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText secondary="Requirements : " />
          <Typography variant="body2">{data.requirements}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="Utilities : " />
          <Typography variant="body2">{data.utilities}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="Conditions : " />
          <Typography variant="body2">{data.conditions}</Typography>
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
      </List>
      <Divider />
    </Stack>
  );
}
