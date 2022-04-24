import { Box, Typography } from '@material-ui/core'
import { isArray } from '../../functions'
import { Props } from '../../types'
import NotFound from '../NotFound'
import useStyles from './Style'

export default function SearchesHistory({ histories }: Props) {
    const styles = useStyles()

    if (isArray(histories))
        return (
            <Box className={styles.container}>
                {histories.map((history: string, i: number) => (
                    <Typography
                        key={i}
                        className={styles.text}
                    >
                        {history}
                    </Typography>
                ))}
            </Box>
        )
    return <NotFound />
}