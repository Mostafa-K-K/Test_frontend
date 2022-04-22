import { Box, IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { SearchInput } from '../../components'
import useStyles from './Style'

export default function History() {
    const styles = useStyles()
    const history = useHistory()
    const [name, setName] = useState('')

    return (
        <Box className={styles.container}>
            <IconButton
                onClick={() => history.push({ pathname: '/' })}
                className={styles.iconbtn}
            >
                <ArrowBack />
            </IconButton>
            <SearchInput
                name={name}
                setName={setName}
                placeholder='Search in History'
            />
        </Box>
    )
}