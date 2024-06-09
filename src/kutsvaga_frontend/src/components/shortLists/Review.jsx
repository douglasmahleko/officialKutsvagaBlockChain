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
          <ListItemText primary="My Needs" secondary="Rooms Needed : " />
          <Typography variant="body2">{data.roomsNeeded.toString()}</Typography>
        </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="Amount Per Room : " />
          <Typography variant="body2">{data.amountPerRoom}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText secondary="Budget : " />
          <Typography variant="body2">{data.budget.toString()}</Typography>
        </ListItem>
        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText secondary="Personal Info : " />
          <Typography variant="body2">{data.personalInfo}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="DateExpectingHouse : " />
          <Typography variant="body2">{data.dateExpectingHouse}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="ConsideredAreas : " />
          <Typography variant="body2">{data.consideration}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText secondary="Phase : " />
          <Typography variant="body2">{data.phase}</Typography>
        </ListItem>

        <ListItem sx={{ py: 0, px: 0 }}>
          <ListItemText secondary="Requirements : " />
          <Typography variant="body2">{data.requirements}</Typography>
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
