import { Box, Button } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { ArtistsItems, Error, Loading, SearchInput } from '../../components'
import { fetch, isArray } from '../../functions'
import { ObjectAny, Res } from '../../types'
import useStyles from './Style'

export default function Artists() {
    const styles = useStyles()
    const history = useHistory()

    interface Istate {
        name: string;
        limit: number;
        page: number;
    }

    let initialState: Istate = {
        name: '',
        limit: 18,
        page: 1
    }

    const [state, updateState] = useState(initialState)
    const [artists, setartists] = useState<ObjectAny>({})
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    function setState(nextState: object) {
        updateState(prevState => ({
            ...prevState,
            ...nextState
        }))
    }

    useEffect(() => {
        setState({ page: 1 })
    }, [state.name])

    useEffect(() => {
        setIsLoading(true)
        let { name, page, limit } = state
        let apiName = 'artists/searches'
        let reqBody = { name, limit, offset: (page - 1) * limit }
        fetch({ apiName, reqBody })
            .then((res: Res) => {
                let success = res?.success
                setIsLoading(false)
                setIsSuccess(success)
                if (success) {
                    let artists = res?.result.artists
                    setartists(artists)
                }
            })
            .catch(e => {
                setIsLoading(false)
                setIsSuccess(false)
            })
    }, [state])

    useEffect(() => {
        if (!isLoading) {
            let artistsName: Array<String> = []
            if (!artists || !isArray(artists.items)) return
            artists.items.map((art: ObjectAny) => artistsName.push(art?.name))
            let apiName = 'artists'
            let reqBody = { searchText: state.name, artists: artistsName }
            fetch({ apiName, reqBody })
                .then(console.log)
                .catch(console.log)
        }
    }, [isLoading])

    function getData() {
        if (isLoading) return <Loading />
        if (!isSuccess) return <Error />
        return <ArtistsItems artists={artists?.items} />
    }

    return (
        <Box className={styles.container}>
            <Box className={styles.searchbar}>
                <Box style={{ width: '79%' }}>
                    <SearchInput
                        name={state.name}
                        setName={(val: string) => setState({ name: val })}
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
            {getData()}
            {artists.total > 0 && isSuccess &&
                <div className={styles.paginationWrapper}>
                    <Pagination
                        page={state.page}
                        count={Math.ceil(artists.total / state.limit)}
                        onChange={(e: any, page: number) => setState({ page })}
                    />
                </div>
            }
        </Box>
    )
}