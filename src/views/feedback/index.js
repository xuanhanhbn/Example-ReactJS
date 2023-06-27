// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import { Carousel, Button } from 'antd'
import { useRef } from "react"

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import StarOutline from 'mdi-material-ui/StarOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'



const CardMembership = () => {
    const ref = useRef()

    return (
        <Card>
            <Grid container spacing={6}>
                <Grid item xs={10} sm={5}>
                    <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
                        <Typography variant='h6' sx={{ marginBottom: 3.5 }}>
                            FeedBack                        </Typography>
                        <Divider sx={{ marginTop: 4, marginBottom: 4 }} />
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={5}>
                                <StyledBox>
                                    <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                                        <LockOpenOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
                                        <Typography variant='body2'>Time: Update 24 hour</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AccountOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
                                        <Typography variant='body2'>User: 10.000 person</Typography>
                                    </Box>
                                </StyledBox>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                                    <StarOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
                                    <Typography variant='body2'>4.5</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <TrendingUp sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
                                    <Typography variant='body2'>Good</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid item sm={5}
                    xs={12}>
                    <CardContent
                    >
                        <Carousel
                            autoPlay
                            infiniteLoop
                            showThumbs={false}
                            ref={ref}>
                            <div>
                                <h3 style={{
                                    height: '160px',
                                    color: '#fff',
                                    lineHeight: '160px',
                                    textAlign: 'center',
                                    background: '#7749',

                                    // backgroundImage: `url(${require(img1.png)})`
                                }}>
                                </h3>
                            </div>
                            <div>
                                <h3 style={{
                                    height: '160px',
                                    color: '#fff',
                                    lineHeight: '160px',
                                    textAlign: 'center',
                                    background: '#7749',
                                }}>
                                </h3>
                            </div>
                            <div>
                                <h3 style={{
                                    height: '160px',
                                    color: '#fff',
                                    lineHeight: '160px',
                                    textAlign: 'center',
                                    background: '#7749',
                                }}>

                                </h3>
                            </div>
                            <div>
                                <h3 style={{
                                    height: '160px',
                                    color: '#fff',
                                    lineHeight: '160px',
                                    textAlign: 'center',
                                    background: '#7749',
                                }}>

                                </h3>
                            </div>
                        </Carousel>
                        <div>
                            <Button onClick={() => {
                                ref.current.prev();
                            }}>Back</Button>
                            <Button onClick={() => {
                                ref.current.goTo(0);
                            }}>Reset</Button>
                            <Button onClick={() => {
                                ref.current.next()
                            }}>Next</Button>
                        </div>
                    </CardContent >
                </Grid >
            </Grid >
        </Card >
    )
}

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        borderRight: `1px solid ${theme.palette.divider}`
    }
}))


export default CardMembership
