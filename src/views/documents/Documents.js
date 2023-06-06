import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useState } from 'react'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import { FormControl, TextField } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Folder from 'mdi-material-ui/Folder'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import  { tooltipClasses } from '@mui/material/Tooltip';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    width: '100%'
  },
}));




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
}))

const DocumentComponent = () => {
  const [categories, setCategories] = useState('')
  const [listCategories, setListCategories] = useState([])
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = () => {
    setListCategories(prev => [...prev, categories])
    setCategories('')
  }

  return (
    <div>
      <section>
        <div>
          <Box
            sx={{
              width: '100%',
              height: 150,
              backgroundColor: 'rgb(224 223 224)',
              borderRadius: 2,
              p: 2,
              textAlign: 'center',
              fontSize: 26,
              color: 'black'
            }}
          >
            <h1>Categories</h1>
          </Box>
          <Box
            sx={{
              pt: 20
            }}
          >
            <Button size='large' variant='contained' sx={{ float: 'right', right: 10 }} onClick={handleOpen}>
              Thêm mới
            </Button>
            <Box sx={{ width: '100%', pt: 40 }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {listCategories.map((listCate, index) => (
                  <Grid key={index} item xs={3} sx={{ pt: 10, pb: 10, pl: 20, pr: 20 }}>
                    <LightTooltip 
                        style={{}}
                          title={
                            <List >
                              <ListItemButton>
                                <ListItemIcon>

                                </ListItemIcon>
                                <ListItemText primary="Rename"/>
                              </ListItemButton>
                              <ListItemButton>
                                <ListItemIcon>

                                </ListItemIcon>
                                <ListItemText primary="Delete"/>
                              </ListItemButton>
                            </List>
                          }
                    >
                      <Item style={{ backgroundColor: 'rgb(224 223 224)' }}>
                        <Link
                          style={{
                            display: 'flex',
                            padding: 8,
                            fontSize: 18,
                            justifyContent: 'center',
                            fontWeight: 600,
                            color: 'black',
                            alignItems: 'center'
                          }}
                          href={listCate}
                        >
                          <Folder style={{ marginRight: 10, fontSize: 24 }} />
                          <p style={{ margin: 0 }}>{listCate}</p>
                        </Link>
                      </Item>
                    </LightTooltip>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Modal
              aria-labelledby='transition-modal-title'
              aria-describedby='transition-modal-description'
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500
                }
              }}
            >
              <Fade in={open}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: 1,
                    bgcolor: 'background.paper',
                    boxShadow: 24
                  }}
                >
                  <Card style={{ width: 500 }}>
                    <CardHeader title='New Categories' titleTypographyProps={{ variant: 'h6' }} />
                    <Divider sx={{ margin: 0 }} />
                    <CardContent>
                      <FormControl fullWidth>
                        <TextField
                          fullWidth
                          label='New Categorie'
                          placeholder='Categorie'
                          value={categories}
                          onChange={e => setCategories(e.target.value)}
                        />

                        <CardActions>
                          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' onClick={handleSubmit}>
                            Submit
                          </Button>
                          <Button size='large' color='secondary' onClick={() => handleClose()} variant='outlined'>
                            Cancel
                          </Button>
                        </CardActions>
                      </FormControl>
                    </CardContent>
                  </Card>
                </Box>
              </Fade>
            </Modal>
          </Box>
        </div>
      </section>
    </div>
  )
}

export default DocumentComponent
