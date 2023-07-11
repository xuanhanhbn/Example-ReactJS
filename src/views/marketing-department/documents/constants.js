export const columns = [
  {
    field: 'index',
    maxWidth: 170,
    name: 'STT',
    align: 'center'

    // isSort: true,
  },
  { field: 'title', name: 'Title', minWidth: 170 },
  { field: 'author', name: 'Author', minWidth: 100 },
  {
    field: 'created',
    name: 'Created',
    minWidth: 170
  },
  {
    field: 'lastEdited',
    name: 'Last Edited',
    minWidth: 170
  },
  {
    field: 'actions',
    name: 'Actions',
    minWidth: 170,
    align: 'center'
  }
]
