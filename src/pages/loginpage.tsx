import React from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { useState, useReducer} from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
// import myReducer from '../utils/reducers/userreducer';

const Login = ({storeUser}) => {

    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    // const [state, dispatch] = useReducer(myReducer, myReducer.initialState);
    
    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        // API call, sanitazion
        
        console.log(username+ ' ' + password)
    
        // handleLogin(true);
        // storeUser(username,password)
        storeUser(username,password);
        navigate('/home');
    }   

    return (
    <div className='padding-top' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img alt="Logo" src='logo.svg'/>
        <img style={{paddingTop: '30px'}} alt="Logo" src='download.svg'/>

    <Container maxWidth="sm" style={{border: '1px solid #424242', backgroundColor: 'rgb(33, 43, 54)', borderRadius: '10px'}}>
        <form onSubmit={handleSubmit}>
            <Stack spacing={3} sx={{alignItems: 'center', justifyContent: 'center',height: '400px'} }>
                    <TextField 
                        sx={{width: '90%', margin: 'auto', input: {color: 'white'}}} 
                        required 
                        label="Username" 
                        variant="outlined" 
                        onChange={(e) => setUserName(e.target.value)}
                        color="warning"
                        focused
                        // inputProps={{style: {color: 'white'}}}
                    />
        
                    <TextField 
                        sx={{width: '90%', input: {color: 'white'}}}
                        required 
                        label="Password" 
                        variant="outlined" 
                        onChange={(e) => setPassword(e.target.value)}
                        color='warning'
                        focused
                        type='password'
                    />
                    <Box sx={{textAlign:'right', width: '90%'}}>
                        <Link sx={{color: 'warning.main'}} href="#">Forgot password?</Link>
                    </Box>
                    <Button 
                        type='submit'
                        color='warning' 
                        variant="contained" 
                        sx={{width: '90%', height: '50px', mt: 2, textTransform: 'none'}}
                        
                        >
                            Login
                    </Button>
            </Stack>
        </form>
    </Container>
    </div>
    )
}

export default Login;