import React, { useContext, useState } from 'react'
import TableStickyHeader from '../tables/TableStickyHeader'
import { Button, TextField } from '@mui/material'

import { columns, inputSearchCustomer, rows } from './constant'

import { MapSearchOutline } from 'mdi-material-ui'
import { Breadcrumb } from 'antd'
import FormCreate from './components/FormCreate'

function ListCustomer() {
  const [isOpenModal, setIsOpenModal] = useState(false)

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
