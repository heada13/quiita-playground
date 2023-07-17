// import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react';
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Main from './components/Main';
import { styled as muiStyled } from '@mui/material/styles';

const drawerWidth = 240;

const StyledMain = muiStyled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,
    }),
  }),
);

const StyledAppBar = muiStyled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = muiStyled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }
  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }
  return (
    <>
      <BrowserRouter>
        <CssBaseline/>
        <StyledAppBar position="fixed" color="primary" open={drawerOpen}>
          <Toolbar>
            <IconButton aria-label="open drawer" onClick={handleDrawerOpen}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6">
              Qiita PlayGround
            </Typography>
          </Toolbar>
        </StyledAppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={drawerOpen}
          sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
          >
          <DrawerHeader>
            <IconButton aria-label="" onClick={handleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>
          </DrawerHeader>
          <List>
            <NavLink to='/'>
              <ListItem>
                <ListItemIcon>
                  <InboxIcon></InboxIcon>
                  <ListItemText>A</ListItemText>
                </ListItemIcon>
              </ListItem>
            </NavLink>
            <NavLink to='/mail'>
              <ListItem>
                <ListItemIcon>
                  <InboxIcon></InboxIcon>
                  <ListItemText>mail</ListItemText>
                </ListItemIcon>
              </ListItem>
            </NavLink>
          </List>
        </Drawer>
        <StyledMain open={drawerOpen}>
          <DrawerHeader/>
          <Main/>
        </StyledMain>
      </BrowserRouter>
    </>
  );
}

export default App;
