import React, { useState } from 'react'
import { Grid, Paper, TextField, Typography, Button } from '@mui/material'
import axios from 'axios'

const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

const Register = () => {
    const [values, setValues] = useState(defaultValues)

    const register = async () => {
        try {
            const response = await axios.post('/api/v1/auth/register', values)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        register()
        setValues(defaultValues)
    }

    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <Paper
                    elevation={16}
                    sx={{
                        width: 320,
                        height: 500,
                        margin: '20px',
                        padding: '40px 20px',
                    }}
                >
                    <Typography variant='h5' align='center' paragraph>
                        Register
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            required
                            margin='normal'
                            variant='standard'
                            id='fname'
                            name='firstName'
                            label='First Name'
                            type='text'
                            value={values.firstName}
                            onChange={handleInputChange}
                        />
                        <TextField
                            fullWidth
                            required
                            margin='normal'
                            variant='standard'
                            id='lname'
                            name='lastName'
                            label='Last Name'
                            type='text'
                            value={values.lastName}
                            onChange={handleInputChange}
                        />
                        <TextField
                            fullWidth
                            required
                            margin='normal'
                            variant='standard'
                            id='email'
                            name='email'
                            label='Email'
                            type='email'
                            value={values.email}
                            onChange={handleInputChange}
                        />
                        <TextField
                            fullWidth
                            required
                            margin='normal'
                            variant='standard'
                            id='password'
                            name='password'
                            label='Password'
                            type='password'
                            value={values.password}
                            onChange={handleInputChange}
                        />
                        <div className='form-submit'>
                            <Button
                                variant='contained'
                                type='submit'
                                sx={{ marginRight: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Button variant='outlined' color='primary'>
                                Cancel
                            </Button>
                            <Typography sx={{ paddingTop: 3 }} variant='body2'>
                                Already a user?{' '}
                                <Button size='small'>Sign in</Button>
                            </Typography>
                        </div>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Register
