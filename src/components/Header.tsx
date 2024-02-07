import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import PopOver from '@mui/material/Popover';
import '../App.css';


// add onhover to home and profile, add links when profile hovered

const Header = ({user}) => {

  const navigate = useNavigate();

  function navigateHome (){
    navigate("/");
  }
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <AppBar position="static" sx={{backgroundColor: 'rgb(33, 43, 54)'}}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton onClick={navigateHome} edge="start" sx={{color: 'inherit', '&:hover':{color:'lightBlue'}}} aria-label="home">
          <HomeIcon />
        </IconButton>
        <div className='flex justify-center'>
          <Typography>  
            {user.username ? <Link sx={{textDecoration: 'none', color: 'white'}}>Hello, {user.username}</Link>:null}
          </Typography>
          <IconButton onClick={handleClick} edge="end" sx={{color: 'inherit', '&:hover':{color:'lightBlue'}}} color="inherit" aria-label="profile">
            <AccountCircleIcon/>
          </IconButton>
         </div>
          <PopOver
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Typography sx={{ p: 2 , display: 'flex', flexDirection: 'column'}}>
              <Link sx={{textDecoration: 'none'}} href="/register" color="inherit">Register</Link>
              {user.username ? <Link sx={{textDecoration: 'none'}} href="/settings" color="inherit">Settings</Link> : null}
            </Typography>
        </PopOver>
      </Toolbar>
    </AppBar>
  );
};

export default Header;