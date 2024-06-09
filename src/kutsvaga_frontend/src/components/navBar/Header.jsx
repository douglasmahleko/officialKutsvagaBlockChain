import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import TabContext from '@mui/lab/TabContext';
import { NavBarLists } from './navBarLists';
import Fade from '@mui/material/Fade';
import { Box } from '@material-ui/core';
import {  useLocation, useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ToggleColorMode from '../constants/ToggleColorMode'

const lightColor = 'rgba(255, 255, 255, 0.7)';

function Header(props) {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setopen] = React.useState(false);

  const nav = (route) => {
    navigate(route)
    setopen(false)
  }

  React.useEffect(() => {
    if(!props.isAuthenticated){
      setopen(false)
    }
  }, [props.isAuthenticated])

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
              <Grid item>
                <Link
                  onClick={() => props.logout()}
                  variant="body2"
                  sx={{
                    textDecoration: 'none',
                    color: lightColor,
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'common.white',
                    },
                  }}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LOGOUT
                </Link>
              </Grid>
            <Grid item>
              <Menu
                id="fade-menu"
                // aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setopen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: "right",
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: "right",
                }}
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                TransitionComponent={Fade}
                >
                <Typography p={3} color='#9c9797' variant="span">{ props.user != null ? (props.user.name) : (null) }</Typography>
                { NavBarLists.map(({ id, children }) => (
                  id === "PROFILE" ? (
                    <Box key={id}>
                    {children.map(({ id: childId, icon, label, route, active }) => (
                      <MenuItem key={childId} onClick={() => nav(route)} selected={active} >
                        {label}
                      </MenuItem>
                    ))}
                    <Divider sx={{ mt: 2 }} />
                  </Box>
                  ) : (
                    null
                  )
                ))}
              <Button sx={{ padding:'2', width:'100%' }} variant='outline' onClick={() => props.logout()} >
                LogOut
              </Button>
            </Menu>
            </Grid>
            <Grid item>
              <Typography color="inherit" sx={{ p: 0.5 }}>
                {props.user && props.user.name} {props.user && props.user.surname}
              </Typography>
            </Grid>
            
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                {location.pathname.replace(/\W/g, ' ').toUpperCase()}
              </Typography>
            </Grid>
            <Grid item sx={{flexDirection:"row"}}>
              <Button
                sx={{ borderColor: lightColor }}
                variant="outlined"
                color="inherit"
                size="small"
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={(() => setopen(true))}
              >
               MY INFO
              </Button>
              <Grid item>
                <ToggleColorMode mode={props.mode} toggleColorMode={props.toggleColorMode} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          { props.userLevel === "AGENT" ?  (
            <Button sx={{ color: '#fff' }} onClick={() => nav("addHouse")} >
              Add House
            </Button>
                ) : (
                  !props.needAdded ? ( 
                    <Button sx={{ color: '#fff' }} onClick={() => nav("myPrerequisites")} >
                      Add Need
                    </Button>
                   ) : ( 
                    null
                    )
                )
              }
            <Button sx={{ color: '#fff' }} onClick={() => props.logout()} >
              LogOut
            </Button>
        </Box>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
          