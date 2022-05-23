import { useState } from 'react'
import AlertMessage from './ui/AlertMessage'
import { Paper, TextField, Typography, Button } from '@mui/material'
import { useAppContext } from '../context/appContext'
import { Box } from '@mui/system'

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const { registerUser, loginUser, showAlert, toggleLoginModal } =
    useAppContext()
  const [values, setValues] = useState(defaultValues)

  const toggleIsMember = () => {
    setValues((prevState) => {
      return {
        ...prevState,
        isMember: !prevState.isMember,
      }
    })
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
    const { firstName, lastName, email, password } = values
    const currentUser = { firstName, lastName, email, password }
    if (values.isMember) {
      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }
  }

  return (
    <>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
      >
        <Paper
          elevation={16}
          sx={{
            width: 320,
            margin: '20px',
            padding: '40px 20px',
            border: `1px solid black`,
          }}
        >
          <Typography variant='h5' align='center' paragraph>
            {values.isMember ? 'Login' : 'Register'}
          </Typography>
          {showAlert && <AlertMessage />}
          <form onSubmit={handleSubmit}>
            {!values.isMember && (
              <>
                <TextField
                  autoFocus={!values.isMember}
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
              </>
            )}
            <TextField
              fullWidth
              required
              autoFocus={values.isMember}
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
                disabled={showAlert}
                sx={{ marginRight: 2 }}
              >
                {values.isMember ? 'Login' : 'Sign Up'}
              </Button>
              <Button
                variant='outlined'
                color='primary'
                disabled={showAlert}
                onClick={() => {
                  // setValues(defaultValues)
                  toggleLoginModal()
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
          <Typography sx={{ paddingTop: 3 }} variant='body2'>
            {values.isMember ? 'New here? ' : 'Already a member? '}
            <Button size='small' onClick={toggleIsMember} disabled={showAlert}>
              {values.isMember ? 'Register' : 'Sign In'}
            </Button>
          </Typography>
        </Paper>
      </Box>
    </>
  )
}

export default Register
