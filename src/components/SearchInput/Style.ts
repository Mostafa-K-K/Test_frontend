import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiInput-underline:after': {
            borderColor: '#F5B750',
            borderRadius: 5
        },
        '& .MuiOutlinedInput-root': {
            // '& fieldset': {
            //     borderColor: 'transparent'
            // },
            '&:hover fieldset': {
                borderColor: '#C4C4C4'
            },
            '&.Mui-focused fieldset': {
                borderColor: '#F5B750',
                borderRadius: 5
            },
            '&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root': {
                color: '#F5B750'
            },
        },
        backgroundColor: '#FFFFFF',
        margin: 'auto',
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
    },
    multilineColor: {
        fontSize: 18,
        [theme.breakpoints.down(1100)]: {
            fontSize: 16,
        },
        [theme.breakpoints.down(769)]: {
            fontSize: 14,
            height: 30
        },
    }
}))

export default useStyles
