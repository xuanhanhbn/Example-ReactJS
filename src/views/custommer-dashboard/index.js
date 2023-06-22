import React, { useContext, useState } from 'react'
import TableStickyHeader from '../tables/TableStickyHeader'
import { Button, TextField } from '@mui/material'
import Stack from '@mui/material/Stack'
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
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            {inputSearchCustomer.map(inputSearch => (
              <Controller
                key={inputSearch.field}
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
                    />
                  )
                }}
                name={inputSearch.field}
              />
            ))}
            <Button
              style={{ backgroundColor: '#9155FD', color: 'white', maxHeight: 40, marginTop: 5 }}
              onClick={handleSubmit(onSubmit)}
            >
              <Magnify style={{ fontSize: 24 }} />
            </Button>
            <Button
              size='large'
              variant='contained'
              sx={{ marginLeft: 10 }}
              onClick={() => handleOpenModalCreateCustomer()}
              style={{
                minWidth: 100,
                minHeight: 40,
                marginTop: 5
              }}
            >
              Thêm mới
            </Button>
          </Stack>
        </form>
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
          style={{ minWidth: 340 }}
        />
      )}
    </div>
  )
}

export default ListCustomer
