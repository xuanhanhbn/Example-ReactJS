import React from 'react'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

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
                Marketing Group
              </Typography>
              <Typography sx={{ marginBottom: 2 }}>Private Group</Typography>
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

          {/* <Typography sx={{ marginBottom: 2 }}>$249.40</Typography>
            <Typography variant='body2'>
                3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz
            </Typography> */}
        </CardContent>
        {/* <CardMedia sx={{ height: '20rem' }} image='/images/cards/watch-on-hand.jpg' /> */}
        {/* <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
          Add To Cart
        </Button> */}
      </Card>
    </div>
  )
}

export default Groups
