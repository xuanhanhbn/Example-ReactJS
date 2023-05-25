import React, { useContext, useState } from 'react'
import TableStickyHeader from '../tables/TableStickyHeader'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import FormLayouts from 'src/pages/form-layouts'
import FormModal from '../form-layouts/FormModal'
import { columns, inputAddCustomer, inputSearchCustomer, rows } from './constant'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { MapSearchOutline } from 'mdi-material-ui'
import { Breadcrumb } from 'antd'
import ApiContext from '../../../components/store/context'

const defaultInputValues = {
  userId: '',
  email: '',
  phoneNumber: ''
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
  userId: Yup.string().required('User ID is required').min(6, 'User ID must be at least 6 characters'),
  email: Yup.string().required('Email is required').email('Email is invalid.'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
})

function ListCustomer() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [values, setValues] = useState(defaultInputValues)

  const modalStyles = {
    inputFields: {
      marginTop: '20px',
      marginBottom: '15px',
      '.MuiFormControl-root': {
        marginBottom: '20px'
      }
    }
  }

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  // Xử lí mở modal
  const handleOpenModalCreateCustomer = () => {
    setIsOpenModal(true)
  }

  // Xử lí đóng modal
  const handleCloseModalCreate = () => {
    setIsOpenModal(false)
    clearErrors()
  }

  // Xử lí khi ấn submit
  const addUser = data => {
    console.log('data: ', data)
  }

  // Xử lí onChange Input
  const handleChange = value => {
    console.log('value: ', value)
    setValues(value)
  }

  // content input
  const getContent = () => (
    <Box sx={modalStyles.inputFields}>
      {inputAddCustomer.map(item => (
        <TextField
          key={`inputAdd_${item.field}`}
          placeholder={item.lable}
          name={item.field}
          label={item.lable}
          fullWidth
          required
          {...register('userId')}
          error={errors.userId ? true : false}
          helperText={errors.userId?.message}
          value={values.userId}
          onChange={event => handleChange({ ...values, userId: event.target.value })}
        />
      ))}
    </Box>
  )

  return (
    <div style={{ flex: 1 }}>
      <Breadcrumb>
        <Breadcrumb.Item>Đăng ký dịch vụ</Breadcrumb.Item>
        <Breadcrumb.Item>Khách hàng cá nhân</Breadcrumb.Item>
      </Breadcrumb>
      {/* Button Add */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, marginTop: 50 }}>
        {inputSearchCustomer.map(inputSearch => (
          <TextField
            key={inputSearch.field}
            label={inputSearch.label}
            name={inputSearch.field}
            sx={{ marginLeft: 10 }}
          />
        ))}
        <Button>
          <MapSearchOutline />
        </Button>
        <Button
          size='large'
          variant='contained'
          sx={{ marginLeft: 10 }}
          onClick={() => handleOpenModalCreateCustomer()}
        >
          Thêm mới
        </Button>
      </div>
      {/* Table */}
      <div>
        <TableStickyHeader rows={rows} columns={columns} />
      </div>
      {isOpenModal && (
        <FormModal
          onOpen={isOpenModal}
          onClose={() => handleCloseModalCreate()}
          handleSubmit={handleSubmit(addUser)}
          value={getContent()}
          title='Add Customer'
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        />
      )}
    </div>
  )
}

export default ListCustomer
