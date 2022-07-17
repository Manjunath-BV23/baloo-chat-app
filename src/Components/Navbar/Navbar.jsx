import * as React from 'react';
import "./Navbar.css"
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FilterIcon from '@mui/icons-material/Filter';

// import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { AddIcon } from './AddIcon';
import { Link } from 'react-router-dom';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function BottomAppBar() {
  return (
    <React.Fragment display="grid" height= "100px">
        
      {/* <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Inbox
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}

              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}

              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper> */}
      
          {/* <StyledFab color="secondary" aria-label="add" className='addic' >
            <AddIcon className= "addicon"/>
          </StyledFab> */}
        <AddIcon/>
      <AppBar style={{ borderRadius: "24px 24px 0px 0px", height: "75px", backgroundColor: "#000000" }} position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar style={{paddingTop: "10px"}}>
          <IconButton color="inherit" aria-label="open drawer">
            {/* <HomeIcon /> */}
            <Link to="/">

            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.3335 21.266C8.3335 19.0031 8.3335 17.8716 8.79093 16.8771C9.24837 15.8825 10.1074 15.1461 11.8256 13.6735L13.4922 12.2449C16.5978 9.583 18.1505 8.25206 20.0002 8.25206C21.8498 8.25206 23.4025 9.583 26.5081 12.2449L28.1747 13.6735C29.8929 15.1461 30.752 15.8825 31.2094 16.8771C31.6668 17.8716 31.6668 19.0031 31.6668 21.266V28.3333C31.6668 31.476 31.6668 33.0474 30.6905 34.0237C29.7142 35 28.1429 35 25.0002 35H15.0002C11.8575 35 10.2861 35 9.30981 34.0237C8.3335 33.0474 8.3335 31.476 8.3335 28.3333V21.266Z" stroke="white" stroke-width="2"/>
            <path d="M24.1668 35V26C24.1668 25.4477 23.7191 25 23.1668 25H16.8335C16.2812 25 15.8335 25.4477 15.8335 26V35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </Link>

          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
              {/* <FilterIcon /> */}
            <svg width="28" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.3335 14L6.3335 4.66667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M22.6665 23.3333L22.6665 19.8333" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M6.3335 23.3333L6.3335 18.6667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M22.6665 15.1667L22.6665 4.66667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M14.5 8.16667L14.5 4.66667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M14.5 23.3333L14.5 12.8333" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <ellipse cx="6.33333" cy="16.3333" rx="2.33333" ry="2.33333" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <ellipse cx="14.4998" cy="10.5" rx="2.33333" ry="2.33333" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <ellipse cx="22.6668" cy="17.5" rx="2.33333" ry="2.33333" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>

          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6669 4.66667H11.6661C7.80033 4.66667 4.6665 7.80049 4.6665 11.6663V11.6671C4.6665 15.5329 7.80033 18.6667 11.6661 18.6667H11.6669C15.5327 18.6667 18.6665 15.5329 18.6665 11.6671V11.6663C18.6665 7.80049 15.5327 4.66667 11.6669 4.66667Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M17.1108 17.1111L23.3331 23.3334" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>

          </IconButton>
        </Toolbar>
      </AppBar>
      
    </React.Fragment>
    
  );
}
