export const CLEANUP = 'src/views/CLEANUP'

export const CREATE_ITEM = 'src/views/CREATE_ITEM'

export const CREATE_ITEM_SUCCESS = 'src/views/CREATE_ITEM_SUCCESS'

export const CREATE_ITEM_FAILED = 'src/views/CREATE_ITEM_FAILED'

export const inputAddCustomer = [
  {
    field: 'userId',
    lable: 'User Id'
  },
  {
    field: 'email',
    lable: 'Email'
  },
  {
    field: 'phoneNumber',
    lable: 'Phone Number'
  }
]

export const inputSearchCustomer = [
  {
    field: 'name',
    label: 'Name'
  },
  {
    field: 'customerId',
    label: 'Customer Id'
  },
  {
    field: 'phone',
    label: 'Phone'
  }
]

function createData(name, customerId, address, phone) {

  return { name, customerId, address, phone }
}

export const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'customerId', label: 'Customer Id', minWidth: 100 },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString('en-US')
  },
  // {
  //   id: 'density',
  //   label: 'Density',
  //   minWidth: 170,
  //   align: 'right',
  //   format: value => value.toFixed(2)
  // },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 170,
    align: 'center'
  }
]

export const rows = [
  createData('sadas', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767)
]
