import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { TextField } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24
}

const btStyle = {
  bgcolor: 'white',
  boxShadow: 10
}

export default function FormModal(props) {
  const { title, onOpen, onClose, value } = props

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => onClose()
  const valueInput = Array.isArray(value) ? value : []

  return (
    <div>
      {/* <Button sx={btStyle} onClick={handleOpen}>
        {buttonName}
      </Button> */}
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={onOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={onOpen}>
          <Box sx={style}>
            <Card fullWidth>
              <CardHeader title={title} titleTypographyProps={{ variant: 'h6' }} />
              <Divider sx={{ margin: 0 }} />
              <CardContent>
                <form>
                  <Grid container spacing={5}>
                    <Grid item xs={12}>
                      {valueInput.map(item => {
                        return (
                          <div key={item.field}>
                            <TextField fullWidth label={item.field} placeholder={item.label} margin='dense' />
                          </div>
                        )
                      })}
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
              <Divider sx={{ margin: 0 }} />
              <CardActions style={{ justifyContent: 'flex-end' }}>
                <Button size='large' color='secondary' variant='outlined' onClick={() => handleClose()}>
                  Cancel
                </Button>
                <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                  Submit
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
