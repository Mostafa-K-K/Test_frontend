import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: 'auto',
        minHeight: 300,
        marginBottom: '3%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
    },
    searchbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: 'gray',
        color: '#FFFFFF',
        width: '19%',
        padding: 8,
        fontSize: 15,
        '&:hover': {
            backgroundColor: '#F5B750',
        },
    },
}))

export default useStyles
