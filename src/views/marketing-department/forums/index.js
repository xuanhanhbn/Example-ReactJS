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
import MarketingDepartmentHeader from '../marketingDepartmentHeader'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { listTopic } from 'src/views/marketing-department/forums/constants'
import Paper from '@mui/material/Paper'
import { Input } from 'antd'
import CardActions from '@mui/material/CardActions'
import Link from 'next/link'

const { TextArea } = Input

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

function MarketingForums() {
  return (
    <div>
      <MarketingDepartmentHeader />
      <Card style={{ borderRadius: 10, marginTop: '20px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>TOPIC</TableCell>
                <TableCell align='right'>VOICES</TableCell>
                <TableCell align='right'> POSTS</TableCell>
                <TableCell align='right'>LAST POST</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listTopic.map(topic => (
                <TableRow
                  key={topic.id}
                  sx={{
                    '&:last-of-type td, &:last-of-type th': {
                      border: 0
                    }
                  }}
                >
                  <TableCell component='th' scope='row' style={{ display: 'grid' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'black',
                        fontSize: 14,
                        fontWeight: 600
                      }}
                    >
                      <Link href={`/marketing-department/forums/topic`}>{topic.topicTitle}</Link>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <p>Started by: </p>
                      <ImgStyled
                        sx={{
                          borderRadius: 50,
                          width: 20,
                          height: 20,
                          marginLeft: 3,
                          marginRight: 3
                        }}
                        src={topic.started.avatar}
                        alt='Profile Pic'
                      />

                      <>{topic.started.name}</>
                    </div>
                  </TableCell>
                  <TableCell align='right'>{topic.voices}</TableCell>
                  <TableCell align='right'>{topic.post}</TableCell>
                  <TableCell align='right'>{topic.lastPost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Card style={{ borderRadius: 10, marginTop: '20px' }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(10, 10.25, 6)} !important` }}>
          <Typography variant='h4' sx={{ marginBottom: 2, fontWeight: 600 }}>
            Create New Topic
          </Typography>
          <Divider sx={{ marginBottom: 10, borderColor: 'black' }} />
          <Typography variant='h5' sx={{ marginBottom: 2, fontWeight: 600 }}>
            Topic Title
          </Typography>
          <Input style={{ borderRadius: 30, marginTop: 10, padding: '10px 20px' }} />
          <TextArea rows={6} style={{ marginTop: 30, borderRadius: 20 }} />

          <CardActions>
            <Button size='large' type='submit' sx={{ padding: '10px 20px', borderRadius: 30 }} variant='contained'>
              Submit
            </Button>
            <Button size='large' color='secondary' variant='outlined' sx={{ padding: '10px 20px', borderRadius: 30 }}>
              Cancel
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  )
}

export default MarketingForums
