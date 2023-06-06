// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import Account from 'mdi-material-ui/Account'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { NotificationClearAll } from 'mdi-material-ui'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/',
      isShowMenu: true
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings',
      isShowMenu: true
    },
    {
      title: 'Customer',
      icon: AccountCogOutline,
      path: '/customer-dashboard',
      isShowMenu: true
    },

    {
      sectionTitle: 'User Interface',
      isShowMenu: true
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography',
      isShowMenu: true
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended,
      isShowMenu: true
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards',
      isShowMenu: true
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables',
      isShowMenu: true
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    },
    {
      icon: Table,
      title: 'TransHistory',
      path: '/trans',
      isShowMenu: true,
    }
  ]
}

export default navigation
