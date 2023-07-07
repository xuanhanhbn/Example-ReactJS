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
        minWidth: 50,
        align: 'center',
    },
    {
        id: 'status',
        label: 'status',
        minWidth: 70,
        align: 'left',
    }
]
function createData(stt, name, phone, email, problem, status) {

    return { stt, name, phone, email, problem, status }
}

const rowDefault = [
    createData(1, 'Nguyen Thai', 324171354, 3287263),
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
