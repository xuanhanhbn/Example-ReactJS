import MarketingDepartmentHeader from '../marketingDepartmentHeader'
import { Button } from '@mui/material'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { CircleSmall, FileDocumentOutline } from 'mdi-material-ui'

function MarketingDocuments() {
  return (
    <div>
      <MarketingDepartmentHeader />
      <Card style={{ borderRadius: 10, marginTop: 30 }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant='h6'>You are viewing all docs.</Typography>
          <Button
            size='large'
            variant='contained'
            sx={{ marginLeft: 10 }}
            href='/admin/create-documents'
            style={{
              minWidth: 150,
              minHeight: 40,
              marginTop: 5,
              borderRadius: 30
            }}
          >
            Create New Docs
          </Button>
        </CardContent>
      </Card>
      <Card style={{ borderRadius: 10, marginTop: '20px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>TITLE</TableCell>
                <TableCell align='right'>AUTHOR</TableCell>
                <TableCell align='right'> CREATED</TableCell>
                <TableCell align='right'>LAST EDITED</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  '&:last-of-type td, &:last-of-type th': {
                    border: 0
                  }
                }}
              >
                <TableCell component='th' scope='row' style={{ display: 'grid' }}>
                  <div style={{ display: 'flex', alignItems: 'center', color: 'black', fontSize: 14 }}>
                    <FileDocumentOutline />
                    ádsajhdbhjashbd
                  </div>
                  <div>...</div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p>Read</p>
                    <CircleSmall />
                    <p>Edit</p>
                  </div>
                </TableCell>
                <TableCell align='right'>dsadas</TableCell>
                <TableCell align='right'>sadsa</TableCell>
                <TableCell align='right'>sadsad</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default MarketingDocuments
