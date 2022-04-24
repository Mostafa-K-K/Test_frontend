import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        minHeight: 350,
        width: '50%',
        [theme.breakpoints.down(1100)]: {
            width: '60%',
        },
        [theme.breakpoints.down(769)]: {
            width: '70%',
        },
        [theme.breakpoints.down(400)]: {
            width: '90%',
        },
    },
    oops: {
        color: '#344450',
        fontWeight: 'bold',
        fontSize: 22,
        [theme.breakpoints.down(1100)]: {
            fontSize: 20,
        },
        [theme.breakpoints.down(769)]: {
            fontSize: 18,
        },
        [theme.breakpoints.down(400)]: {
            fontSize: 16,
        },
    },
    tryagain: {
        color: '#344450',
        fontWeight: 'bold',
        cursor: 'pointer',
        border: '2px solid #344450',
        borderRadius: 5,
        marginTop: '10%',
        marginBottom: '15%',
        width: '70%',
        padding: 12,
        display: 'flex',
        justifyContent: 'center',
        '&:hover': {
            color: '#F5B750',
            border: '2px solid #F5B750',
        },
        fontSize: 16,
        [theme.breakpoints.down(1100)]: {
            width: '80%',
            fontSize: 14,
        },
        [theme.breakpoints.down(769)]: {
            fontSize: 12,
        },
        [theme.breakpoints.down(400)]: {
            fontSize: 16
        }
    },
}))

export default useStyles
