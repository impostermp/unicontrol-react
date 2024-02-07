import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
const SettingsPage = ({user, storeUser}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        console.log(user)
    })

    function changePassword(e) {
        e.preventDefault();


        if (user.password !== password){
            alert('passwords do not match')
            return
        }

        else {
            storeUser(userName, newPassword)
        }
    }

    return (
     <div className='padding-top'>
        {/* <p>Hello {user.username}</p> */}
        <Container maxWidth="sm" style={{border: '1px solid #424242', backgroundColor: 'rgb(33, 43, 54)', borderRadius: '10px'}}>
        <form onSubmit={changePassword}>
            <Stack spacing={3} sx={{alignItems: 'center', justifyContent: 'center',height: '400px'}}>
                    <TextField 
                        sx={{width: '90%', margin: 'auto', input: {color: 'white'}}} 
                        id="outlined-required" 
                        required 
                        label="Username" 
                        variant="outlined" 
                        onChange={(e) => setUserName(e.target.value)}
                        color='warning'
                        focused
                    />
                    <TextField 
                        sx={{width: '90%', input: {color: 'white'}}} 
                        id="outlined-required" 
                        required 
                        label="Old password" 
                        variant="outlined" 
                        onChange={(e) => setPassword(e.target.value)}
                        color='warning'
                        focused
                        type='password'
                        />
                        
                    <TextField 
                        sx={{width: '90%', input: {color: 'white'}}} 
                        id="outlined-required" 
                        required 
                        label="New password" 
                        variant="outlined" 
                        onChange={(e) => setNewPassword(e.target.value)}
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

export default SettingsPage;