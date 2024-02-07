import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
// receive prop function that sets user data in App from handlesubmit
const RegisterPage = () => {
    
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');    
    
    const navigate = useNavigate();
    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        // API call, sanitazion
        
        console.log(username+ ' ' + password)
        if (password !== confirmPassword){
            alert('passwords do not match')
            return
        }
        else {
            // make api call to register user
            navigate('/home')
        }
    }   
    return (
    <div className='padding-top'>
        <Container maxWidth="sm" style={{border: '1px solid #424242', backgroundColor: 'rgb(33, 43, 54)', borderRadius: '10px'}}>
        <form onSubmit={handleSubmit}>
            <Stack spacing={3} sx={{alignItems: 'center', justifyContent: 'center',height: '400px'}}>
                <TextField 
                    sx={{width: '90%', margin: 'auto', input: {color: 'white'}}} 
                    required 
                    label="Username" 
                    variant="outlined" 
                    onChange={(e) => setUserName(e.target.value)}
                    color='warning'
                    focused
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
                    
                <TextField 
                    sx={{width: '90%', input: {color: 'white'}}} 
                    required 
                    label="Confirm password" 
                    variant="outlined" 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    color='warning'
                    focused
                    type = 'password'
                    />
                    
                <Button 
                    type='submit'
                    color='warning' 
                    variant="contained" 
                    sx={{width: '90%', height: '50px', mt: 2, textTransform: 'none'}}>
                        Register
                </Button>
            </Stack>
        </form>
    </Container>
    </div>    
)};

export default RegisterPage;