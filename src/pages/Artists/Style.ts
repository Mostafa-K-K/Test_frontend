import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        width: '80%',
        [theme.breakpoints.down(1100)]: {
            width: '90%',
        },
        [theme.breakpoints.down(769)]: {
            width: '100%',
        },
    },
    searchbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#344450',
        color: '#FFFFFF',
        width: '19%',
        padding: 8,
        fontSize: 15,
        '&:hover': {
            backgroundColor: '#F5B750',
        },
        [theme.breakpoints.down(769)]: {
            height: 30,
            fontSize: 12,
        }
    },
    paginationWrapper: {
        display: 'flex',
        margin: theme.spacing(3, 0),
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'flex-end',
        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        }
    },
}))

export default useStyles
