// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  username: Yup.string().required('User name is required'),
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required'),
  role: Yup.string().required('Role is required'),
  status: Yup.string().required('Status is required'),
  company: Yup.string().required('Company is required')
})

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabAccount = props => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })
  const onSubmit = data => console.log(data)

  // ** State
  const [openAlert, setOpenAlert] = useState(true)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }

  const defaultValue = ''
  

  return (
    <CardContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload New Photo
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            {/* <TextField fullWidth label='Username'  defaultValue="Duong"/> */}
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField fullWidth label='Username' name='username' onChange={onChange} value={value} />
              )}
              name='username'
            />
            <Typography style={{ color: 'red', marginTop: 0, marginBottom: 10 }}>{errors.username?.message}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TextField fullWidth label='Name' placeholder='John Doe' defaultValue='John Doe' /> */}
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField fullWidth label='Name' name='name' onChange={onChange} value={value} />
              )}
              name='name'
            />
             <Typography style={{ color: 'red', marginTop: 0, marginBottom: 10 }}>{errors.name?.message}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TextField
              fullWidth
              type='email'
              label='Email'
              placeholder='johnDoe@example.com'
              defaultValue='johnDoe@example.com'
            /> */}
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField fullWidth label='Email' name='email' onChange={onChange} value={value} />
              )}
              name='email'
            />
             <Typography style={{ color: 'red', marginTop: 0, marginBottom: 10 }}>{errors.email?.message}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              {/* <InputLabel>Role</InputLabel>
              <Select label='Role' defaultValue='admin'>
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='author'>Author</MenuItem>
                <MenuItem value='editor'>Editor</MenuItem>
                <MenuItem value='maintainer'>Maintainer</MenuItem>
                <MenuItem value='subscriber'>Subscriber</MenuItem>
              </Select> */}
              <Controller
                control={control}
                name='role'
                render={({ field: { onChange, value } }) => (
                  <>
                    <InputLabel>Role</InputLabel>
                    <Select name='role' onChange={onChange} value={value || defaultValue} label='Role'>
                      <MenuItem value='admin'>Admin</MenuItem>
                      <MenuItem value='author'>Author</MenuItem>
                      <MenuItem value='editor'>Editor</MenuItem>
                      <MenuItem value='maintainer'>Maintainer</MenuItem>
                      <MenuItem value='subscriber'>Subscriber</MenuItem>
                    </Select>
                  </>
                )}
              />
            </FormControl>
            <Typography style={{ color: 'red', marginTop: 0, marginBottom: 10 }}>{errors.role?.message}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              {/* <InputLabel>Status</InputLabel>
              <Select label='Status' defaultValue='active'>
                <MenuItem value='active'>Active</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
                <MenuItem value='pending'>Pending</MenuItem>
              </Select> */}
              <Controller
                control={control}
                name='status'
                render={({ field: { onChange, value } }) => (
                  <>
                    <InputLabel>Status</InputLabel>
                    <Select name='status' onChange={onChange} value={value || defaultValue} label='Role' >
                      <MenuItem value='active'>Active</MenuItem>
                      <MenuItem value='inactive'>Inactive</MenuItem>
                      <MenuItem value='pending'>Pending</MenuItem>
                    </Select>
                  </>
                )}
              />
            </FormControl>
            <Typography style={{ color: 'red', marginTop: 0, marginBottom: 10 }}>{errors.status?.message}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <TextField fullWidth label='Company' placeholder='ABC Pvt. Ltd.' defaultValue='ABC Pvt. Ltd.' /> */}
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField fullWidth label='Company' name='company' onChange={onChange} value={value} />
              )}
              name='company'
            />
             <Typography style={{ color: 'red', marginTop: 0, marginBottom: 10 }}>{errors.company?.message}</Typography>
          </Grid>

          {openAlert ? (
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Alert
                severity='warning'
                sx={{ '& a': { fontWeight: 400 } }}
                action={
                  <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
                    <Close fontSize='inherit' />
                  </IconButton>
                }
              >
                <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>
                <Link href='/' onClick={e => e.preventDefault()}>
                  Resend Confirmation
                </Link>
              </Alert>
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Button variant='contained' type='submit' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
