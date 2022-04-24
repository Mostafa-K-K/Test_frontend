import { Avatar, Box, Typography } from '@material-ui/core'
import { isArray } from '../../functions'
import { ObjectAny, Props } from '../../types'
import NotFound from '../NotFound'
import useStyles from './Style'

export default function ArtistsItems({ artists }: Props) {
    const styles = useStyles()
    console.log(artists);


    if (isArray(artists))
        return (
            <Box className={styles.container}>
                {artists.map((artist: ObjectAny, i: number) => (
                    <Box
                        key={i}
                        className={styles.subContainer}
                    >
                        {isArray(artist?.images)
                            ? <Avatar alt={artist.name} src={artist?.images[0]?.url} className={styles.avatar} />
                            : <Avatar>{artist.name}</Avatar>
                        }
                        <Box className={styles.section}>
                            <Typography className={styles.name}>
                                {artist.name}
                            </Typography>
                            <Typography className={styles.followers}>
                                {artist?.followers.total} Followers
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        )
    return <NotFound />
}