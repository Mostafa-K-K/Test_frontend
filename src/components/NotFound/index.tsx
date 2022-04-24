import { Box, Typography } from '@material-ui/core'
import { CloudOff } from '@material-ui/icons'
import { Props } from '../../types'
import useStyles from './Style'

export default function NotFound({ }: Props) {
    const styles = useStyles()

    return (
        <Box className={styles.container}>
            <CloudOff style={{ color: '#344450', marginBottom: 15 }} fontSize={'large'} />
            <Box className={styles.text}>
                Data Not Found
            </Box>
        </Box>
    )
}