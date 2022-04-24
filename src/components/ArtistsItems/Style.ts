import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: 350,
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        [theme.breakpoints.down(600)]: {
            justifyContent: 'space-around'
        },
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '30%',
        [theme.breakpoints.down(1100)]: {
            width: '45%',
        },
        [theme.breakpoints.down(600)]: {
            width: '90%',
        },
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginBottom: 15,
        boxShadow: '0px 3px 2px rgb(177, 174, 174)',
        minWidth: 240,
    },
    section: {
        marginLeft: 10,
    },
    avatar: {
        width: 150, height: 150,
        [theme.breakpoints.down(1100)]: {
            width: 120, height: 120,
        },
        [theme.breakpoints.down(600)]: {
            width: 80, height: 80,
        },
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    followers: {
        fontSize: 12,
        fontStyle: 'italic'
    }
}))

export default useStyles
