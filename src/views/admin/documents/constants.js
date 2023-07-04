export const inputSearchDocument = [
  {
    field: 'name',
    lable: 'Name'
  },
  {
    field: 'creator',
    lable: 'Creator'
  }
]

function createData(name, creator, creationDate) {
  return { name, creator, creationDate }
}

export const columns = [
  { id: 'name', label: 'Name', minWidth: 300 },
  { id: 'creator', label: 'Creator', minWidth: 170, align: 'right' },
  { id: 'creationDate', label: 'Creation Date', minWidth: 170, align: 'right' },
  { id: 'implementationDate', label: 'Implementation Date', minWidth: 170, align: 'right' },
  { id: 'endDate', label: 'End Date', minWidth: 170, align: 'right' },
  { id: 'Department ', label: 'Department', minWidth: 170, align: 'right' }
]

export const rows = [
  createData('qwe', 'Admin', '23-6-2023'),
  createData('rty', 'Admin', '24-6-2023'),
  createData('uio', 'Admin', '25-6-2023'),
  createData('pas', 'Admin', '26-6-2023'),
  createData('dfg', 'Admin', '27-6-2023'),
  createData('hjk', 'Admin', '28-6-2023'),
  createData('lzx', 'Admin', '29-6-2023')
]
