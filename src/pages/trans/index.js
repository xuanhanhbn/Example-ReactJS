const { Decagram } = require("mdi-material-ui");
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import TableCollapsible from 'src/views/trans'

const MUITable = () => {
    return (
        <Card>
            <CardHeader title='Lịch sử giao dịch' titleTypographyProps={{ variant: 'h6' }} />
            <TableCollapsible />
        </Card>
    )
}
export default MUITable