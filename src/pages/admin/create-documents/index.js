import React from 'react'
import CreateDocs from 'src/views/create-docs'
import { Controller, useForm } from 'react-hook-form'
import { Button } from 'antd'

function CreateDocuments() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div>
      <form>
        {/* <Controller
          control={control}
          render={({ field: { onChange, value } }) => {
            ;<CreateDocs value={value} onChange={onChange} />
          }}
          name='docs'
        /> */}

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => <CreateDocs value={value} onChange={onChange} />}
          name='name'
        />
        <Button type='submit' onSubmit={handleSubmit(onSubmit)}>
          Create
        </Button>
      </form>
    </div>
  )
}

export default CreateDocuments
