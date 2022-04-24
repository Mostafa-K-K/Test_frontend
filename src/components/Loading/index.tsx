import { Box, CircularProgress } from '@material-ui/core'
import useStyles from './Style'

export default function Loading() {
    const styles = useStyles()

    return (
        <Box className={styles.container}>
            <Box style={{ position: 'relative', minHeight: 50 }}>
                <Box color={'#C4C4C4'} style={{ position: 'absolute', left: -25 }}>
                    <CircularProgress
                        variant='determinate'
                        color='inherit'
                        size={40}
                        thickness={4}
                        value={100}
                    />
                </Box>
                <Box color={'#344450'} style={{ position: 'absolute', left: -25 }}>
                    <CircularProgress
                        variant='indeterminate'
                        color='inherit'
                        size={40}
                        thickness={4}
                    />
                </Box>
            </Box>
            <Box className={styles.text}>
                Please Wait ...
            </Box>
        </Box >
    )
}
