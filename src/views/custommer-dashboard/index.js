import React, { useContext, useState } from 'react'
import TableStickyHeader from '../tables/TableStickyHeader'
import { Button, TextField } from '@mui/material'

import { columns, inputSearchCustomer, rows } from './constant'

import { Magnify } from 'mdi-material-ui'
import { Breadcrumb } from 'antd'
import FormCreate from './components/FormCreate'

import Grid from '@mui/material/Grid'
import { Controller, useForm } from 'react-hook-form'

function ListCustomer() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const { control, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log('datA: ', data)
  }

  // Xử lí mở modal
  const handleOpenModalCreateCustomer = () => {
    setIsOpenModal(true)
  }

  // Xử lí đóng modal
  const handleCloseModalCreate = () => {
    setIsOpenModal(false)
    clearErrors()
  }

  return (
    <div style={{ flex: 1 }}>
      <Breadcrumb>
        <Breadcrumb.Item>Đăng ký dịch vụ</Breadcrumb.Item>
        <Breadcrumb.Item>Khách hàng cá nhân</Breadcrumb.Item>
      </Breadcrumb>
      {/* Button Add */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, marginTop: 50 }}>
        <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
          {inputSearchCustomer.map(inputSearch => (
            <Grid key={inputSearch.field} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={2} sm={11}>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <TextField
                        placeholder={inputSearch.label}
                        name={inputSearch.field}
                        label={inputSearch.label}
                        value={value}
                        onChange={onChange}
                        required
                        fullWidth
                        style={{ marginBottom: 10 }}
                      />
                    )
                  }}
                  name={inputSearch.field}
                />
              </Grid>
            </Grid>
          ))}
          <Button onClick={handleSubmit(onSubmit)} style={{ marginLeft: 10 }}>
            <Magnify style={{ fontSize: 24 }} />
          </Button>
        </form>
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
        <FormCreate
          onOpen={isOpenModal}
          onClose={() => handleCloseModalCreate()}
          title='Add Customer'
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        />
      )}
    </div>
  )
}

export default ListCustomer
