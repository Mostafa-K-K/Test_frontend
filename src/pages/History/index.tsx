import { Box, IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Error, Loading, ModalSearchText, SearchesHistory, SearchInput } from '../../components'
import { fetch } from '../../functions'
import { Res } from '../../types'
import useStyles from './Style'

export default function History() {
    const styles = useStyles()
    const history = useHistory()

    const [name, setName] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [searches, setSearches] = useState<Array<string>>([])
    const [artists, setArtists] = useState<Array<string>>([])

    useEffect(() => {
        setIsLoading(true)
        let apiName = 'artists/uniquesearches'
        let reqBody = { name }
        fetch({ apiName, reqBody })
            .then((res: Res) => {
                let success = res?.success
                let result = res?.result
                setIsLoading(false)
                setIsSuccess(success)
                if (success) {
                    setArtists(result?.artists || [])
                    if (!name) setSearches(result?.searches || [])
                }
            })
            .catch(e => {
                setIsLoading(false)
                setIsSuccess(false)
            })
    }, [name])

    function getData() {
        if (isLoading) return <Loading />
        if (!isSuccess) return <Error />
        return <SearchesHistory histories={artists} />
    }

    return (
        <Box className={styles.container}>
            <Box className={styles.header}>
                <IconButton
                    onClick={() => history.push({ pathname: '/' })}
                    className={styles.iconbtn}
                >
                    <ArrowBack />
                </IconButton>
                <ModalSearchText histories={searches} />
            </Box>
            <SearchInput
                name={name}
                setName={setName}
                placeholder='Search in History'
            />
            {getData()}
        </Box>
    )
}