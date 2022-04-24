import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    container: {
        width: '40%',
        borderRadius: 20,
        padding: 30,
        [theme.breakpoints.up(600)]: {
            minHeight: 400
        },
        [theme.breakpoints.down(600)]: {
            width: '70%',
            borderRadius: 15,
            padding: 20
        },
        backgroundColor: '#fff'
    },
    subContainer: {
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    iconbtn: {
        width: 10,
        height: 10
    },
    text: {
        marginBottom: 20,
        [theme.breakpoints.down(600)]: {
            marginBottom: 10,
        },
        padding: 10,
        margin: 5,
        boxShadow: '0px 1px 1px rgb(200, 200, 200)'
    },
    button: {
        color: '#F5B750',
        border: '2px solid #F5B750',
        width: '15%',
        padding: 8,
        height: 40,
        fontSize: 15,
        '&:hover': {
            color: '#fff',
            backgroundColor: '#F5B750',
        },
        [theme.breakpoints.down(769)]: {
            height: 30,
            fontSize: 12,
        }
    }
}))

export default useStyles
