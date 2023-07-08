import MarketingDepartmentHeader from '../marketingDepartmentHeader'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import { marketingMembers } from './constants'

function MarketingMembers() {
  return (
    <div>
      <MarketingDepartmentHeader />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gridGap: 35,
          margin: '30px 0px'
        }}
      >
        {marketingMembers.map(member => {
          return (
            <Card key={member.userName}>
              <CardContent
                sx={{
                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
                }}
              >
                <Avatar
                  sx={{
                    width: 50,
                    height: 50,
                    marginBottom: 2.25,
                    color: 'common.white',
                    backgroundColor: 'primary.main'
                  }}
                  src={member.avatar}
                />
                <Typography variant='h6' sx={{ marginBottom: 2.75 }}>
                  {member.fullName}
                </Typography>
                <Typography variant='body2' sx={{ marginBottom: 6 }}>
                  {member.jobTitle}
                </Typography>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default MarketingMembers
