const { Decagram } = require("mdi-material-ui");

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'


import TableCollapsible from 'src/views/staff'

const MUITable = () => {
    return (
        <Card>
            <CardHeader title='Quản lí hoạt động nhân sự' titleTypographyProps={{ variant: 'h6' }} />
            <TableCollapsible />
        </Card>
    )
}

export default MUITable
