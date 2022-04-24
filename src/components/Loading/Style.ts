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
    text: {
        textAlign: 'center',
        color: '#344450',
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
    }
}))

export default useStyles
