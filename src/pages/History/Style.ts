import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        height: 'auto',
        minHeight: 300,
        marginBottom: '3%',
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
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconbtn: {
        width: 50
    }
}))

export default useStyles
