import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import { useLocation, useNavigate } from "react-router-dom";
import { NavBarLists } from './navBarLists';
import { Switch } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;
  const navigate = useNavigate()
  const navigateAround = (link) => {
    navigate(link)
    props.setMobileOpen(false)
  }

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          KUTSVAGA
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>User Interfaces</ListItemText>
        </ListItem>
        { props.userLevel && NavBarLists.map(({ id, children }) => (
          id === props.userLevel || id === "BOTH" ? (
            <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              {/* <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText> */}
            </ListItem>
            {children.map(({ id: childId, icon, label, route, active }) => (
              ( props.needAdded && route === "myPrerequisites" ) ? ( null ) : ( 
                <ListItem disablePadding key={childId}>
                <ListItemButton onClick={() => navigateAround(route)} selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{label}</ListItemText>
                </ListItemButton>
              </ListItem>
               )
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
          ) : (
            null
          )
        ))}
        <Box sx={{ bgcolor: '#101F33' }}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => props.logout()} sx={item}>
              <ListItemIcon><SettingsEthernetIcon /></ListItemIcon>
              <ListItemText>LogOut</ListItemText>
            </ListItemButton>
          </ListItem>
        </Box>
      </List>
      <Snackbar open={props.openSnackBar} autoHideDuration={6000} onClose={props.handleCloseSnackBar}>
        <Alert
          onClose={props.handleCloseSnackBar}
          severity={props.svrtySnackBar}
          variant="filled"
          sx={{ width: '100%' }}
        >
            {props.msgSnackBar}
          </Alert>
        </Snackbar>
    </Drawer>
  );
}
