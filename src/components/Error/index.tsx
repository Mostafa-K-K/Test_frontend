import { Box } from '@material-ui/core'
import useStyles from './Style'

export default function Error() {
    const styles = useStyles()

    return (
        <Box className={styles.container}>
            <Box>
                <Box className={styles.oops}>A problem occured while loading the page</Box>
                <Box display={'flex'} justifyContent={'center'}>
                    <Box
                        onClick={() => window.location.reload()}
                        className={styles.tryagain}
                    >
                        Click Here To Try Again
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}