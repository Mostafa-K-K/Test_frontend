import { InputAdornment, TextField } from '@material-ui/core'
import { Search as IconSearch } from '@material-ui/icons'
import useStyles from './Style'
import { Props } from '../../types'

export default function SearchInput({
    placeholder,
    name,
    setName,
}: Props) {

    const styles = useStyles()
    return (
        <TextField
            fullWidth
            variant='outlined'
            size='small'
            placeholder={placeholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.root}
            InputProps={{
                className: styles.multilineColor,
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconSearch />
                    </InputAdornment>
                )
            }}
        />
    )
}