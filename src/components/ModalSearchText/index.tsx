import { Box, Button, IconButton, Modal, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useState } from 'react'
import { isArray } from '../../functions'
import { Props } from '../../types'
import NotFound from '../NotFound'
import useStyles from './Style'

export default function ModalSearchText({ histories }: Props) {
    const styles = useStyles()

    const [open, setOpen] = useState<boolean>(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    if (!open) return (
        <Button
            type='button'
            onClick={handleOpen}
            className={styles.button}
        >
            History
        </Button>
    )

    return (
        <Box style={{ width: '100%' }}>
            <Modal
                open={open}
                onClose={handleClose}
                className={styles.modal}
            >
                <Box className={styles.container}>
                    <Box style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton
                            onClick={handleClose}
                            className={styles.iconbtn}
                        >
                            <Close />
                        </IconButton>
                    </Box>
                    {isArray(histories) ?
                        <Box className={styles.subContainer}>
                            {histories.map((history: string, i: number) => (
                                <Typography
                                    key={i}
                                    className={styles.text}
                                >
                                    {history}
                                </Typography>
                            ))}
                        </Box>
                        :
                        <NotFound />
                    }
                </Box>
            </Modal>
        </Box>
    )
}