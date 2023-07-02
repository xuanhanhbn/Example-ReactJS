import React from 'react'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'
import { Button, TextField } from '@mui/material'
import Stack from '@mui/material/Stack'
import { columns, inputSearchDocument, rows } from './constants'

import { Magnify } from 'mdi-material-ui'
import { Controller, useForm } from 'react-hook-form'

function ListDocument() {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div style={{ flex: 1 }}>
      {/* Button Add */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, marginTop: 50 }}>
        <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            {inputSearchDocument.map(inputSearch => (
              <Controller
                key={inputSearch.field}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <TextField
                      placeholder={inputSearch.lable}
                      name={inputSearch.field}
                      label={inputSearch.lable}
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
              href='/admin/create-documents'
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
    </div>
  )
}

export default ListDocument
