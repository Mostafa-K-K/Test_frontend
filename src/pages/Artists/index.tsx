import { Box, Button } from '@material-ui/core'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { SearchInput } from '../../components'
import useStyles from './Style'

export default function Artists() {
    const styles = useStyles()
    const history = useHistory()
    const [name, setName] = useState('')

    return (
        <Box className={styles.container}>
            <Box className={styles.searchbar}>
                <Box style={{ width: '80%' }}>
                    <SearchInput
                        name={name}
                        setName={setName}
                        placeholder='Search in Artists'
                    />
                </Box>
                <Button
                    type='button'
                    onClick={() => history.push({ pathname: 'history' })}
                    className={styles.button}
                >
                    History
                </Button>
            </Box>
        </Box>
    )
}