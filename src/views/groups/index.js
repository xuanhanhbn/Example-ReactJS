import React from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import { Forum, Account, MessageProcessingOutline } from 'mdi-material-ui'
import { marketingUsers } from './constants'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

function Groups() {
  return (
    <div>
      <Card sx={{ borderRadius: 2 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(10, 10.25, 6)} !important` }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <ImgStyled src='/images/logos/OIG.jpg' alt='Profile Pic' />
            <Box>
              <Typography variant='h3' sx={{ marginBottom: 2, fontWeight: 600 }}>
                Marketing Department
              </Typography>
              <Typography sx={{ marginBottom: 2 }}>
                <Forum sx={{ marginRight: 5 }} />
                Private Group
              </Typography>
              <Typography sx={{ marginBottom: 2 }}>
                <Account sx={{ marginRight: 5 }} />
                Members (4)
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
              <Typography sx={{ marginBottom: 2, marginRight: 5 }}>Group Admins</Typography>
              <ImgStyled
                sx={{ borderRadius: 50, width: 40, height: 40, float: 'right' }}
                src='/images/avatars/1686130680-bpfull.jpg'
                alt='Profile Pic'
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
      <div style={{ marginTop: 30, display: 'flex' }}>
        <Card sx={{ borderRadius: 2, minWidth: '70%' }}>
          <CardContent sx={{ padding: theme => `${theme.spacing(10, 10.25, 6)} !important` }}>
            <Typography variant='h5' sx={{ marginBottom: 2, fontWeight: 600 }}>
              All Topic
            </Typography>
            <Divider sx={{ margin: 0, borderColor: 'black' }} />
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 2, flex: 1, marginLeft: 10 }}>
          <CardContent sx={{ padding: theme => `${theme.spacing(10, 10.25, 6)} !important` }}>
            <Typography variant='h5' sx={{ marginBottom: 2, fontWeight: 600 }}>
              Members
            </Typography>
            <Divider sx={{ marginTop: 0, marginBottom: 10, borderColor: 'black' }} />
            {marketingUsers.map(user => {
              return (
                <Box key={user.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                  <ImgStyled
                    sx={{ borderRadius: 50, width: 40, height: 40, float: 'right' }}
                    src={user.avatar}
                    alt='Profile Pic'
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <h5 style={{ fontWeight: 600 }}>{user.fullName}</h5>
                      <MessageProcessingOutline sx={{ marginLeft: 5 }} />
                    </div>
                    <p>{user.jobTitle}</p>
                  </div>
                </Box>
              )
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Groups
