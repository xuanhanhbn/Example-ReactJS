// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { Icon, Link } from '@mui/material'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import { Delete } from 'mdi-material-ui'

const columnsDefault = [
    {
        id: 'stt', label: 'stt', minWidth: 50,
    },

    {
        id: 'name', label: 'name', minWidth: 50, align: 'left',
    },
    {
        id: 'phone',
        label: 'phone',
        align: 'left',
        minWidth: 50,
    },
    {
        id: 'email',
        label: 'email',
        minWidth: 50,
        align: 'center',

    },
    {
        id: 'problem',
        label: 'problem',
        minWidth: 200,
        align: 'center',
    },
    {
        id: 'action',
        label: 'action',
        minWidth: 70,
        align: 'center',
    },
    {
        id: 'status',
        label: 'status',
        minWidth: 70,
        align: 'left',
    }
]
function createData(stt, name, phone, email, problem, action, status) {

    return { stt, name, phone, email, problem, action, status }
}

const rowDefault = [
    createData(1, 'Nguyen Thai', 10403500365, 'ptejthaii@gmail.com', 'i have problem with pay pal',),
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

const TableStickyHeader = props => {
    const { rows, columns } = props
    const rowsDefault = rows ? rows : rowDefault || []
    const columsDefault = columns ? columns : columnsDefault || []

    // ** States

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <TableRow>
                            {columsDefault.map(column => (
                                <>
                                    <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>
                                </>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsDefault.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                                    {columsDefault.map(column => {
                                        const value = row[column.id]

                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                                {column.id === 'action' && (
                                                    <>
                                                        <Link href='/account-settings/'>
                                                            <HomeOutline style={{ fontSize: 18, marginRight: 5 }} />
                                                        </Link>
                                                        <Delete style={{ fontSize: 18, color: 'red' }} color='red' />
                                                    </>
                                                )}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={rowsDefault.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default TableStickyHeader
