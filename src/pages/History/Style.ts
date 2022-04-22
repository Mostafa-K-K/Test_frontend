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
    iconbtn: {
        width: 50
    }
}))

export default useStyles
