import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        [theme.breakpoints.down(600)]: {
            justifyContent: 'space-around'
        },
    },
    text: {
        width: '30%',
        marginBottom: 20,
        [theme.breakpoints.down(1100)]: {
            width: '45%',
        },
        [theme.breakpoints.down(600)]: {
            width: '90%',
            marginBottom: 10,
        },
        padding: 10,
        boxShadow: '0px 1px 1px rgb(200, 200, 200)'
    }
}))

export default useStyles
